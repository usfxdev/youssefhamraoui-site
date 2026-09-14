import type { ReactNode } from "react";
import type { Alternates } from "@/content/routes";
import type { Dictionary, Locale } from "@/content/types";
import { Header } from "./Header";
import { Footer } from "./Footer";

type Props = { lang: Locale; dict: Dictionary; alternates: Alternates; children: ReactNode };

/** Header, main and footer shared by every page. */
export function Shell({ lang, dict, alternates, children }: Props) {
  return (
    <div className="wrap">
      <Header lang={lang} dict={dict} alternates={alternates} />
      <main>{children}</main>
      <Footer lang={lang} dict={dict} />
    </div>
  );
}
