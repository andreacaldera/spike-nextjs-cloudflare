/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
    runtime: "edge",
  },
  reactStrictMode: true,
};

module.exports = nextConfig;
