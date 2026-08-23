# LOG.md — what shipped, week by week (append-only)

Format (one block per week; newest at the bottom):

```
## W<N> · <week-of date> · <RECIPE-ID> · <status: shipped | partial | skipped>
- PR: <url>  (merged <date> | open)
- Shipped: <one or two lines of what actually changed>
- Skipped/deferred: <what + why>  (omit if none)
- Inputs still needed from owner: <list>  (omit if none)
- Next-week note: <anything the next run must know>
```

---

## W0 · 2026-08-23 · AUDIT · shipped
- Audit: `docs/AUDIT-2026-08-23.md` (5 parallel audits: live technical, codebase vs Astro 6, 2026 SEO/AEO research, local SERP/competitors, content/E-E-A-T).
- System: `growth/` (BRAND, PLAYBOOK, SCHEDULE, LOG, METRICS, inbox), `scripts/qa/check-dist.mjs`, `npm run qa`, `/sts-weekly` skill.
- Next-week note: W1 is the schema/host fix pack — see SCHEDULE row 1 and PLAYBOOK FIX-SCHEMA / FIX-HOST.

## W1 · 2026-08-24 (run early, 2026-08-23) · FIX-SCHEMA + FIX-HOST · in PR
- PR: https://github.com/sacredtreeservice/STS-website-2026/pull/8 (open)
- Shipped (pending merge): `@type` → `['HomeAndConstructionBusiness','LocalBusiness']` + `additionalType` Wikidata Q127213 (arboriculture); Sunday hours spec removed; Article `image` always set; `max-image-preview:large` robots meta on indexable pages; `article:author` → /about/ URL; `z` from `astro/zod`; `[service].astro` skips custom-page slugs (build warnings 4 → 0); `image.breakpoints` capped; `vercel.json` www→apex 308 + `X-Robots-Tag` on /workflow/ and /book-a-call/; robots.txt `Disallow: /workflow/` in every UA group; EXIF/GPS stripped losslessly from og card + blog sources + hero (`scripts/qa/strip-exif.mjs`) and QA now fails on any JPEG metadata; `[data-reveal]` removed from hero + every page `<header class="head">` and gated on `html.js`; contact form: wrapper `min-height` reserved (719/891 px measured), `eager` on /contact/, iframe title "Free estimate request form", nested `<main>` → `<div>`.
- Skipped/deferred: HSTS includeSubDomains/CSP (FIX-HOST optional); blog image `sizes`/source resize (FIX-PERF W14).
- Inputs still needed from owner: decide `/workflow/` exposure (cost basis + password are in a PUBLIC GitHub repo); note the GPS-bearing originals remain in git history (purge = history rewrite, owner call); after merge verify `curl -sI https://www.sacredtreeservice.com/` → 308 and re-run Rich Results Test on / .
- Next-week note: W2 = NAP pack + IndexNow + measurement access checklist. Need GSC/Bing/GBP access from the owner.
