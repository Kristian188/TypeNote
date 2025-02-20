import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  experimental: {
    serverComponentsExternalPackages: ["@node-rs/argon2"],
  },
};

export default nextConfig;
