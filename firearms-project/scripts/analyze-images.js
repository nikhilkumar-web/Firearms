const https = require('https');

function fetchUrl(url) {
  return new Promise((resolve, reject) => {
    https.get(url, { headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)' } }, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => resolve(data));
    }).on('error', reject);
  });
}

async function run() {
  const pages = {
    home: 'https://americanfirearmsnetwork.com/',
    gallery: 'https://americanfirearmsnetwork.com/gallery/',
    about: 'https://americanfirearmsnetwork.com/about-us/'
  };

  const imagesByPage = {};
  for (const [name, url] of Object.entries(pages)) {
    try {
      const html = await fetchUrl(url);
      const matches = html.match(/https?:\/\/[^\s\"\'\)\>]+\.(?:jpg|jpeg|png|webp|svg)/gi) || [];
      const wpImages = matches.filter(u => u.includes('wp-content/uploads'));
      imagesByPage[name] = [...new Set(wpImages)];
    } catch (e) {
      console.error(e);
      imagesByPage[name] = [];
    }
  }

  console.log('--- Images Count ---');
  console.log('Home:', imagesByPage.home.length);
  console.log('Gallery:', imagesByPage.gallery.length);
  console.log('About:', imagesByPage.about.length);

  const gallerySet = new Set(imagesByPage.gallery);
  const commonWithHome = imagesByPage.home.filter(img => gallerySet.has(img));
  const commonWithAbout = imagesByPage.about.filter(img => gallerySet.has(img));

  console.log('\n--- Common with Home ---');
  console.log(JSON.stringify(commonWithHome, null, 2));

  console.log('\n--- Common with About ---');
  console.log(JSON.stringify(commonWithAbout, null, 2));
}

run();
