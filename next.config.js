/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    URL:
      process.env.NODE_ENV === "development"
        ? "http://localhost:3000/api/"
        : "https://main--food-delivery-application.netlify.app/api/",
  },
};

module.exports = nextConfig;
