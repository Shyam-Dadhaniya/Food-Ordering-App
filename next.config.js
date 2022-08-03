/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    URL:
      process.env.NODE_ENV === "development"
        ? "http://localhost:3000/api/"
        : "live url",
  },
};

module.exports = nextConfig;
