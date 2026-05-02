# Deployment

The site is a static Astro build. Deployed to **Vercel**, with auto-deploys
triggered by pushes to `main` on GitHub.

## Workflow once it's live

```
edit code locally  →  git push origin main  →  Vercel builds  →  live in ~90s
```

No manual deploy step. Every push to `main` triggers a production build.
Pushes to other branches get free preview URLs (e.g.
`sts-website-2026-git-feature-x.vercel.app`) so you can review changes
before merging.

## First-time setup (do this once)

### 1. Connect GitHub to Vercel

1. Sign in at https://vercel.com with your GitHub account.
2. Click **Add New… → Project**.
3. Find `sacredtreeservice/STS-website-2026` and click **Import**.
4. Vercel auto-detects Astro. Leave the defaults:
   - **Framework Preset:** Astro
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
   - **Install Command:** `npm install`
5. Click **Deploy**. First build takes ~90 seconds.

The site will be live at `sts-website-2026-<random>.vercel.app`.
Verify it works, then move on.

### 2. Connect the GoDaddy domain

In Vercel:

1. Open the project → **Settings** → **Domains**.
2. Add `sacredtreeservice.com` (apex). Vercel will show a **DNS record**
   panel with the values to paste at GoDaddy.
3. Add `www.sacredtreeservice.com` and set it to **redirect to** the apex.

In GoDaddy DNS:

1. Log in at https://dcc.godaddy.com → **My Products** → find
   `sacredtreeservice.com` → **DNS**.
2. **Apex (`@`):** delete any existing `A` records pointing at
   GoDaddy's parking IPs. Add a new `A` record:
   - **Type:** `A`
   - **Name:** `@`
   - **Value:** `76.76.21.21` (Vercel's anycast IP — confirm in the
     Vercel domain panel; they'll show the exact value to use)
   - **TTL:** `1 Hour`
3. **www subdomain:** add a `CNAME`:
   - **Type:** `CNAME`
   - **Name:** `www`
   - **Value:** `cname.vercel-dns.com`
   - **TTL:** `1 Hour`
4. Save.

DNS propagation: usually under an hour, can take up to 24h.

In Vercel, the domain panel will flip to **Valid Configuration** once
the records resolve. SSL certificates are issued automatically — no
action needed.

### 3. Post-launch

Once `https://sacredtreeservice.com` is live:

- **Google Search Console** (https://search.google.com/search-console):
  add the property, verify ownership, and submit
  `https://sacredtreeservice.com/sitemap-index.xml`. This kicks off
  crawling of all 493 pages, including the 7 new county pages.
- **Bing Webmaster Tools** (https://www.bing.com/webmasters): same
  process. Bing's index powers ChatGPT search + Copilot, so this matters
  for AI discovery.
- **Google Business Profile**: make sure the listing's website URL is
  `https://sacredtreeservice.com` — this is what connects the LocalBusiness
  schema (5.0★ / 62 reviews) to the GBP listing for Maps results.

## Local dev

```bash
npm install
npm run dev      # http://localhost:1234
npm run build    # static build to ./dist
npm run preview  # serve ./dist locally
```

## What's in `vercel.json`

- `cleanUrls: true` + `trailingSlash: true` — matches the way the site
  internally links (e.g. `/services/tree-pruning/`).
- Long, immutable cache for `_astro/*` (hashed asset bundle) and font
  files.
- 1-day cache for `public/assets/*` images (logo, OG image, gallery
  shots) — long enough to be fast, short enough that swapping an image
  propagates the same day.
- `text/plain` content-type for `/llms.txt` and `/llms-full.txt` so AI
  bots get them as plain text, with a 1-hour cache.
