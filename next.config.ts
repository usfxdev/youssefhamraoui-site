import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Builds a self-contained server in .next/standalone for Docker or any Node host.
  output: "standalone",
  experimental: {
    // Lets app/global-not-found.tsx serve 404s, needed because the root layout lives in app/[lang].
    globalNotFound: true,
  },
};

export default nextConfig;
