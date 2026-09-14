// Shown for any URL that matches no route. It bypasses app/[lang]/layout.tsx,
// so it loads its own styles and fonts and speaks both languages.
import "./globals.css";
import type { Metadata } from "next";
import { Schibsted_Grotesk, JetBrains_Mono } from "next/font/google";

const sans = Schibsted_Grotesk({ variable: "--font-sans", subsets: ["latin"], weight: ["400", "500", "600"] });
const mono = JetBrains_Mono({ variable: "--font-mono", subsets: ["latin"], weight: ["400"] });

export const metadata: Metadata = {
  title: "404 · Youssef Hamraoui",
  robots: { index: false },
};

export default function GlobalNotFound() {
  return (
    <html lang="en" className={`${sans.variable} ${mono.variable}`}>
      <body>
        <div className="wrap">
          <section className="hero" aria-labelledby="h1">
            <p className="status mono">404</p>
            <h1 id="h1">This page doesn&apos;t exist.</h1>
            <p className="lede" lang="fr">Cette page n&apos;existe pas.</p>
            <div className="actions">
              <a className="btn" href="/" hrefLang="en">Back to the home page</a>
              <a className="link-arrow" href="/fr" hrefLang="fr" lang="fr">Retour à l&apos;accueil</a>
            </div>
          </section>
        </div>
      </body>
    </html>
  );
}
