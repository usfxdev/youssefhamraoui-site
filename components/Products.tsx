import Image from "next/image";
import { products } from "@/content/site";
import type { Dictionary } from "@/content/types";
import { Section } from "./Section";

export function Products({ dict }: { dict: Dictionary }) {
  const t = dict.products;
  return (
    <Section id="products" label={t.label} sub={t.sub}>
      <h2 className="lead">{t.heading}</h2>
      <p className="intro">{t.intro}</p>
      <ul className="products">
        {products.map((p) => (
          <li key={p.key}>
            <figure>
              <Image src={p.image} alt={t.items[p.key].alt} sizes="(max-width: 700px) 50vw, 200px" placeholder="blur" />
            </figure>
            <div>
              <b>{p.name}</b>
              <small>{t.items[p.key].blurb}</small>
            </div>
          </li>
        ))}
      </ul>
    </Section>
  );
}
