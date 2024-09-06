/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  assetPrefix: process.env.NODE_ENV === "production" ? "/website" : "",
  basePath: process.env.NODE_ENV === "production" ? "/website" : "",
  env: {
    SENDGRID_API_KEY: process.env.SENDGRID_API_KEY,
  },
};

export default nextConfig;
