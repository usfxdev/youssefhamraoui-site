import { notFound } from "next/navigation";
import { getDictionary, hasLocale } from "@/content/i18n";
import { pageMetadata, type PageSeo } from "@/content/seo";
import { homeGraph } from "@/content/schema";
import type { Alternates } from "@/content/routes";
import type { Locale } from "@/content/types";
import { Shell } from "@/components/Shell";
import { JsonLd } from "@/components/JsonLd";
import { Hero } from "@/components/Hero";
import { Work } from "@/components/Work";
import { WhoIHelp } from "@/components/WhoIHelp";
import { Products } from "@/components/Products";
import { Services } from "@/components/Services";
import { Process } from "@/components/Process";
import { About } from "@/components/About";
import { Contact } from "@/components/Contact";

const alternates: Alternates = { en: "/", fr: "/fr" };

const seo = (lang: Locale): PageSeo => {
  const { meta } = getDictionary(lang);
  return { lang, title: meta.title, description: meta.description, alternates, absoluteTitle: true };
};

export async function generateMetadata({ params }: PageProps<"/[lang]">) {
  const { lang } = await params;
  if (!hasLocale(lang)) return {};
  return pageMetadata(seo(lang));
}

export default async function Home({ params }: PageProps<"/[lang]">) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const dict = getDictionary(lang);

  return (
    <Shell lang={lang} dict={dict} alternates={alternates}>
      <JsonLd graph={homeGraph(seo(lang))} />
      <Hero dict={dict} />
      <Work lang={lang} dict={dict} />
      <WhoIHelp lang={lang} dict={dict} />
      <Products dict={dict} />
      <Services dict={dict} />
      <Process dict={dict} />
      <About dict={dict} />
      <Contact dict={dict} />
    </Shell>
  );
}
