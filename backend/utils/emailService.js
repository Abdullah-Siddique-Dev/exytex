const nodemailer = require('nodemailer');

const createTransporter = () => {
  return nodemailer.createTransporter({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS
    },
    tls: {
      rejectUnauthorized: false
    }
  });
};

// Beautiful admin notification email
const sendNotificationEmail = async (submission) => {
  try {
    const transporter = createTransporter();

    const formTypeLabel = {
      'contact': '📬 Contact Form',
      'hire-developer': '💼 Hire Developer',
      'it-staffing': '👥 IT Staffing',
      'digital-marketing': '📈 Digital Marketing',
    }[submission.formType] || '📋 Form Submission';

    const html = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8"/>
  <style>
    * { margin:0; padding:0; box-sizing:border-box; }
    body { font-family: 'Segoe UI', Arial, sans-serif; background:#f0f4f8; }
    .wrapper { max-width:620px; margin:30px auto; background:#fff; border-radius:16px; overflow:hidden; box-shadow:0 4px 24px rgba(0,0,0,0.10); }
    .header { background:linear-gradient(135deg,#1e3a8a 0%,#3b82f6 100%); padding:36px 32px; text-align:center; }
    .header h1 { color:#fff; font-size:26px; font-weight:700; margin-bottom:6px; }
    .header p { color:#bfdbfe; font-size:15px; }
    .badge { display:inline-block; background:rgba(255,255,255,0.2); color:#fff; padding:6px 18px; border-radius:20px; font-size:13px; margin-top:12px; }
    .body { padding:32px; }
    .section-title { font-size:13px; font-weight:700; color:#6b7280; text-transform:uppercase; letter-spacing:1px; margin-bottom:14px; }
    .field-row { display:flex; align-items:flex-start; padding:12px 0; border-bottom:1px solid #f3f4f6; }
    .field-row:last-child { border-bottom:none; }
    .field-icon { width:36px; height:36px; border-radius:8px; background:#eff6ff; display:flex; align-items:center; justify-content:center; font-size:16px; margin-right:14px; flex-shrink:0; }
    .field-label { font-size:12px; color:#9ca3af; font-weight:600; text-transform:uppercase; letter-spacing:0.5px; }
    .field-value { font-size:15px; color:#1f2937; font-weight:500; margin-top:2px; }
    .message-box { background:#f8fafc; border-left:4px solid #3b82f6; border-radius:0 8px 8px 0; padding:16px 20px; margin:20px 0; }
    .message-box p { color:#374151; font-size:15px; line-height:1.7; }
    .footer { background:#f8fafc; padding:20px 32px; text-align:center; border-top:1px solid #e5e7eb; }
    .footer p { color:#9ca3af; font-size:13px; }
    .time-badge { background:#fef3c7; color:#92400e; padding:4px 12px; border-radius:20px; font-size:12px; font-weight:600; }
  </style>
</head>
<body>
<div class="wrapper">
  <div class="header">
    <h1>🔔 New Form Submission</h1>
    <p>Someone just reached out through your website</p>
    <div class="badge">${formTypeLabel}</div>
  </div>
  <div class="body">
    <p class="section-title">Contact Details</p>

    <div class="field-row">
      <div class="field-icon">👤</div>
      <div>
        <div class="field-label">Full Name</div>
        <div class="field-value">${submission.name}</div>
      </div>
    </div>

    <div class="field-row">
      <div class="field-icon">📧</div>
      <div>
        <div class="field-label">Email</div>
        <div class="field-value">${submission.email}</div>
      </div>
    </div>

    <div class="field-row">
      <div class="field-icon">📞</div>
      <div>
        <div class="field-label">Phone</div>
        <div class="field-value">${submission.phone || 'Not provided'}</div>
      </div>
    </div>

    <div class="field-row">
      <div class="field-icon">🏢</div>
      <div>
        <div class="field-label">Company</div>
        <div class="field-value">${submission.company || 'Not provided'}</div>
      </div>
    </div>

    ${submission.service ? `
    <div class="field-row">
      <div class="field-icon">⚙️</div>
      <div>
        <div class="field-label">Service Interested In</div>
        <div class="field-value">${submission.service}</div>
      </div>
    </div>` : ''}

    ${submission.budget ? `
    <div class="field-row">
      <div class="field-icon">💰</div>
      <div>
        <div class="field-label">Budget</div>
        <div class="field-value">${submission.budget}</div>
      </div>
    </div>` : ''}

    ${submission.role ? `
    <div class="field-row">
      <div class="field-icon">💼</div>
      <div>
        <div class="field-label">Role Required</div>
        <div class="field-value">${submission.role}</div>
      </div>
    </div>` : ''}

    <br/>
    <p class="section-title">Message</p>
    <div class="message-box">
      <p>${submission.message}</p>
    </div>
  </div>
  <div class="footer">
    <span class="time-badge">⏰ ${new Date(submission.submittedAt).toLocaleString('en-US', { dateStyle: 'medium', timeStyle: 'short' })}</span>
    <p style="margin-top:10px;">Exytex Website — Automated Notification</p>
  </div>
</div>
</body>
</html>`;

    await transporter.sendMail({
      from: process.env.EMAIL_FROM,
      to: process.env.EMAIL_USER,
      subject: `🔔 New ${formTypeLabel} from ${submission.name}`,
      html
    });

    console.log('✅ Notification email sent to admin');
  } catch (error) {
    console.error('❌ Error sending notification email:', error);
    throw error;
  }
};

// Confirmation email to the user
const sendConfirmationEmail = async (submission) => {
  try {
    const transporter = createTransporter();

    const html = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8"/>
  <style>
    * { margin:0; padding:0; box-sizing:border-box; }
    body { font-family: 'Segoe UI', Arial, sans-serif; background:#f0f4f8; }
    .wrapper { max-width:620px; margin:30px auto; background:#fff; border-radius:16px; overflow:hidden; box-shadow:0 4px 24px rgba(0,0,0,0.10); }
    .header { background:linear-gradient(135deg,#1e3a8a 0%,#3b82f6 100%); padding:40px 32px; text-align:center; }
    .header h1 { color:#fff; font-size:28px; font-weight:700; }
    .header p { color:#bfdbfe; font-size:15px; margin-top:8px; }
    .body { padding:36px 32px; }
    .body p { color:#374151; font-size:15px; line-height:1.8; margin-bottom:16px; }
    .highlight { background:#eff6ff; border-radius:10px; padding:20px 24px; margin:20px 0; }
    .highlight p { margin:6px 0; color:#1e40af; font-size:14px; }
    .footer { background:#f8fafc; padding:20px 32px; text-align:center; border-top:1px solid #e5e7eb; }
    .footer p { color:#9ca3af; font-size:13px; }
  </style>
</head>
<body>
<div class="wrapper">
  <div class="header">
    <h1>✅ We Got Your Message!</h1>
    <p>Thank you for reaching out to Exytex</p>
  </div>
  <div class="body">
    <p>Hi <strong>${submission.name}</strong>,</p>
    <p>We've received your inquiry and our team will get back to you within <strong>24 hours</strong>.</p>
    <div class="highlight">
      <p><strong>📋 Form:</strong> ${submission.formType}</p>
      <p><strong>📧 Email:</strong> ${submission.email}</p>
      <p><strong>🕐 Submitted:</strong> ${new Date(submission.submittedAt).toLocaleString()}</p>
    </div>
    <p>If you have any urgent questions, feel free to reply to this email.</p>
    <p>Best regards,<br/><strong>The Exytex Team</strong></p>
  </div>
  <div class="footer">
    <p>© ${new Date().getFullYear()} Exytex. All rights reserved.</p>
  </div>
</div>
</body>
</html>`;

    await transporter.sendMail({
      from: process.env.EMAIL_FROM,
      to: submission.email,
      subject: `✅ We received your message — Exytex`,
      html
    });

    console.log('✅ Confirmation email sent to:', submission.email);
  } catch (error) {
    console.error('❌ Error sending confirmation email:', error);
    throw error;
  }
};

module.exports = { sendNotificationEmail, sendConfirmationEmail };
