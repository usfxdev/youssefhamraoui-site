import { industries, paths } from "@/content/routes";
import type { Dictionary, Locale } from "@/content/types";
import { Section } from "./Section";

export function WhoIHelp({ lang, dict }: { lang: Locale; dict: Dictionary }) {
  const t = dict.whoIHelp;
  return (
    <Section id="solutions" label={t.label} sub={t.sub}>
      <h2 className="lead">{t.heading}</h2>
      <ul className="industries">
        {industries.map((i) => {
          const card = dict.solutions[i].card;
          return (
            <li key={i}>
              <a href={paths.industry(lang, i)}>
                <span className="mono">{card.eyebrow}</span>
                <h3>{card.title}</h3>
                <p>{card.text}</p>
                <span className="link-arrow">{dict.ui.seeSystem}</span>
              </a>
            </li>
          );
        })}
      </ul>
    </Section>
  );
}
