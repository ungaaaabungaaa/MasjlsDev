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
        hostname: "randomuser.me",
        pathname: "/api/portraits/**"
      },
      { 
        protocol: "https",
        hostname: "images.unsplash.com"
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
    // Add these additional options for better compatibility
    formats: ['image/webp', 'image/avif'],
    minimumCacheTTL: 60,
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
};

export default nextConfig;