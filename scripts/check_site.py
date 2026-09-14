"""Checks a running build of the site against every URL of the old site.

Usage: python scripts/check_site.py <base URL>, e.g. http://127.0.0.1:3000
"""
import json
from pathlib import Path
import re
import sys
import urllib.parse
import urllib.request
from urllib.error import HTTPError

B = sys.argv[1].rstrip("/") if len(sys.argv) > 1 else "http://127.0.0.1:3099"
CRAWL = Path(__file__).with_name("old-site-urls.json")


class NoRedirect(urllib.request.HTTPRedirectHandler):
    def redirect_request(self, *a, **k):
        return None


opener = urllib.request.build_opener(NoRedirect)
failures = 0


def get(path, lang=None, cookie=None):
    headers = {"User-Agent": "check"}
    if lang:
        headers["Accept-Language"] = lang
    if cookie:
        headers["Cookie"] = cookie
    try:
        r = opener.open(urllib.request.Request(B + path, headers=headers), timeout=30)
        return r.status, r.headers, r.read().decode("utf-8", "replace")
    except HTTPError as e:
        return e.code, e.headers, e.read().decode("utf-8", "replace")


def rel(location):
    if not location:
        return ""
    p = urllib.parse.urlparse(location)
    return p.path + (f"?{p.query}" if p.query else "")


def title_of(html):
    m = re.search(r"<title>(.*?)</title>", html, re.S)
    return (m.group(1) if m else "").replace("&amp;", "&").replace("&#x27;", "'")


def fail(msg):
    global failures
    failures += 1
    print("   FAIL", msg)


old = [i for i in json.load(open(CRAWL, encoding="utf-8")) if "final" in i]
print(f"=== 1. Every page from the old site ({len(old)} URLs), no language header")
pages = {}
title_diff = []
for item in old:
    path = urllib.parse.urlparse(item["final"]).path or "/"
    status, headers, html = get(path)
    pages[path] = html
    if status != 200:
        fail(f"{path} -> {status} {rel(headers.get('location'))}")
        continue
    if 'rel="canonical"' not in html or 'hrefLang="fr"' not in html or 'hrefLang="en"' not in html:
        fail(f"{path} missing canonical or hreflang")
    new_title = title_of(html)
    if new_title != item["title"]:
        title_diff.append((path, item["title"], new_title))
print(f"   {len(pages)} fetched. Titles different from the old site: {len(title_diff)}")
for p, o, n in title_diff[:5]:
    print(f"      {p}\n         old: {o}\n         new: {n}")

print("\n=== 2. Every internal link on every page")
links = set()
for html in pages.values():
    for href in re.findall(r'href="(/[^"]*)"', html):
        if href.startswith("/_next"):
            continue
        links.add(href.replace("&amp;", "&").split("#")[0] or "/")
for href in sorted(links):
    status, headers, _ = get(href)
    if status == 200:
        continue
    if status == 307 and "lang=en" in href:
        target = rel(headers.get("location"))
        cookie = headers.get("set-cookie") or ""
        status2, _, _ = get(target, cookie="NEXT_LOCALE=en")
        if status2 == 200 and "NEXT_LOCALE=en" in cookie and "lang=en" not in target:
            continue
    fail(f"link {href} -> {status} {rel(headers.get('location'))}")
print(f"   {len(links)} unique internal links checked")

print("\n=== 3. Redirects and language handling")
cases = [
    # path, accept-language, cookie, expected status, expected location (None = no redirect)
    ("/", "fr-FR,fr;q=0.9", None, 307, "/fr"),
    ("/", "en-US", None, 200, None),
    ("/", "ar-MA,ar;q=0.9,fr;q=0.8", None, 307, "/fr"),
    ("/solutions/restaurants/fes", "fr-FR", None, 307, "/fr/solutions/restaurants/fes"),
    ("/solutions/restaurants/fes", "fr-FR", "NEXT_LOCALE=en", 200, None),
    ("/fr", "en-US", None, 200, None),
    ("/work/racha-food?lang=en", "fr-FR", None, 307, "/work/racha-food"),
    ("/en/work/racha-food", None, None, 200, None),
    ("/fr/solutions/car-rental/agadir", None, None, 308, "/fr/solutions/location-voiture/agadir"),
    ("/solutions/location-voiture", None, None, 308, "/solutions/car-rental"),
    ("/solutions/car-rental/fes", None, None, 404, None),
    ("/fr/nope", None, None, 404, None),
    ("/nope", None, None, 404, None),
]
for path, lang, cookie, want_status, want_loc in cases:
    status, headers, _ = get(path, lang, cookie)
    loc = rel(headers.get("location")) or None
    ok = status == want_status and loc == want_loc
    print(f"   {'ok  ' if ok else 'FAIL'} {path:36} lang={str(lang):26} cookie={str(cookie):16} -> {status} {loc or ''}")
    if not ok:
        failures += 1

print("\n=== 4. sitemap.xml and robots.txt")
status, _, xml = get("/sitemap.xml")
locs = {l.rstrip("/") for l in re.findall(r"<loc>([^<]+)</loc>", xml)}
missing = sorted({i["final"].rstrip("/") for i in old} - locs)
print(f"   sitemap {status}: {len(locs)} URLs, old URLs missing: {missing or 'none'}")
if status != 200 or missing:
    failures += 1
status, _, txt = get("/robots.txt")
print(f"   robots {status}: " + " | ".join(t for t in txt.strip().splitlines() if t))

print(f"\nRESULT: {'all checks passed' if failures == 0 else f'{failures} failure(s)'}")
sys.exit(1 if failures else 0)
