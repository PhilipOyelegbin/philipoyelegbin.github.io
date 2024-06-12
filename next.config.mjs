/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "img.freepik.com",
      "res.cloudinary.com",
      "encrypted-tbn0.gstatic.com",
      "raw.githubusercontent.com",
    ],
  },
  env: {
    // API_URL: "https://philipoyelegbin.github.io/backend/api",
    API_URL: "https://moonshot-api.vercel.app",
  },
};

export default nextConfig;
