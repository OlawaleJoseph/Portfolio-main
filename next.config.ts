import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  cacheComponents: true,
  partialPrefetching: true,
  turbopack: { root: __dirname },
  experimental: {
    agentUpgrade: "security",
  },
};

export default nextConfig;
