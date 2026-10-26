import Image from "next/image";
import { work } from "@/content/site";
import { paths } from "@/content/routes";
import type { Dictionary, Locale } from "@/content/types";
import { Section } from "./Section";

// Rendered widths of the screenshots in a section column (app/globals.css: gutter 5vw,
// 11rem label column above 760px, wrap max 1080px, desktop shot 86% of the column, phone shot 22%, min 96px).
const DESKTOP_SIZES = "(max-width: 760px) 77vw, (max-width: 1200px) calc(77vw - 180px), 750px";
const MOBILE_SIZES = "(max-width: 485px) 96px, (max-width: 760px) 20vw, (max-width: 1200px) calc(20vw - 46px), 192px";

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
                    sizes={DESKTOP_SIZES}
                    priority={i === 0}
                    placeholder="blur"
                  />
                </div>
                <div className="mobile">
                  <Image src={item.mobile} alt={copy.mobileAlt} sizes={MOBILE_SIZES} placeholder="blur" />
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
