import type { Dictionary } from "@/content/types";
import { Section } from "./Section";

export function Process({ dict }: { dict: Dictionary }) {
  const t = dict.process;
  return (
    <Section id="process" label={t.label} sub={t.sub}>
      <ol className="steps">
        {t.steps.map((s) => (
          <li key={s.title}>
            <h3>
              {s.title}
              {s.tag ? <small>{s.tag}</small> : null}
            </h3>
            <p>{s.text}</p>
          </li>
        ))}
      </ol>
    </Section>
  );
}
