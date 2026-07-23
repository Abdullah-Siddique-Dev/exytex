import React from 'react';
import { motion } from 'framer-motion';

export const ContactInfoSection: React.FC = () => {
  const offices = [
    {
      country: 'Pakistan',
      flag: '🇵🇰',
      address: 'Minaar Rd, Lala Rukh St, Wah Cantt, 47040, Pakistan',
      phone: '+92 309 5930315',
      email: 'info@exytex.com',
      hours: 'Mon-Fri: 9:00 AM - 6:00 PM PKT'
    },
    {
      country: 'United Kingdom',
      flag: '🇬🇧',
      address: '27 Hollybank Gardens, Bradford BD7 4QR, UK',
      phone: '+44 7466 109725',
      email: 'info@exytex.com',
      hours: 'Mon-Fri: 9:00 AM - 5:00 PM GMT'
    },
    {
      country: 'United Arab Emirates',
      flag: '🇦🇪',
      address: 'Dubai, UAE – France Cluster Pavilion Mall P-05, Intl City',
      phone: '+92 309 5930315',
      email: 'info@exytex.com',
      hours: 'Sun-Thu: 9:00 AM - 6:00 PM GST'
    }
  ];

  const faqs = [
    {
      question: 'How long does a typical project take?',
      answer: 'Project timelines vary based on complexity. Simple websites take 2-4 weeks, while complex applications can take 3-6 months.'
    },
    {
      question: 'Do you provide ongoing support?',
      answer: 'Yes, we offer 24/7 support and maintenance packages to keep your website running smoothly after launch.'
    },
    {
      question: 'What technologies do you use?',
      answer: 'We use modern technologies like React, Next.js, Node.js, and cloud platforms to build scalable solutions.'
    },
    {
      question: 'Can you work with our existing team?',
      answer: 'Absolutely! We can integrate with your existing team or work as your dedicated development partner.'
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          {/* Office Locations */}
          <motion.div
            className="mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="text-center mb-12">
              <h2 
                className="text-3xl font-bold text-gray-900 mb-4"
                style={{ fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, sans-serif' }}
              >
                Our Global Offices
              </h2>
              <p 
                className="text-gray-600 max-w-2xl mx-auto"
                style={{ fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, sans-serif' }}
              >
                We have offices around the world to serve you better. Get in touch with the office nearest to you.
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {offices.map((office, index) => (
                <motion.div
                  key={office.country}
                  className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                >
                  <div className="flex items-center mb-6">
                    <span className="text-3xl mr-3">{office.flag}</span>
                    <h3 
                      className="text-xl font-bold text-gray-900"
                      style={{ fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, sans-serif' }}
                    >
                      {office.country}
                    </h3>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-start">
                      <svg className="w-5 h-5 text-gray-400 mt-0.5 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      <p className="text-gray-600 text-sm">{office.address}</p>
                    </div>

                    <div className="flex items-center">
                      <svg className="w-5 h-5 text-gray-400 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      <a href={`tel:${office.phone}`} className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                        {office.phone}
                      </a>
                    </div>

                    <div className="flex items-center">
                      <svg className="w-5 h-5 text-gray-400 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      <a href={`mailto:${office.email}`} className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                        {office.email}
                      </a>
                    </div>

                    <div className="flex items-center">
                      <svg className="w-5 h-5 text-gray-400 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <p className="text-gray-600 text-sm">{office.hours}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* FAQ Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="text-center mb-12">
              <h2 
                className="text-3xl font-bold text-gray-900 mb-4"
                style={{ fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, sans-serif' }}
              >
                Frequently Asked Questions
              </h2>
              <p 
                className="text-gray-600 max-w-2xl mx-auto"
                style={{ fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, sans-serif' }}
              >
                Have questions? We have answers. Here are some of the most common questions we receive.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  className="bg-white rounded-xl p-6 shadow-sm border border-gray-100"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <h3 
                    className="font-semibold text-gray-900 mb-3"
                    style={{ fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, sans-serif' }}
                  >
                    {faq.question}
                  </h3>
                  <p 
                    className="text-gray-600 text-sm leading-relaxed"
                    style={{ fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, sans-serif' }}
                  >
                    {faq.answer}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
