/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/Stryker-Portal',
  sassOptions: {
    silenceDeprecations: ['legacy-js-api'],
  },
};

export default nextConfig;
