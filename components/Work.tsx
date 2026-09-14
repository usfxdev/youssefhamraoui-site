import Image from "next/image";
import { work } from "@/content/site";
import { paths } from "@/content/routes";
import type { Dictionary, Locale } from "@/content/types";
import { Section } from "./Section";

export function Work({ lang, dict }: { lang: Locale; dict: Dictionary }) {
  const t = dict.work;
  return (
    <Section id="work" label={t.label} sub={t.sub}>
      <div className="work-list">
        {work.map((item, i) => {
          const copy = t.items[item.slug];
          return (
            <article className="work" key={item.slug}>
              <a className="shots" href={paths.work(lang, item.slug)} aria-label={`${t.caseStudy}: ${item.title}`}>
                <div className="desktop">
                  <Image
                    src={item.desktop}
                    alt={copy.alt}
                    sizes="(max-width: 760px) 100vw, 800px"
                    priority={i === 0}
                    placeholder="blur"
                  />
                </div>
                <div className="mobile">
                  <Image src={item.mobile} alt="" sizes="(max-width: 760px) 25vw, 200px" placeholder="blur" />
                </div>
              </a>
              <div className="work-text">
                <div>
                  <h3>{item.title}</h3>
                  <div className="meta mono">
                    {copy.meta.map((m) => <span key={m}>{m}</span>)}
                  </div>
                </div>
                <div>
                  <p>{copy.description}</p>
                  <p className="outcome">{copy.outcome}</p>
                  <div className="links">
                    <a className="link-arrow" href={paths.work(lang, item.slug)}>{t.caseStudy}</a>
                    <a href={item.live.href} rel="noopener">{item.live.label}</a>
                  </div>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </Section>
  );
}
