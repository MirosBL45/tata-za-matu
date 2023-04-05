/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
}

module.exports = nextConfig

module.exports = {
  i18n: {
    locales: ['sr_SP', 'en'],
    defaultLocale: 'sr_SP',
    localeDetection: false,
  },
}