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
  experimental: { 
    images: {
      allowFutureImage: true,
    } 
  },
  i18n
}