const withPlugins = require('next-compose-plugins');
const optimizedImages = require('next-optimized-images');

module.exports = withPlugins([[
  optimizedImages, {
    handleImages: ['svg', 'png']
  }
]], {
  trailingSlash: false,
  reactStrictMode: true,
  images: {
    disableStaticImages: true,
  }
})
