/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    MONGO_URL:"mongodb+srv://foodOrderingApp:foodapp@cluster0.wms7sch.mongodb.net/pizza?retryWrites=true&w=majority",
  },
};

module.exports = nextConfig;
