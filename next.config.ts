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
  images: {
    // Next's defaults plus 192, 320 and 480, so the phone screenshots (96px wide on phones)
    // and the product images get a file near their rendered size instead of the next big step.
    imageSizes: [32, 48, 64, 96, 128, 192, 256, 320, 384, 480],
  },
  experimental: {
    // Lets app/global-not-found.tsx serve 404s, needed because the root layout lives in app/[lang].
    globalNotFound: true,
  },
  async headers() {
    return [{ source: "/:path*", headers: securityHeaders }];
  },
};

export default nextConfig;
