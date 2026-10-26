import type { NextConfig } from "next";

// Sent with every response: pages, redirects, images, sitemap.xml and robots.txt.
const securityHeaders = [
  { key: "Strict-Transport-Security", value: "max-age=31536000" },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "X-Frame-Options", value: "SAMEORIGIN" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
];

const nextConfig: NextConfig = {
  // Builds a self-contained server in .next/standalone for Docker or any Node host.
  output: "standalone",
  // No "X-Powered-By: Next.js" header.
  poweredByHeader: false,
  experimental: {
    // Lets app/global-not-found.tsx serve 404s, needed because the root layout lives in app/[lang].
    globalNotFound: true,
  },
  async headers() {
    return [{ source: "/:path*", headers: securityHeaders }];
  },
};

export default nextConfig;
