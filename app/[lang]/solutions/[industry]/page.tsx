import { notFound } from "next/navigation";
import { getDictionary, hasLocale } from "@/content/i18n";
import { alternatesFor, industries, industryFromSlug, industrySlug, paths } from "@/content/routes";
import { pageMetadata } from "@/content/seo";
import { Shell } from "@/components/Shell";
import { SolutionPage } from "@/components/SolutionPage";

export const dynamicParams = false;

// Slugs differ by language ("car-rental" in English, "location-voiture" in French).
export function generateStaticParams({ params }: { params: { lang: string } }) {
  if (!hasLocale(params.lang)) return [];
  const lang = params.lang;
  return industries.map((i) => ({ industry: industrySlug(lang, i) }));
}

export async function generateMetadata({ params }: PageProps<"/[lang]/solutions/[industry]">) {
  const { lang, industry: slug } = await params;
  if (!hasLocale(lang)) return {};
  const industry = industryFromSlug(lang, slug);
  if (!industry) return {};
  const t = getDictionary(lang).solutions[industry];
  return pageMetadata({
    lang,
    title: t.hub.metaTitle,
    description: t.hub.metaDescription,
    alternates: alternatesFor((l) => paths.industry(l, industry)),
  });
}

export default async function IndustryPage({ params }: PageProps<"/[lang]/solutions/[industry]">) {
  const { lang, industry: slug } = await params;
  if (!hasLocale(lang)) notFound();
  const industry = industryFromSlug(lang, slug);
  if (!industry) notFound();

  const dict = getDictionary(lang);
  return (
    <Shell lang={lang} dict={dict} alternates={alternatesFor((l) => paths.industry(l, industry))}>
      <SolutionPage lang={lang} dict={dict} industry={industry} />
    </Shell>
  );
}
