const nextConfig = {
  experimental: {
    optimizeCss: true,
    swcMinify: true,
  },
  compiler: {
    styledComponents: true,
  },
  images: {
    formats: ['image/webp'],
    minimumCacheTTL: 86400,
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.(woff|woff2|eot|ttf|otf)$/,
      use: ['file-loader'],
    });
    return config;
  },
};

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true'
});

module.exports = withBundleAnalyzer(nextConfig);