/* eslint-env node */

// eslint-disable-next-line no-undef
module.exports = {
  // eslint-disable-next-line no-undef
  env: {
    customKey: 'my-value',
  },
  // eslint-disable-next-line no-undef
  eslint: {
    ignoreDuringBuilds: true,
  },
  // eslint-disable-next-line no-undef
  typescript: {
    ignoreBuildErrors: true,
  },
  // eslint-disable-next-line no-undef
  strictMode: true,
  swcMinify: false,
  trailingSlash: false,
  images: {
    unoptimized: true,
  },
};
