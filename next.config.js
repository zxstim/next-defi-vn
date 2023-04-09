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
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['imagedelivery.net', 'res.cloudinary.com', '127.0.0.1'],
  },
  i18n
}