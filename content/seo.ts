import type { Metadata } from "next";
import type { Alternates } from "./routes";
import type { Locale } from "./types";
import { getDictionary } from "./i18n";
import { site } from "./site";

export type PageSeo = {
  lang: Locale;
  title: string;
  description: string;
  alternates: Alternates;
  /** The home page uses its title as it is instead of "Title | Youssef Hamraoui". */
  absoluteTitle?: boolean;
};

/** The <title> of a page, also used as og:title, twitter:title and the WebPage name in the JSON-LD. */
export const fullTitle = ({ title, absoluteTitle }: Pick<PageSeo, "title" | "absoluteTitle">) =>
  absoluteTitle ? title : `${title} | ${site.name}`;

/** Default social image, one per language: 1200×630 PNG made by scripts/make_og_image.py. */
export const ogImage = (lang: Locale) => ({
  url: `/og/${lang}.png`,
  width: 1200,
  height: 630,
  type: "image/png",
  alt: getDictionary(lang).meta.ogImageAlt,
});

export function pageMetadata(page: PageSeo): Metadata {
  const { lang, description, alternates } = page;
  const title = fullTitle(page);
  const image = ogImage(lang);
  return {
    title: { absolute: title },
    description,
    alternates: {
      canonical: alternates[lang],
      languages: { en: alternates.en, fr: alternates.fr, "x-default": alternates.en },
    },
    openGraph: {
      title,
      description,
      url: alternates[lang],
      siteName: site.name,
      locale: lang === "en" ? "en_US" : "fr_FR",
      alternateLocale: lang === "en" ? ["fr_FR"] : ["en_US"],
      type: "website",
      images: [image],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [{ url: image.url, alt: image.alt }],
    },
  };
}
