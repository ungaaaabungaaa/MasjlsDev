/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { 
        protocol: "http",
        hostname: "localhost" 
      },
      { 
        protocol: "https",
        hostname: "randomuser.me" 
      },
      { 
        protocol: "https",
        hostname: "upload.wikimedia.org" 
      },
      { 
        protocol: "https",
        hostname: "avatars.githubusercontent.com" 
      },
      { 
        protocol: "https",
        hostname: "vitejs.dev" 
      },
      { 
        protocol: "https",
        hostname: "www.gstatic.com" 
      }
    ],
  },
};

export default nextConfig;