import createMDX from '@next/mdx';

const withMDX = createMDX({
  extension: /\.mdx?$/
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    serverActions: true
  },
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx']
};

export default withMDX(nextConfig);
