module.exports = {
  reactStrictMode: true,
  poweredByHeader: false,
  compress: true,
  target: 'server',
  distDir: '.next',
  generateEtags: true,
  pageExtensions: ['tsx'],
  productionBrowserSourceMaps: true,
  typescript: {
    ignoreDevErrors: true,
  },
};