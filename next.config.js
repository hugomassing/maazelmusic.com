const isProduction = process.env.NODE_ENV === "production";
const withPlugins = require("next-compose-plugins");
const optimizedImages = require("next-optimized-images");

const nextConfig = {
  assetPrefix: '/',
  publicRuntimeConfig: {
    // used in '/components/Link.js/', for more details go to the component itself
    linkPrefix: isProduction ? "/maazelmusic.com" : ""
  },
  webpack: config => {
    config.module.rules.push({
      test: /\.md$/,
      use: "raw-loader"
    });

    return config;
  }
};
module.exports = withPlugins([[optimizedImages]], nextConfig);
