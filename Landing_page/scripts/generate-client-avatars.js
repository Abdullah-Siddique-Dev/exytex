// Script to generate client avatar SVGs
const fs = require('fs');
const path = require('path');

const colors = [
  ['#3b82f6', '#1e40af'], // blue
  ['#8b5cf6', '#7c3aed'], // purple
  ['#06b6d4', '#0891b2'], // cyan
  ['#10b981', '#059669'], // emerald
  ['#f59e0b', '#d97706'], // amber
  ['#ef4444', '#dc2626'], // red
  ['#ec4899', '#db2777'], // pink
  ['#6366f1', '#4f46e5'], // indigo
  ['#84cc16', '#65a30d'], // lime
  ['#f97316', '#ea580c']  // orange
];

const generateAvatarSVG = (index, color1, color2) => {
  return `<svg width="150" height="150" viewBox="0 0 150 150" fill="none" xmlns="http://www.w3.org/2000/svg">
<defs>
  <linearGradient id="avatar${index}" x1="0%" y1="0%" x2="100%" y2="100%">
    <stop offset="0%" style="stop-color:${color1};stop-opacity:1" />
    <stop offset="100%" style="stop-color:${color2};stop-opacity:1" />
  </linearGradient>
</defs>
<circle cx="75" cy="75" r="75" fill="url(#avatar${index})"/>
<circle cx="75" cy="60" r="25" fill="rgba(255,255,255,0.9)"/>
<ellipse cx="75" cy="120" rx="35" ry="25" fill="rgba(255,255,255,0.9)"/>
</svg>`;
};

// Create directory if it doesn't exist
const clientsDir = path.join(__dirname, '..', 'public', 'images', 'clients');
if (!fs.existsSync(clientsDir)) {
  fs.mkdirSync(clientsDir, { recursive: true });
}

// Generate 10 client avatars
for (let i = 1; i <= 10; i++) {
  const [color1, color2] = colors[i - 1];
  const svgContent = generateAvatarSVG(i, color1, color2);
  const filePath = path.join(clientsDir, `client-${i}.jpg`);
  fs.writeFileSync(filePath, svgContent);
  console.log(`Generated client-${i}.jpg`);
}

console.log('All client avatars generated successfully!');