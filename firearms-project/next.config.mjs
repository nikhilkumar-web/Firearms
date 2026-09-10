/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/defensive-firearms-training',
        destination: '/services/defensive-firearms-training',
      },
      {
        source: '/basic-firearms-safety-courses',
        destination: '/services/basic-firearms-safety-courses',
      },
      {
        source: '/concealed-carry-permit-ccw-training',
        destination: '/services/concealed-carry-permit-ccw-training',
      },
      {
        source: '/advanced-firearms-training',
        destination: '/services/advanced-firearms-training',
      },
      {
        source: '/tactical-training',
        destination: '/services/tactical-training',
      },
      {
        source: '/womens-only-firearms-training',
        destination: '/services/womens-only-firearms-training',
      },
      {
        source: '/youth-firearms-safety-courses',
        destination: '/services/youth-firearms-safety-courses',
      },
      {
        source: '/private-instruction',
        destination: '/services/private-instruction',
      },
      {
        source: '/situational-awareness-training',
        destination: '/services/situational-awareness-training',
      },
      {
        source: '/firearm-rental-and-range',
        destination: '/services/firearm-rental-and-range',
      },
      {
        source: '/images/:path*',
        destination: 'https://american-firearms.s3-eu-central-2.ionoscloud.com/images/:path*',
      },
      {
        source: '/video/:path*',
        destination: 'https://american-firearms.s3-eu-central-2.ionoscloud.com/video/:path*',
      },
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'american-firearms.s3-eu-central-2.ionoscloud.com',
      },
      {
        protocol: 'https',
        hostname: 'americanfirearmsnetwork.com',
      },
      {
        protocol: 'https',
        hostname: 'img.youtube.com',
      },
    ],
  },
  async redirects() {
    return [
      {
        source: '/robot.txt',
        destination: '/robots.txt',
        permanent: true,
      },
      {
        source: '/services',
        destination: '/services/defensive-firearms-training',
        permanent: false,
      },
      {
        source: '/training-ranges',
        destination: '/training-ranges/gun-world-of-south-florida',
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
