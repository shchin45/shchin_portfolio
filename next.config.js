/* eslint-env node */

// https://github.com/vercel/next.js/blob/master/packages/next/next-server/server/config.ts
const nextConfig = {
  output: 'export',
  webpack: config => {
    const oneOfRule = config.module.rules.find(rule => rule.oneOf);

    // Next 12 has multiple TS loaders, and we need to update all of them.
    const tsRules = oneOfRule.oneOf.filter(rule => rule.test && rule.test.toString().includes('tsx|ts'));

    tsRules.forEach(rule => {
      // eslint-disable-next-line no-param-reassign
      rule.include = undefined;
    });
    config.resolve = {
      ...config.resolve,
      fallback: {
        fs: false,
        path: false,
        os: false,
        net: false,
        dns: false,
        child_process: false,
        tls: false,
      },
    };

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
  swcMinify: true,
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  assetPrefix: './',
};

module.exports = nextConfig;
