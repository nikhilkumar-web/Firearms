const fs = require('fs');
const path = require('path');
const https = require('https');

// Image mapping with clean, meaningful naming
const imageManifest = [
  // Logo & Branding
  {
    url: 'https://americanfirearmsnetwork.com/wp-content/uploads/2026/01/American-Firearm-Logo-05-1.png',
    dest: 'public/images/logo/logo.png',
    desc: 'Main Site Logo'
  },
  {
    url: 'https://americanfirearmsnetwork.com/wp-content/uploads/2026/02/cropped-Firearm-logo-192x192.png',
    dest: 'public/images/logo/favicon.png',
    desc: 'Site Favicon & Icon'
  },

  // Hero & Video Banners
  {
    url: 'https://americanfirearmsnetwork.com/wp-content/uploads/2026/01/Image_20260218_204615_240.jpeg',
    dest: 'public/images/hero/hero-banner.jpg',
    desc: 'Hero Banner Image (also used on About & Gallery header)'
  },
  {
    url: 'https://americanfirearmsnetwork.com/wp-content/uploads/2026/01/TheFirearmsLearningAnnex_mkvBG-800h.png',
    dest: 'public/images/video/video-bg.png',
    desc: 'YouTube / Tactical Media Section Background'
  },

  // About Section & Story Images
  {
    url: 'https://americanfirearmsnetwork.com/wp-content/uploads/2026/01/TheFirearmsLearningAnnex_img5-800h.jpg',
    dest: 'public/images/about/tactical-ecosystem.jpg',
    desc: 'About Us Training Philosophy Image'
  },
  {
    url: 'https://americanfirearmsnetwork.com/wp-content/uploads/2026/01/media_12-f1510ca5-800h.webp',
    dest: 'public/images/about/tactical-diagnostics.webp',
    desc: 'About Us Indoor Diagnostics Image'
  },
  {
    url: 'https://americanfirearmsnetwork.com/wp-content/uploads/2026/01/firearmstrainingofpalmbeach_range-service-1000h.webp',
    dest: 'public/images/about/range-service.webp',
    desc: 'About Us Range Network Partner Image'
  },

  // Gallery Showcase Images
  {
    url: 'https://americanfirearmsnetwork.com/wp-content/uploads/2026/01/TheFirearmsLearningAnnex_img4-800h.webp',
    dest: 'public/images/gallery/gallery-pistol-fundamentals.webp',
    desc: 'Gallery: Pistol Fundamentals'
  },
  {
    url: 'https://americanfirearmsnetwork.com/wp-content/uploads/2026/01/TheFirearmsLearningAnnex_img6-800h.webp',
    dest: 'public/images/gallery/gallery-tactical-movement.webp',
    desc: 'Gallery: Movement Under Fire'
  },
  {
    url: 'https://americanfirearmsnetwork.com/wp-content/uploads/2026/01/TheFirearmsLearningAnnex_img7-800h.webp',
    dest: 'public/images/gallery/gallery-target-evaluation.webp',
    desc: 'Gallery: Target Assessment'
  },
  {
    url: 'https://americanfirearmsnetwork.com/wp-content/uploads/2026/01/media_11-800h.webp',
    dest: 'public/images/gallery/gallery-concealed-carry.webp',
    desc: 'Gallery: Concealed Carry Draw'
  },
  {
    url: 'https://americanfirearmsnetwork.com/wp-content/uploads/2026/01/media_12-800h.webp',
    dest: 'public/images/gallery/gallery-range-line.webp',
    desc: 'Gallery: Firing Line Drills'
  },
  {
    url: 'https://americanfirearmsnetwork.com/wp-content/uploads/2026/01/media_13-800h.png',
    dest: 'public/images/gallery/gallery-tactical-carbine.png',
    desc: 'Gallery: Tactical Carbine'
  },
  {
    url: 'https://americanfirearmsnetwork.com/wp-content/uploads/2026/01/media_14-800h.png',
    dest: 'public/images/gallery/gallery-range-safety.png',
    desc: 'Gallery: Range Safety Protocol'
  },
  {
    url: 'https://americanfirearmsnetwork.com/wp-content/uploads/2026/01/media_15-800h.png',
    dest: 'public/images/gallery/gallery-private-instruction.png',
    desc: 'Gallery: Private 1-on-1 Mentorship'
  },
  {
    url: 'https://americanfirearmsnetwork.com/wp-content/uploads/2026/01/media_16-800h.png',
    dest: 'public/images/gallery/gallery-group-drills.png',
    desc: 'Gallery: Dynamic Group Sessions'
  },
  {
    url: 'https://americanfirearmsnetwork.com/wp-content/uploads/2026/01/media_1-800h.png',
    dest: 'public/images/gallery/gallery-defensive-posture.png',
    desc: 'Gallery: Defensive Posture & Grip'
  }
];

function downloadFile(url, dest) {
  return new Promise((resolve, reject) => {
    const fullDest = path.resolve(__dirname, '..', dest);
    const dir = path.dirname(fullDest);
    fs.mkdirSync(dir, { recursive: true });

    const file = fs.createWriteStream(fullDest);
    https.get(url, { headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)' } }, (res) => {
      if (res.statusCode === 301 || res.statusCode === 302) {
        return downloadFile(res.headers.location, dest).then(resolve).catch(reject);
      }
      if (res.statusCode !== 200) {
        file.close();
        fs.unlinkSync(fullDest);
        return reject(new Error(`Failed with HTTP ${res.statusCode}: ${url}`));
      }
      res.pipe(file);
      file.on('finish', () => {
        file.close(resolve);
      });
    }).on('error', (err) => {
      fs.unlink(fullDest, () => {});
      reject(err);
    });
  });
}

async function start() {
  console.log('Downloading assets from americanfirearmsnetwork.com with clean naming...\n');
  let successCount = 0;

  for (const item of imageManifest) {
    try {
      process.stdout.write(`Downloading: ${item.dest}... `);
      await downloadFile(item.url, item.dest);
      console.log('DONE (' + item.desc + ')');
      successCount++;
    } catch (err) {
      console.log('FAILED: ' + err.message);
    }
  }

  console.log(`\nSuccessfully downloaded ${successCount}/${imageManifest.length} images.`);
}

start();
