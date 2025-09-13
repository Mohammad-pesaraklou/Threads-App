/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack(config) {
    config.cache = {
      type: "filesystem",
      maxMemoryGenerations: 1,
    };
    return config;
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.clerk.dev",
      },
    ],
  },
};

module.exports = nextConfig;
