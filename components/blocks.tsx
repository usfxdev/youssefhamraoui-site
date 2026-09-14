import type { ReactNode } from "react";
import type { FlowStep, LeadItem, QA } from "@/content/types";
import { Section } from "./Section";

type Action = { label: string; href: string; primary?: boolean; external?: boolean };

function ActionLinks({ actions }: { actions: Action[] }) {
  return (
    <div className="actions">
      {actions.map((a) => (
        <a
          key={a.href + a.label}
          className={a.primary ? "btn" : "link-arrow"}
          href={a.href}
          rel={a.external ? "noopener" : undefined}
        >
          {a.label}
        </a>
      ))}
    </div>
  );
}

type HeroProps = {
  eyebrow: string;
  title: string;
  lede: string;
  actions: Action[];
  note?: string;
  children?: ReactNode;
};

/** Opening block for inner pages: eyebrow, title, lede and calls to action. */
export function PageHero({ eyebrow, title, lede, actions, note, children }: HeroProps) {
  return (
    <section className="hero page-hero" aria-labelledby="h1">
      <p className="eyebrow mono">{eyebrow}</p>
      <h1 id="h1">{title}</h1>
      <p className="lede">{lede}</p>
      <ActionLinks actions={actions} />
      {note ? <p className="trust mono">{note}</p> : null}
      {children}
    </section>
  );
}

/** A small live log of what the system does, step by step. */
export function FlowPanel({ label, live, steps, footer }: { label: string; live: string; steps: FlowStep[]; footer?: string }) {
  return (
    <figure className="flow">
      <figcaption className="flow-head">
        <span className="mono">{label}</span>
        <span className="mono live">{live}</span>
      </figcaption>
      <ol>
        {steps.map((s) => (
          <li key={s.title}>
            <div>
              <b>{s.title}</b>
              <span className="detail">{s.detail}</span>
            </div>
            <span className="status">{s.status}</span>
          </li>
        ))}
      </ol>
      {footer ? <p className="flow-foot mono">{footer}</p> : null}
    </figure>
  );
}

export function LeadList({ items }: { items: LeadItem[] }) {
  return (
    <ul className="principles lead-list">
      {items.map((item) => (
        <li key={item.lead}>
          <b>{item.lead}</b>
          <span>{item.text}</span>
        </li>
      ))}
    </ul>
  );
}

export function Faq({ items }: { items: QA[] }) {
  return (
    <div className="faq">
      {items.map((item) => (
        <details key={item.q}>
          <summary>{item.q}</summary>
          <p>{item.a}</p>
        </details>
      ))}
    </div>
  );
}

type CtaProps = {
  label: string;
  heading: string;
  text?: string;
  primary: Action;
  secondary?: Action;
};

/** Closing call to action on inner pages. */
export function CtaSection({ label, heading, text, primary, secondary }: CtaProps) {
  const actions = [{ ...primary, primary: true }, ...(secondary ? [secondary] : [])];
  return (
    <Section id="cta" label={label} className="contact">
      <h2>{heading}</h2>
      {text ? <p className="how">{text}</p> : null}
      <ActionLinks actions={actions} />
    </Section>
  );
}
