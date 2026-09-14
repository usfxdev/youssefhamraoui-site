import { NextResponse, type NextRequest } from "next/server";

// URL scheme (same as the previous site, so old links keep working):
//   English: /, /work/racha-food, /solutions/car-rental/agadir ...
//   French:  /fr, /fr/work/racha-food, /fr/solutions/location-voiture/agadir ...
// Internally every page lives under app/[lang], so English URLs are rewritten to /en/...
// Proxy runs separately from the app, so this file doesn't import shared modules.

const COOKIE = "NEXT_LOCALE";
const YEAR = 60 * 60 * 24 * 365;

type Locale = "en" | "fr";

const startsWith = (pathname: string, prefix: string) => pathname === prefix || pathname.startsWith(`${prefix}/`);

// 1. A language the visitor chose before (cookie).
// 2. The first supported language in the browser's Accept-Language header.
// 3. English.
function preferredLocale(request: NextRequest): Locale {
  const saved = request.cookies.get(COOKIE)?.value;
  if (saved === "en" || saved === "fr") return saved;

  const ranked = (request.headers.get("accept-language") ?? "")
    .split(",")
    .map((part) => {
      const [tag, ...rest] = part.trim().split(";");
      const q = rest.find((p) => p.trim().startsWith("q="));
      return { base: tag.toLowerCase().split("-")[0], q: q ? Number(q.trim().slice(2)) || 0 : 1 };
    })
    .filter((entry) => entry.q > 0 && (entry.base === "en" || entry.base === "fr"))
    .sort((a, b) => b.q - a.q);

  return (ranked[0]?.base as Locale | undefined) ?? "en";
}

function remember(response: NextResponse, request: NextRequest, locale: Locale) {
  if (request.cookies.get(COOKIE)?.value !== locale) {
    response.cookies.set(COOKIE, locale, { path: "/", maxAge: YEAR, sameSite: "lax" });
  }
  return response;
}

function redirect(request: NextRequest, pathname: string, status = 307) {
  const url = request.nextUrl.clone();
  url.pathname = pathname;
  return NextResponse.redirect(url, status);
}

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Car rental has a different slug in each language. Fix links that mix them up.
  if (startsWith(pathname, "/fr/solutions/car-rental")) {
    return redirect(request, pathname.replace("/fr/solutions/car-rental", "/fr/solutions/location-voiture"), 308);
  }
  if (startsWith(pathname, "/solutions/location-voiture") || startsWith(pathname, "/en/solutions/location-voiture")) {
    return redirect(request, pathname.replace(/^(\/en)?\/solutions\/location-voiture/, "/solutions/car-rental"), 308);
  }

  // "?lang=en" is how the language switch picks English: remember it, then show the clean URL.
  if (request.nextUrl.searchParams.get("lang") === "en") {
    const url = request.nextUrl.clone();
    url.searchParams.delete("lang");
    return remember(NextResponse.redirect(url, 307), request, "en");
  }

  // Internal English paths. Next.js runs the proxy again on the "/en/..." path it rewrites to,
  // so this must pass through untouched: redirecting it would loop forever.
  // Old "/en/..." links also land here and are served with a canonical link to the clean URL.
  if (startsWith(pathname, "/en")) {
    return NextResponse.next();
  }

  // French pages are served as they are.
  if (startsWith(pathname, "/fr")) {
    return remember(NextResponse.next(), request, "fr");
  }

  // Everything else is an English URL. Visitors who prefer French go to the French version.
  if (preferredLocale(request) === "fr") {
    return redirect(request, `/fr${pathname === "/" ? "" : pathname}`);
  }

  const url = request.nextUrl.clone();
  url.pathname = `/en${pathname === "/" ? "" : pathname}`;
  return NextResponse.rewrite(url);
}

export const config = {
  // Skip Next internals and any path with a file extension (images, favicon, sitemap.xml, robots.txt).
  matcher: ["/((?!_next|api|.*\\..*).*)"],
};
