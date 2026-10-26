import { site } from "@/content/site";
import { locales, localeNames, type Locale } from "@/content/i18n";
import { paths, type Alternates } from "@/content/routes";
import type { Dictionary } from "@/content/types";
import { LangLink } from "./LangLink";

type Props = { lang: Locale; dict: Dictionary; alternates: Alternates };

// Each language link points straight at this page in that language ("/" for the English home page).
// LangLink saves the choice in the NEXT_LOCALE cookie, so a browser that prefers French
// is not sent back to /fr after picking English.
export function Header({ lang, dict, alternates }: Props) {
  const items = [
    { id: "work", label: dict.nav.work },
    { id: "solutions", label: dict.nav.whoIHelp },
    { id: "services", label: dict.nav.services },
    { id: "process", label: dict.nav.process },
    { id: "contact", label: dict.nav.contact },
  ];

  return (
    <header className="top">
      <a className="name" href={paths.home(lang)}>{site.name}</a>
      <nav aria-label={dict.nav.sections}>
        {items.map((item) => (
          <a key={item.id} href={paths.section(lang, item.id)}>{item.label}</a>
        ))}
      </nav>
      <div className="lang" role="group" aria-label={dict.nav.language}>
        {locales.map((l) => (
          <LangLink
            key={l}
            locale={l}
            href={alternates[l]}
            hrefLang={l}
            lang={l}
            title={localeNames[l]}
            aria-label={localeNames[l]}
            aria-current={l === lang ? "true" : undefined}
          >
            {l.toUpperCase()}
          </LangLink>
        ))}
      </div>
      <a className="mail" href={`mailto:${site.email}`}>{site.email}</a>
    </header>
  );
}
