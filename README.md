# youssefhamraoui.com

Portfolio and service site for Youssef Hamraoui. Next.js 16 (App Router), English and French.

## Pages

| Page | English URL | French URL |
|------|-------------|------------|
| Home | `/` | `/fr` |
| Case studies | `/work/racha-food`, `/work/galaxy-pets` | `/fr/work/...` |
| Industry pages | `/solutions/restaurants`, `/solutions/e-commerce`, `/solutions/car-rental` | `/fr/solutions/restaurants`, `/fr/solutions/e-commerce`, `/fr/solutions/location-voiture` |
| City pages | `/solutions/<industry>/<city>` | `/fr/solutions/<industry>/<city>` |
| Demos | `/demo/restaurant-system`, `/demo/ecommerce-system` | `/fr/demo/...` |

These are the same URLs as the previous site, so existing links and search results keep working. `sitemap.xml` lists all of them.

## Editing content

| What | Where |
|------|-------|
| Home page copy, menus, footer | `content/dictionaries/en.ts`, `fr.ts` |
| Industry and city page copy | `content/solutions/en.ts`, `fr.ts` |
| City names and local-market paragraphs | `content/cities.ts` |
| Which cities each industry lists | `content/routes.ts` |
| Case studies | `content/cases/en.ts`, `fr.ts` |
| Demos | `content/demos/en.ts`, `fr.ts` |
| Email, socials, project links, images | `content/site.ts` |
| Styles | `app/globals.css` |

English and French files share one type, so the build fails if something exists in one language but not the other. Adding a city means adding it to `content/cities.ts` and to the industry's list in `content/routes.ts`; its pages and sitemap entries are generated.

## Languages

- English is served at the root, French under `/fr`. Internally all pages live in `app/[lang]`, and `proxy.ts` rewrites English URLs to `/en/...`.
- A visitor whose browser prefers French is sent to the French page. A saved choice (`NEXT_LOCALE` cookie) wins over the browser setting.
- The EN switch links to `?lang=en`, which saves the choice and redirects to the clean URL.
- The proxy needs a running Next.js server. A static export (`output: "export"`) would drop it.

## Local development

```bash
npm install
npm run dev
```

## Production build

`next.config.ts` sets `output: "standalone"`, so a build produces a self-contained server in `.next/standalone`.

```bash
npm run build
cp -r public .next/standalone/
cp -r .next/static .next/standalone/.next/
PORT=3000 node .next/standalone/server.js
```

## Deployment

Production runs on the VPS as its own Docker stack in `/opt/sites/youssefhamraoui.com`, built from this source with the `Dockerfile`: a standalone Next.js server on port 3000. Dokploy's Traefik routes the domain and handles HTTPS; the site is not a Dokploy app.

Release steps:

1. Build the new version beside the running one.
2. Test it on a temporary address with the check script below.
3. Switch the domain only once every check passes.
4. Keep the previous version so it can be switched back in seconds.

## Checking a build

`scripts/check_site.py` compares a running build with every URL of the previous site, stored in `scripts/old-site-urls.json`. It fetches each page, follows every internal link, and tests the language redirects, `sitemap.xml` and `robots.txt`.

```bash
python scripts/check_site.py https://<temporary address>
```

It ends with `RESULT: all checks passed` and exits with code 0 when everything is fine.
