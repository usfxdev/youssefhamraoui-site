import { notFound } from "next/navigation";
import { getDictionary, hasLocale } from "@/content/i18n";
import { alternatesFor, demoIndustry, demoKeys, industryCase, paths } from "@/content/routes";
import { pageMetadata } from "@/content/seo";
import type { DemoKey } from "@/content/types";
import { Shell } from "@/components/Shell";
import { Section } from "@/components/Section";
import { CtaSection, FlowPanel, PageHero } from "@/components/blocks";

export const dynamicParams = false;

export function generateStaticParams() {
  return demoKeys.map((demo) => ({ demo }));
}

const isDemo = (value: string): value is DemoKey => (demoKeys as string[]).includes(value);

export async function generateMetadata({ params }: PageProps<"/[lang]/demo/[demo]">) {
  const { lang, demo } = await params;
  if (!hasLocale(lang) || !isDemo(demo)) return {};
  const t = getDictionary(lang).demos[demo];
  return pageMetadata({
    lang,
    title: t.metaTitle,
    description: t.metaDescription,
    alternates: alternatesFor((l) => paths.demo(l, demo)),
  });
}

export default async function DemoPage({ params }: PageProps<"/[lang]/demo/[demo]">) {
  const { lang, demo } = await params;
  if (!hasLocale(lang) || !isDemo(demo)) notFound();

  const dict = getDictionary(lang);
  const t = dict.demos[demo];
  const industry = demoIndustry[demo];
  const caseSlug = industryCase[industry];
  const contact = paths.section(lang, "contact");

  return (
    <Shell lang={lang} dict={dict} alternates={alternatesFor((l) => paths.demo(l, demo))}>
      <PageHero
        eyebrow={t.eyebrow}
        title={t.h1}
        lede={t.lede}
        note={t.note}
        actions={[
          { label: dict.ui.bookCall, href: contact, primary: true },
          { label: t.heroSecondary, href: "#steps" },
        ]}
      />

      <Section id="steps" label={t.steps.eyebrow}>
        <h2 className="lead">{t.steps.heading}</h2>
        <p className="intro">{t.steps.intro}</p>
        <ol className="steps">
          {t.steps.items.map((s) => (
            <li key={s.title}>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
            </li>
          ))}
        </ol>
      </Section>

      <Section id="behind" label={t.behind.eyebrow}>
        <h2 className="lead">{t.behind.heading}</h2>
        <p className="intro">{t.behind.intro}</p>
        <FlowPanel label={t.behind.label} live={dict.ui.live} steps={t.behind.flow} footer={t.behind.footer} />
      </Section>

      <Section id="difference" label={t.difference.eyebrow}>
        <h2 className="lead">{t.difference.heading}</h2>
        <div className="compare">
          <div className="without">
            <h3>{t.difference.withoutTitle}</h3>
            <ul>{t.difference.without.map((x) => <li key={x}>{x}</li>)}</ul>
          </div>
          <div className="with">
            <h3>{t.difference.withTitle}</h3>
            <ul>{t.difference.with.map((x) => <li key={x}>{x}</li>)}</ul>
          </div>
        </div>
      </Section>

      <Section id="numbers" label={t.numbers.eyebrow}>
        <h2 className="lead">{t.numbers.heading}</h2>
        <dl className="figures">
          {t.numbers.items.map((n) => (
            <div key={n.unit}>
              <dt>
                <span className="figure">{n.figure}</span>
                <span className="unit">{n.unit}</span>
              </dt>
              <dd>{n.text}</dd>
            </div>
          ))}
        </dl>
        <p className="intro proof-line">{t.proof.text}</p>
        {caseSlug ? (
          <div className="links">
            <a className="link-arrow" href={paths.work(lang, caseSlug)}>{t.proof.linkLabel}</a>
          </div>
        ) : null}
      </Section>

      <CtaSection
        label={t.cta.eyebrow}
        heading={t.cta.heading}
        text={t.cta.text}
        primary={{ label: dict.ui.bookCall, href: contact }}
        secondary={{ label: t.cta.secondary, href: paths.industry(lang, industry) }}
      />
    </Shell>
  );
}
