import Image from "next/image";
import { notFound } from "next/navigation";
import { getDictionary, hasLocale } from "@/content/i18n";
import { alternatesFor, paths, workSlugs } from "@/content/routes";
import { pageMetadata, type PageSeo } from "@/content/seo";
import { caseStudyGraph, homeCrumb } from "@/content/schema";
import { work } from "@/content/site";
import type { Locale, WorkSlug } from "@/content/types";
import { Shell } from "@/components/Shell";
import { JsonLd } from "@/components/JsonLd";
import { Section } from "@/components/Section";
import { CtaSection, LeadList, PageHero } from "@/components/blocks";

export const dynamicParams = false;

export function generateStaticParams() {
  return workSlugs.map((slug) => ({ slug }));
}

const isWorkSlug = (value: string): value is WorkSlug => (workSlugs as string[]).includes(value);

const seo = (lang: Locale, slug: WorkSlug): PageSeo => {
  const t = getDictionary(lang).cases[slug];
  return {
    lang,
    title: t.metaTitle,
    description: t.metaDescription,
    alternates: alternatesFor((l) => paths.work(l, slug)),
  };
};

export async function generateMetadata({ params }: PageProps<"/[lang]/work/[slug]">) {
  const { lang, slug } = await params;
  if (!hasLocale(lang) || !isWorkSlug(slug)) return {};
  return pageMetadata(seo(lang, slug));
}

export default async function CaseStudyPage({ params }: PageProps<"/[lang]/work/[slug]">) {
  const { lang, slug } = await params;
  if (!hasLocale(lang) || !isWorkSlug(slug)) notFound();

  const dict = getDictionary(lang);
  const t = dict.cases[slug];
  const item = work.find((w) => w.slug === slug)!;
  const crumbs = [homeCrumb(lang), { name: item.title, path: paths.work(lang, slug) }];

  return (
    <Shell lang={lang} dict={dict} alternates={alternatesFor((l) => paths.work(l, slug))}>
      <JsonLd graph={caseStudyGraph(seo(lang, slug), crumbs, slug)} />
      <PageHero
        eyebrow={t.eyebrow}
        title={item.title}
        lede={t.lede}
        actions={[{ label: t.liveLabel, href: item.live.href, external: true }]}
      >
        <dl className="facts">
          {t.facts.map((f) => (
            <div key={f.label}>
              <dt>{f.label}</dt>
              <dd>{f.value}</dd>
            </div>
          ))}
        </dl>
      </PageHero>

      <div className="shots case-shots">
        <div className="desktop">
          <Image src={item.desktop} alt={dict.work.items[slug].alt} sizes="(max-width: 1080px) 100vw, 1000px" priority placeholder="blur" />
        </div>
        <div className="mobile">
          <Image src={item.mobile} alt="" sizes="(max-width: 760px) 25vw, 220px" placeholder="blur" />
        </div>
      </div>

      {t.sections.map((s, i) => (
        <Section key={s.heading} id={`part-${i + 1}`} label={s.eyebrow}>
          <h2 className="lead">{s.heading}</h2>
          {s.paragraphs ? (
            <div className="prose">
              {s.paragraphs.map((p) => <p key={p.slice(0, 32)}>{p}</p>)}
            </div>
          ) : null}
          {s.list ? <LeadList items={s.list} /> : null}
          {s.note ? <p className="note">{s.note}</p> : null}
        </Section>
      ))}

      <CtaSection
        label={t.cta.eyebrow}
        heading={t.cta.heading}
        primary={{ label: dict.ui.bookDiscovery, href: paths.section(lang, "contact") }}
        secondary={{ label: dict.ui.seeMoreWork, href: paths.section(lang, "work") }}
      />
    </Shell>
  );
}
