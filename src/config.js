/**
 * Email / SMTP Configuration
 * 
 * All non-sensitive mail options are maintained here.
 * Only the SMTP password is read from process.env.SMTP_PASS.
 */

export const config = {
  mail: {
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    user: 'nikhil.kumar@difm.tech',
    pass: process.env.SMTP_PASS || '',
    from: '"American Firearms Network" <nikhil.kumar@difm.tech>',
    to: 'nikhil.kumar@difm.tech',
    // Hosted on IONOS S3 Object Storage (HTTP 200 Verified)
    logoUrl: 'https://american-firearms.s3-eu-central-2.ionoscloud.com/images/logo/logo.png',
  },
  ionos: {
    endpoint: 'https://american-firearms.s3-eu-central-2.ionoscloud.com',
    bucketName: 'american-firearms',
  },
};

export default config;
