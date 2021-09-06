const withPlugins = require('next-compose-plugins');
const optimizedImages = require('next-optimized-images');

module.exports = withPlugins([[
  optimizedImages, {
    handleImages: ['svg']
  }
]], {
  reactStrictMode: true,
  trailingSlash: true,
  images: {
    disableStaticImages: true,
  }
})
