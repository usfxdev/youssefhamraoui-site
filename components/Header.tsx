import { site } from "@/content/site";
import { locales, localeNames, type Locale } from "@/content/i18n";
import { paths, type Alternates } from "@/content/routes";
import type { Dictionary } from "@/content/types";

type Props = { lang: Locale; dict: Dictionary; alternates: Alternates };

// The English link carries "?lang=en" so the proxy remembers the choice
// (otherwise a French browser would be sent back to /fr), then redirects to the clean URL.
const switchHref = (lang: Locale, alternates: Alternates) =>
  lang === "en" ? `${alternates.en}?lang=en` : alternates.fr;

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
          <a
            key={l}
            href={switchHref(l, alternates)}
            hrefLang={l}
            lang={l}
            title={localeNames[l]}
            aria-label={localeNames[l]}
            aria-current={l === lang ? "true" : undefined}
          >
            {l.toUpperCase()}
          </a>
        ))}
      </div>
      <a className="mail" href={`mailto:${site.email}`}>{site.email}</a>
    </header>
  );
}
