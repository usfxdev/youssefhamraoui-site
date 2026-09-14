import type { Metadata } from "next";
import type { Alternates } from "./routes";
import type { Locale } from "./types";
import { site } from "./site";

type Input = {
  lang: Locale;
  title: string;
  description: string;
  alternates: Alternates;
  /** The home page uses the bare name instead of "Title | Youssef Hamraoui". */
  absoluteTitle?: boolean;
};

export function pageMetadata({ lang, title, description, alternates, absoluteTitle }: Input): Metadata {
  const fullTitle = absoluteTitle ? title : `${title} | ${site.name}`;
  return {
    title: { absolute: fullTitle },
    description,
    alternates: {
      canonical: alternates[lang],
      languages: { en: alternates.en, fr: alternates.fr, "x-default": alternates.en },
    },
    openGraph: {
      title: fullTitle,
      description,
      url: alternates[lang],
      siteName: site.name,
      locale: lang === "en" ? "en_US" : "fr_FR",
      alternateLocale: lang === "en" ? ["fr_FR"] : ["en_US"],
      type: "website",
    },
  };
}
