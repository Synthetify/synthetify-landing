const withPlugins = require('next-compose-plugins');
const optimizedImages = require('next-optimized-images');

module.exports = withPlugins([[
  optimizedImages, {
    handleImages: ['svg', 'png']
  }
]], {
  reactStrictMode: true,
  trailingSlash: false,
  images: {
    disableStaticImages: true,
  },
  redirects: async () => [
    {
      source: '/\\?(.*)',
      destination: '/',
      permanent: true
    }
  ]
})
