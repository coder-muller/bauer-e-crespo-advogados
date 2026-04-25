import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "59bl0nz7dg.ufs.sh",
        port: "",
        pathname: "/f/**"
      }
    ]
  }
};

export default nextConfig;
