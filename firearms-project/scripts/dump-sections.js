const fs = require('fs');

const html = fs.readFileSync('scripts/original_page.html', 'utf8');
const elementorSections = html.match(/<section[^>]+class="[^"]*elementor-section[^"]*"[^>]*>[\s\S]*?<\/section>/gi) || [];

let out = '';
elementorSections.forEach((sec, i) => {
  const clean = sec.replace(/<script[\s\S]*?<\/script>/gi, '')
                   .replace(/<style[\s\S]*?<\/style>/gi, '')
                   .replace(/<[^>]+>/g, '\n')
                   .split('\n')
                   .map(l => l.trim())
                   .filter(l => l.length > 0)
                   .join('\n');
  out += `\n================== SECTION ${i + 1} ==================\n` + clean + '\n';
});

fs.writeFileSync('scripts/full_sections_text.txt', out);
console.log('Written full_sections_text.txt');
