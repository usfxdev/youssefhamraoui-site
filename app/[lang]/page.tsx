import { notFound } from "next/navigation";
import { getDictionary, hasLocale } from "@/content/i18n";
import { pageMetadata } from "@/content/seo";
import { site } from "@/content/site";
import type { Alternates } from "@/content/routes";
import { Shell } from "@/components/Shell";
import { Hero } from "@/components/Hero";
import { Work } from "@/components/Work";
import { WhoIHelp } from "@/components/WhoIHelp";
import { Products } from "@/components/Products";
import { Services } from "@/components/Services";
import { Process } from "@/components/Process";
import { About } from "@/components/About";
import { Contact } from "@/components/Contact";

const alternates: Alternates = { en: "/", fr: "/fr" };

export async function generateMetadata({ params }: PageProps<"/[lang]">) {
  const { lang } = await params;
  if (!hasLocale(lang)) return {};
  const dict = getDictionary(lang);
  return pageMetadata({ lang, title: site.name, description: dict.meta.description, alternates, absoluteTitle: true });
}

export default async function Home({ params }: PageProps<"/[lang]">) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const dict = getDictionary(lang);

  return (
    <Shell lang={lang} dict={dict} alternates={alternates}>
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
