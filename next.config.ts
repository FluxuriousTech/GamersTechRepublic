import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  transpilePackages: ["sanity", "@sanity/vision", "next-sanity"],
  compiler: {
    styledComponents: true,
  },
  eslint: {
    // ESLint flat config (eslint.config.mjs) is incompatible with how
    // Next.js 15.2.4 invokes ESLint (passes removed useEslintrc/extensions options).
    // Disable during build; run `npm run lint` separately instead.
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
