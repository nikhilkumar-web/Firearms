const fs = require('fs');

const html = fs.readFileSync('scripts/original_page.html', 'utf8');

// Let's extract elementor sections or main container blocks
const sections = [];
const elementorSections = html.match(/<section[^>]+class="[^"]*elementor-section[^"]*"[^>]*>[\s\S]*?<\/section>/gi) || [];

console.log('Found elementor sections:', elementorSections.length);

elementorSections.forEach((sec, i) => {
  const cleanText = sec.replace(/<script[\s\S]*?<\/script>/gi, '')
                       .replace(/<style[\s\S]*?<\/style>/gi, '')
                       .replace(/<[^>]+>/g, ' ')
                       .replace(/\s+/g, ' ')
                       .trim();
  if (cleanText.length > 20) {
    console.log(`\n=== Section ${i + 1} ===`);
    console.log(cleanText.slice(0, 300) + (cleanText.length > 300 ? '...' : ''));
  }
});
