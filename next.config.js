/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["naname-nft-marketplace.infura-ipfs.io", "infura-ipfs.io"],
  },
  env: {
    NEXT_PROJECT_ID: process.env.NEXT_PROJECT_ID,
    NEXT_PROJECT_SECRET_KEY: process.env.NEXT_PROJECT_SECRET_KEY
  },
};

module.exports = nextConfig
