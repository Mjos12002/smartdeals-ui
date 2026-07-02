import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
        dangerouslyAllowLocalIP: true,
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
        pathname: '/**',
      }
    ]
  }

};

export default nextConfig;
