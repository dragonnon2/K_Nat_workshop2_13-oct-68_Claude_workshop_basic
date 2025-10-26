import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/sonnet4.5',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
