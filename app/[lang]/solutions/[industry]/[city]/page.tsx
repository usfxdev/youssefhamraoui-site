import { notFound } from "next/navigation";
import { cities } from "@/content/cities";
import { getDictionary, hasLocale } from "@/content/i18n";
import { alternatesFor, industries, industryCities, industryFromSlug, industrySlug, paths } from "@/content/routes";
import { pageMetadata, type PageSeo } from "@/content/seo";
import { homeCrumb, serviceGraph } from "@/content/schema";
import type { CityKey, IndustryKey, Locale } from "@/content/types";
import { Shell } from "@/components/Shell";
import { JsonLd } from "@/components/JsonLd";
import { SolutionPage } from "@/components/SolutionPage";

export const dynamicParams = false;

// Generates industry and city together for each language.
export function generateStaticParams({ params }: { params: { lang: string } }) {
  if (!hasLocale(params.lang)) return [];
  const lang = params.lang;
  return industries.flatMap((i) =>
    industryCities[i].map((city) => ({ industry: industrySlug(lang, i), city })),
  );
}

function resolve(lang: Locale, slug: string, city: string): { industry: IndustryKey; city: CityKey } | null {
  const industry = industryFromSlug(lang, slug);
  if (!industry) return null;
  const match = industryCities[industry].find((c) => c === city);
  return match ? { industry, city: match } : null;
}

const seo = (lang: Locale, industry: IndustryKey, city: CityKey): PageSeo => {
  const t = getDictionary(lang).solutions[industry];
  const name = cities[city][lang].name;
  return {
    lang,
    title: t.city.metaTitle(name),
    description: t.city.metaDescription(name),
    alternates: alternatesFor((l) => paths.city(l, industry, city)),
  };
};

export async function generateMetadata({ params }: PageProps<"/[lang]/solutions/[industry]/[city]">) {
  const { lang, industry: slug, city } = await params;
  if (!hasLocale(lang)) return {};
  const found = resolve(lang, slug, city);
  if (!found) return {};
  return pageMetadata(seo(lang, found.industry, found.city));
}

export default async function CityPage({ params }: PageProps<"/[lang]/solutions/[industry]/[city]">) {
  const { lang, industry: slug, city } = await params;
  if (!hasLocale(lang)) notFound();
  const found = resolve(lang, slug, city);
  if (!found) notFound();

  const dict = getDictionary(lang);
  const cityName = cities[found.city][lang].name;
  const crumbs = [
    homeCrumb(lang),
    { name: dict.solutions[found.industry].navLabel, path: paths.industry(lang, found.industry) },
    { name: cityName, path: paths.city(lang, found.industry, found.city) },
  ];
  return (
    <Shell lang={lang} dict={dict} alternates={alternatesFor((l) => paths.city(l, found.industry, found.city))}>
      <JsonLd graph={serviceGraph(seo(lang, found.industry, found.city), crumbs, cityName)} />
      <SolutionPage lang={lang} dict={dict} industry={found.industry} city={found.city} />
    </Shell>
  );
}
