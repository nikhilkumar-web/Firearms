export default function robots() {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/thank-you'],
      },
    ],
    sitemap: 'https://americanfirearmsnetwork.com/sitemap.xml',
  };
}
