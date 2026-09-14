import { cities } from "@/content/cities";
import { industryCase, industryCities, industryDemo, paths } from "@/content/routes";
import type { CityKey, Dictionary, IndustryKey, Locale } from "@/content/types";
import { Section } from "./Section";
import { CtaSection, Faq, FlowPanel, LeadList, PageHero } from "./blocks";

type Props = { lang: Locale; dict: Dictionary; industry: IndustryKey; city?: CityKey };

/** One industry page. With a city it becomes that city's page, using the same template. */
export function SolutionPage({ lang, dict, industry, city }: Props) {
  const t = dict.solutions[industry];
  const cityName = city ? cities[city][lang].name : undefined;
  const demo = industryDemo[industry];
  const caseSlug = industryCase[industry];
  const contact = paths.section(lang, "contact");
  const workSection = paths.section(lang, "work");

  const faqItems = cityName ? [...t.faq.items, t.city.faq(cityName)] : t.faq.items;
  const cityList = industryCities[industry].filter((c) => c !== city);

  return (
    <>
      <PageHero
        eyebrow={t.eyebrow}
        title={cityName ? t.city.h1(cityName) : t.hub.h1}
        lede={cityName ? t.city.lede(cityName) : t.hub.lede}
        note={t.trustLine}
        actions={[
          { label: dict.ui.bookCall, href: contact, primary: true },
          { label: t.heroSecondary, href: demo ? paths.demo(lang, demo) : "#system" },
        ]}
      />

      {city && cityName ? (
        <Section id="local" label={t.city.whyEyebrow(cityName)}>
          <h2 className="lead">{t.city.whyHeading(cityName)}</h2>
          <div className="prose">
            <p>{cities[city][lang].blurb}</p>
            <p>{t.city.whyBody(cityName)}</p>
          </div>
        </Section>
      ) : null}

      <Section id="problems" label={t.pains.eyebrow}>
        <h2 className="lead">{t.pains.heading}</h2>
        <ul className="pains">
          {t.pains.items.map((p) => <li key={p}>{p}</li>)}
        </ul>
        <p className="pull">{t.pains.note}</p>
      </Section>

      <Section id="system" label={t.system.eyebrow}>
        <h2 className="lead">{t.system.heading}</h2>
        <ul className="services features">
          {t.system.features.map((f) => (
            <li key={f.title}>
              <h3>{f.title}</h3>
              <p className="tagline">{f.tagline}</p>
              <p>{f.text}</p>
              <span className="tools mono">{f.tags.join(" · ")}</span>
            </li>
          ))}
        </ul>
        <FlowPanel label={t.system.flowLabel} live={dict.ui.live} steps={t.system.flow} />
      </Section>

      <Section id="changes" label={t.changes.eyebrow}>
        <h2 className="lead">{t.changes.heading}</h2>
        <LeadList items={t.changes.items} />
      </Section>

      <Section id="proof" label={t.proof.eyebrow}>
        <h2 className="lead">{t.proof.heading}</h2>
        <p className="intro">{t.proof.text}</p>
        <div className="links">
          <a className="link-arrow" href={caseSlug ? paths.work(lang, caseSlug) : workSection}>{t.proof.linkLabel}</a>
          {demo && t.proof.demoLabel ? <a href={paths.demo(lang, demo)}>{t.proof.demoLabel}</a> : null}
        </div>
      </Section>

      <Section id="faq" label={t.faq.eyebrow}>
        <h2 className="lead">{t.faq.heading}</h2>
        <Faq items={faqItems} />
      </Section>

      <Section id="cities" label={t.where.eyebrow}>
        <h2 className="lead">{cityName ? t.city.alsoHeading : t.where.heading}</h2>
        {cityName ? null : <p className="intro">{t.where.intro}</p>}
        <ul className="chips">
          {cityList.map((c) => (
            <li key={c}><a href={paths.city(lang, industry, c)}>{cities[c][lang].name}</a></li>
          ))}
        </ul>
        {cityName ? (
          <div className="links">
            <a className="link-arrow" href={paths.industry(lang, industry)}>{t.city.allLink}</a>
          </div>
        ) : null}
      </Section>

      <CtaSection
        label={t.cta.eyebrow}
        heading={t.cta.heading}
        text={t.cta.text}
        primary={{ label: dict.ui.bookCall, href: contact }}
        secondary={{ label: t.cta.secondary, href: demo ? paths.demo(lang, demo) : workSection }}
      />
    </>
  );
}
