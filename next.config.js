const withPlugins = require('next-compose-plugins')
const optimizedImages = require('next-optimized-images')

module.exports = withPlugins(
  [
    [
      optimizedImages,
      {
        handleImages: ['svg', 'png']
      }
    ]
  ],
  {
    reactStrictMode: true,
    trailingSlash: false,
    images: {
      disableStaticImages: true
    },
    webpack: (config, { isServer }) => {
      if (!isServer) {
        config.resolve.fallback = {
          net: false,
          tls: false,
          crypto: false
        }
      }

      return config
    }
  }
)
