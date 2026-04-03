import type { NextConfig } from "next";

type NextConfigWithEslint = NextConfig & {
  eslint?: {
    ignoreDuringBuilds?: boolean;
  };
};

const nextConfig: NextConfigWithEslint = {
  outputFileTracingRoot: __dirname,
  
  // 1. TypeScript errors ko build ke waqt ignore karne ke liye
  typescript: {
    ignoreBuildErrors: true,
  },

  // 2. ESLint errors ko build ke waqt ignore karne ke liye (Safe side ke liye)
  eslint: {
    ignoreDuringBuilds: true,
  },

  /* Baki config options yahan add kar sakte ho */
};

export default nextConfig;