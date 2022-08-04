/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    MONGO_URL:"mongodb+srv://foodOrderingApp:foodapp@cluster0.wms7sch.mongodb.net/pizza?retryWrites=true&w=majority",
    ADMIN_USERNAME:"admin",
    ADMIN_PASSWORD:"admin",
    TOKEN:"SWdw4CV||663Z{p3|ZXtP%0k6Ejj;F"
  },
};

module.exports = nextConfig;
