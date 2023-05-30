/** @type {import('next').NextConfig} */
const { i18n } = require('./next-i18next.config');

// const nextConfig = {
//   reactStrictMode: true,
//   swcMinify: true,
//   experimental: { 
//     images: {
//       allowFutureImage: true,
//     } 
//   },
// }

module.exports = {
  async rewrites() {
    return [
      {
        source: "/investors",
        destination: "/investors/1"
      },
      {
        source: "/discover/wallets",
        destination: "/discover/wallets/1"
      },
      {
        source: "/discover/communities",
        destination: "/discover/communities/1"
      },
      {
        source: "/dev-guides",
        destination: "/dev-guides/page/1"
      },
      {
        source: "/reading",
        destination: "/reading/page/1"
      }
    ]
  },
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['imagedelivery.net', 'res.cloudinary.com', '127.0.0.1'],
  },
  i18n
}