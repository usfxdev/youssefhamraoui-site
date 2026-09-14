// Every URL on the site is built here, so English and French paths stay in step.
// English lives at the root ("/work/racha-food"); French under "/fr".
// These match the URLs of the previous site, so existing links and search results keep working.
import type { CityKey, DemoKey, IndustryKey, Locale, WorkSlug } from "./types";

export const industries: IndustryKey[] = ["restaurants", "e-commerce", "car-rental"];
export const workSlugs: WorkSlug[] = ["racha-food", "galaxy-pets"];
export const demoKeys: DemoKey[] = ["restaurant-system", "ecommerce-system"];

const industrySlugs: Record<IndustryKey, Record<Locale, string>> = {
  restaurants: { en: "restaurants", fr: "restaurants" },
  "e-commerce": { en: "e-commerce", fr: "e-commerce" },
  "car-rental": { en: "car-rental", fr: "location-voiture" },
};

export const industryCities: Record<IndustryKey, CityKey[]> = {
  restaurants: ["casablanca", "rabat", "marrakech", "fes", "tanger", "agadir", "meknes", "kenitra", "khouribga"],
  "e-commerce": ["casablanca", "rabat", "marrakech", "fes", "tanger", "agadir", "meknes", "kenitra", "khouribga"],
  "car-rental": ["casablanca", "marrakech", "agadir"],
};

/** Which demo and case study back each industry page. */
export const industryDemo: Record<IndustryKey, DemoKey | null> = {
  restaurants: "restaurant-system",
  "e-commerce": "ecommerce-system",
  "car-rental": null,
};
export const industryCase: Record<IndustryKey, WorkSlug | null> = {
  restaurants: "racha-food",
  "e-commerce": "galaxy-pets",
  "car-rental": null,
};
export const demoIndustry: Record<DemoKey, IndustryKey> = {
  "restaurant-system": "restaurants",
  "ecommerce-system": "e-commerce",
};

export const industrySlug = (lang: Locale, industry: IndustryKey) => industrySlugs[industry][lang];

export const industryFromSlug = (lang: Locale, slug: string): IndustryKey | undefined =>
  industries.find((i) => industrySlugs[i][lang] === slug);

const prefix = (lang: Locale) => (lang === "en" ? "" : "/fr");

export const paths = {
  home: (lang: Locale) => (lang === "en" ? "/" : "/fr"),
  section: (lang: Locale, id: string) => `${lang === "en" ? "/" : "/fr"}#${id}`,
  work: (lang: Locale, slug: WorkSlug) => `${prefix(lang)}/work/${slug}`,
  industry: (lang: Locale, industry: IndustryKey) => `${prefix(lang)}/solutions/${industrySlug(lang, industry)}`,
  city: (lang: Locale, industry: IndustryKey, city: CityKey) =>
    `${prefix(lang)}/solutions/${industrySlug(lang, industry)}/${city}`,
  demo: (lang: Locale, demo: DemoKey) => `${prefix(lang)}/demo/${demo}`,
};

export type Alternates = Record<Locale, string>;

/** Builds the English and French URL of the same page. */
export const alternatesFor = (build: (lang: Locale) => string): Alternates => ({
  en: build("en"),
  fr: build("fr"),
});
