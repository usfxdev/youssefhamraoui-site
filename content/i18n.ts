import en from "./dictionaries/en";
import fr from "./dictionaries/fr";
import type { Dictionary, Locale } from "./types";

export type { Locale };

// Keep this list in sync with proxy.ts.
export const locales = ["en", "fr"] as const satisfies readonly Locale[];
export const defaultLocale: Locale = "en";

export const localeNames: Record<Locale, string> = {
  en: "English",
  fr: "Français",
};

const dictionaries: Record<Locale, Dictionary> = { en, fr };

export const hasLocale = (value: string): value is Locale =>
  (locales as readonly string[]).includes(value);

export const getDictionary = (locale: Locale): Dictionary => dictionaries[locale];
