import type { Dictionary } from "@/content/types";
import { Section } from "./Section";

export function About({ dict }: { dict: Dictionary }) {
  const t = dict.about;
  return (
    <Section id="about" label={t.label}>
      <div className="about">
        {t.paragraphs.map((p) => (
          <p key={p.slice(0, 24)}>{p}</p>
        ))}
      </div>
      <ul className="principles">
        {t.principles.map((p) => (
          <li key={p.title}>
            <b>{p.title}</b>
            <span>{p.text}</span>
          </li>
        ))}
      </ul>
    </Section>
  );
}
