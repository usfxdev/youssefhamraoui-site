import { site } from "@/content/site";
import type { Dictionary } from "@/content/types";
import { Section } from "./Section";

export function Contact({ dict }: { dict: Dictionary }) {
  const t = dict.contact;
  const mailto = `mailto:${site.email}?subject=${encodeURIComponent(t.subject)}`;
  return (
    <Section id="contact" label={t.label} sub={t.sub} className="contact">
      <h2>{t.heading}</h2>
      <p className="how">{t.how}</p>
      <a className="big" href={mailto}>{site.email}</a>
      <div className="alt">
        {site.socials.map((s) => (
          <a key={s.label} href={s.href} rel="noopener">{s.label}</a>
        ))}
      </div>
    </Section>
  );
}
