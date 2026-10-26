"use client";

import type { ComponentProps } from "react";
import type { Locale } from "@/content/types";

// Same cookie, path and lifetime as proxy.ts.
const COOKIE = "NEXT_LOCALE";
const YEAR = 60 * 60 * 24 * 365;

type Props = ComponentProps<"a"> & { locale: Locale };

/**
 * A language-switch link that points straight at the page in that language.
 * Clicking it saves the choice in the NEXT_LOCALE cookie before the browser follows the link,
 * so proxy.ts does not send a visitor who picked English back to /fr.
 * (Old "?lang=en" links still work: proxy.ts saves the choice and redirects to the clean URL.)
 */
export function LangLink({ locale, onClick, ...props }: Props) {
  return (
    <a
      {...props}
      onClick={(event) => {
        document.cookie = `${COOKIE}=${locale}; path=/; max-age=${YEAR}; samesite=lax`;
        onClick?.(event);
      }}
    />
  );
}
