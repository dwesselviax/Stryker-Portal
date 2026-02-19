/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/Stryker-Portal',
  trailingSlash: true,
  images: { unoptimized: true },
  sassOptions: {
    silenceDeprecations: ['legacy-js-api'],
  },
};

export default nextConfig;
