import type { Dictionary } from "@/content/types";

export function Hero({ dict }: { dict: Dictionary }) {
  const t = dict.hero;
  return (
    <section className="hero" aria-labelledby="h1">
      <p className="status mono">{t.status}</p>
      <h1 id="h1">
        {t.h1Before}
        <em>{t.h1Em}</em>
        {t.h1After}
      </h1>
      <p className="lede">{t.lede}</p>
      <div className="actions">
        <a className="btn" href="#contact">{t.cta}</a>
        <a className="link-arrow" href="#work">{t.seeWork}</a>
      </div>
      <dl className="facts">
        {t.facts.map((f) => (
          <div key={f.label}>
            <dt>{f.label}</dt>
            <dd>{f.value}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
