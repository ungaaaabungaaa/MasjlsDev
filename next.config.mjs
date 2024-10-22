/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { hostname: "localhost" },
      { hostname: "randomuser.me" },
      { hostname: "upload.wikimedia.org" },
      { hostname: "avatars.githubusercontent.com" },
      { hostname: "vitejs.dev" },
      { hostname: "www.gstatic.com" }
    ],
  },
};

export default nextConfig;