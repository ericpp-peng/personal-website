/* eslint-env node */

// https://github.com/vercel/next.js/blob/master/packages/next/next-server/server/config.ts
const nextConfig = {
  webpack: config => {
    const oneOfRule = config.module.rules.find(rule => rule.oneOf);

    // Next 12 has multiple TS loaders, and we need to update all of them.
    const tsRules = oneOfRule.oneOf.filter(rule => rule.test && rule.test.toString().includes('tsx|ts'));

    tsRules.forEach(rule => {
      // eslint-disable-next-line no-param-reassign
      rule.include = undefined;
    });

    return config;
  },
  compress: true,
  generateEtags: true,
  pageExtensions: ['tsx', 'mdx', 'ts'],
  poweredByHeader: false,
  productionBrowserSourceMaps: false,
  svgo: {
    multipass: true,
    plugins: ['removeDimensions'],
  },
  strictMode: true,
  trailingSlash: false,
  images: {
    unoptimized: true,
  },
};

// eslint-disable-next-line no-undef
module.exports = {
  // eslint-disable-next-line no-undef
  env: {
    customKey: 'my-value',
  },
  basePath: process.env.NODE_ENV === 'production' ? '/personal-website' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/personal-website/' : '',
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
  trailingSlash: false,
  images: {
    unoptimized: true,
  },
};
