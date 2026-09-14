import type { Dictionary } from "@/content/types";
import { Section } from "./Section";

export function Services({ dict }: { dict: Dictionary }) {
  const t = dict.services;
  return (
    <Section id="services" label={t.label} sub={t.sub}>
      <ul className="services">
        {t.items.map((s) => (
          <li key={s.title}>
            <h3>{s.title}</h3>
            <p>{s.text}</p>
            <span className="tools mono">{s.tools}</span>
          </li>
        ))}
      </ul>
      <p className="else">{t.else}</p>
    </Section>
  );
}
