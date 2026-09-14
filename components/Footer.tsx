import { site } from "@/content/site";
import { industries, paths } from "@/content/routes";
import type { Dictionary, Locale } from "@/content/types";

export function Footer({ lang, dict }: { lang: Locale; dict: Dictionary }) {
  const year = new Date().getFullYear();
  const siteLinks = [
    { id: "services", label: dict.nav.services },
    { id: "work", label: dict.nav.work },
    { id: "about", label: dict.about.label },
    { id: "contact", label: dict.nav.contact },
  ];

  return (
    <footer className="site-footer">
      <div className="foot-brand">
        <a className="name" href={paths.home(lang)}>{site.name}</a>
        <p>{dict.footer.tagline}</p>
      </div>
      <nav aria-labelledby="foot-site">
        <h2 id="foot-site">{dict.footer.site}</h2>
        <ul>
          {siteLinks.map((l) => (
            <li key={l.id}><a href={paths.section(lang, l.id)}>{l.label}</a></li>
          ))}
        </ul>
      </nav>
      <nav aria-labelledby="foot-help">
        <h2 id="foot-help">{dict.footer.whoIHelp}</h2>
        <ul>
          {industries.map((i) => (
            <li key={i}><a href={paths.industry(lang, i)}>{dict.solutions[i].navLabel}</a></li>
          ))}
        </ul>
      </nav>
      <div>
        <h2>{dict.footer.social}</h2>
        <ul>
          {site.socials.map((s) => (
            <li key={s.label}><a href={s.href} rel="noopener">{s.label}</a></li>
          ))}
        </ul>
      </div>
      <div className="foot-base">
        <span className="mono">© {year} {site.name} · {dict.footer.place}</span>
        <span className="mono">{dict.footer.note}</span>
      </div>
    </footer>
  );
}
