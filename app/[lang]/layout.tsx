import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Schibsted_Grotesk, JetBrains_Mono } from "next/font/google";
import { hasLocale, locales } from "@/content/i18n";
import { site } from "@/content/site";
import "../globals.css";

const sans = Schibsted_Grotesk({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const mono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

// Only /en and /fr exist internally. Visitors see English at the root; proxy.ts rewrites it to /en.
export const dynamicParams = false;

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

// Each page sets its own title, description and language alternates.
export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: site.name,
};

export default async function RootLayout({ children, params }: LayoutProps<"/[lang]">) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();

  return (
    <html lang={lang} className={`${sans.variable} ${mono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
