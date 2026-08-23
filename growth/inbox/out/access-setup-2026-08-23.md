# Access we need to measure anything — owner checklist (drafted 2026-08-23)

Context: the website itself (code, Vercel hosting, GitHub) is built and run by the website
consultant (skuld) personally — no agency involved. What's missing is access to Google's and
Bing's dashboards about the site and to the Google Business Profile, which sit under whoever's
Google account set them up (owner, office manager, or Lantern Media if they created the GBP — the
source-of-truth doc, section 8, records who). Three free dashboards hold those numbers. Whoever
holds each login grants access once; after that every monthly
check-in logs real numbers into `growth/METRICS.md` and the weekly work can be steered by data
instead of guesses. Until then we are flying blind.

Send the website consultant's Google account email (the one that will do the weekly work) to
whoever holds the accounts, and have them do the three steps below. ~20 minutes total.

## 1. Google Search Console (GSC) — how Google sees the site
What it shows: which searches show the site, clicks, average position, which pages are indexed,
errors, and (since June 2026) a "Generative AI" report — impressions in AI Overviews / AI Mode.

Do this (whoever controls the GoDaddy domain / the Google account):
1. Go to https://search.google.com/search-console → "Add property" → **Domain** → `sacredtreeservice.com`.
2. Google gives a TXT record. Add it at GoDaddy → My Products → sacredtreeservice.com → DNS →
   Add record: Type `TXT`, Name `@`, Value = the `google-site-verification=…` string. Save, then
   click Verify in GSC (can take a few minutes).
   - If DNS is awkward: create a **URL-prefix** property `https://sacredtreeservice.com/` instead,
     choose "HTML tag", and send the consultant the `content="…"` value — it gets added to the
     site's `<head>` in the next PR and verification works after deploy.
3. GSC → Settings → Users and permissions → Add user → the consultant's email → **Full**.
4. Once verified: Sitemaps → submit `https://sacredtreeservice.com/sitemap-index.xml`.

## 2. Bing Webmaster Tools — Bing + Copilot + (indirectly) ChatGPT
What it shows: Bing search data, IndexNow status, and the new "AI Performance" report — how often
Copilot / Bing AI answers cite the site. ChatGPT search runs partly on Bing's index.

Do this (same person, after GSC is verified):
1. https://www.bing.com/webmasters → sign in (Microsoft or Google account) → **Import from Google
   Search Console** → pick sacredtreeservice.com. Verification is inherited. One click.
2. Settings → Users → add the consultant's email (Administrator).

## 3. Google Business Profile (GBP) — the listing that AI Mode and Maps actually cite
What it shows: calls, direction requests, website clicks, how people found the profile, and (2026)
how often Google's AI summaries showed it. It is also where posts, Q&A, services, hours, photos
and review replies are managed — the biggest local ranking lever we have.

Do this (whoever owns the profile — per section 8 of the source-of-truth doc):
1. https://business.google.com → select Sacred Tree Service → **Business Profile settings → People
   and access → Add** → the consultant's email → role **Manager** (not Owner).
2. While in there, confirm: business type = **Service-area business** with the street address
   **hidden** (we only publish "Apopka, FL"); primary category **Tree service**; phone
   (321) 204-8459; website https://sacredtreeservice.com; hours Mon–Sat 8:00–18:00.
   (The NAP pack in `nap-fix-2026-08-23.md` has the full golden record.)

## Optional but cheap
- **Vercel Web Analytics**: in the Vercel project → Analytics → Enable (free tier). Gives page
  views/referrers without any tracking script changes. Whoever owns the Vercel project.
- **Bing Places** and **Apple Business** (Apple Maps) claims are in the W12 directories pack — not
  needed for measurement, but they're where "near me" on iPhone comes from.

## What we do with it (so it's clear why)
- Month 1 (W2): record the baseline row in `growth/METRICS.md` — clicks, impressions, position,
  indexed pages, GBP calls/clicks, review count, and the 15 tracking queries.
- Every month after: same row. If a recipe didn't move its number, it gets swapped. If something
  spikes (a guide starts ranking), the next content week builds on it.
- Quarterly (W14/W26/W40): re-plan the next 13 weeks from those numbers.
