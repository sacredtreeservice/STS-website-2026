# PLAYBOOK.md — weekly growth recipes for sacredtreeservice.com

Each recipe is one week of work (≤ 2–3 h with Claude Sonnet). `SCHEDULE.md` says which recipe runs
which week; `LOG.md` records what shipped. The `/sts-weekly` skill reads all three.

Every recipe, always:
1. Read `growth/BRAND.md` first. It wins over everything below.
2. Work on a branch `growth/wNN-<recipe-id>` off a fresh `main`. Never commit to `main` directly.
3. Before the PR: `npm run qa` (build + `scripts/qa/check-dist.mjs`) must print `QA PASSED`.
4. PR title `wNN: <recipe-id> — <one line>`; PR body = what/why/how-to-verify + LOG line.
5. Append the LOG line to `growth/LOG.md` in the same PR.
6. Off-site recipes (GBP, directories, NAP) produce a **checklist file** in `growth/inbox/out/`
   for the owner to execute — the model cannot log into those accounts.

Severity/effort tags in the audit (`docs/AUDIT-2026-08-23.md`) map to these recipes by ID.

---

## A. FIX recipes (technical — mostly one-shot, front-loaded)

### FIX-SCHEMA — valid schema graph
**Why:** `TreeRemovalService` is not a schema.org type (schema.org/TreeRemovalService → 404); Google
drops unknown types, so the whole business entity is unparsed on all 636 pages.
**Files:** `src/lib/schema.ts`, `src/components/Seo.astro`, `src/content.config.ts`,
`src/pages/services/[service].astro`, `astro.config.mjs`, `src/pages/blog/[slug].astro`,
`src/pages/tree-care/*.astro`.
**Steps:**
1. `schema.ts` LocalBusiness node: `'@type': ['HomeAndConstructionBusiness', 'LocalBusiness']`.
   `additionalType: 'https://www.wikidata.org/wiki/Q127213'` (arboriculture — verify any Wikidata
   QID by fetching it first; a wrong QID is worse than none). **Shipped in W1.**
2. Opening hours: remove the Sunday `00:00–23:59` spec (reads as open all Sunday). Keep emergency
   copy in prose only. Mirror GBP hours exactly.
3. Article schema: always set `image` — `a.image ?? '/assets/og-image.jpg'` as absolute URL array.
   Guides (`tree-care/*.astro`) must pass `ogType="article"`, `publishedTime`, `modifiedTime`,
   and emit Article schema (two currently don't: species, pruning-basics).
4. `Seo.astro`: add `<meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1">`
   when not `noindex`; `article:author` → drop or set to site URL (spec wants a profile URL).
5. `content.config.ts`: `import { z } from 'astro/zod'` (the `astro:content` export is deprecated in v6).
6. `services/[service].astro` `getStaticPaths`: skip slugs that have a custom page
   (`tree-planting`, `tree-care-plans`, `plant-health-care`, `large-tree-transplanting`) — kills the
   4 build warnings.
7. `astro.config.mjs`: `image: { layout: 'constrained', breakpoints: [640, 768, 1024, 1280, 1600] }`.
9. Privacy: `node scripts/qa/strip-exif.mjs <jpgs>` on every new photo before commit — the QA
   fails on any JPEG with EXIF/XMP (GPS) in `public/`, `src/assets/`, `src/content/`.
8. Add every new `@type` to `KNOWN_TYPES` in `scripts/qa/check-dist.mjs` only after confirming
   `https://schema.org/<Type>` returns 200.
**Accept:** `npm run qa` passes with 0 unknown-type errors; paste 3 page URLs into
https://validator.schema.org after deploy → 0 errors; Rich Results Test shows LocalBusiness parsed.

### FIX-HOST — one canonical host + hidden-page hardening  (**shipped in W1**, keep for reference)
**Files:** `vercel.json`, `public/robots.txt`.
**Steps:**
1. Add to `vercel.json`:
   ```json
   "redirects": [
     { "source": "/(.*)", "has": [{ "type": "host", "value": "www.sacredtreeservice.com" }],
       "destination": "https://sacredtreeservice.com/$1", "permanent": true }
   ]
   ```
   (Owner alternative: Vercel → Project → Domains → set `www` to "Redirect to sacredtreeservice.com".)
2. Header block for `/book-a-call/(.*)`: `{ "key": "X-Robots-Tag", "value": "noindex, nofollow" }`.
3. `/workflow/` (staff pricing guide) was deleted outright in W1 — internal pricing does not belong on
   the site or in the public repo.
**Accept:** after deploy `curl -sI https://www.sacredtreeservice.com/services/` → `308` to apex;
`curl -sI https://sacredtreeservice.com/workflow/` → `404`.

### FIX-GEO — HQ is Apopka, make the data say so
**Why:** `cities.ts` distances are measured from Orlando (`orlando: 0`, `apopka: 9`) and
`company.geo` is a Pine Hills point; live copy reads "based in Apopka… Orlando (~0 mi)".
**Files:** `src/data/company.ts`, `src/data/cities.ts`, `src/pages/services/[service]/[city].astro`,
`src/pages/service-area/[county].astro`, `src/pages/service-area/[city].astro`.
**Steps:** set `company.geo` to a city-level Apopka point (≈ 28.69, −81.53 — NOT a street);
recompute every `miles` from Apopka (haversine from that point to each city centroid; round to
whole miles; Apopka = 0, Orlando ≈ 12); re-read every sentence that uses `miles` or "our base"
and make sure it is true; re-sort cities by new distance.
**Accept:** grep "Apopka base" pages read sensibly; `/service-area/orange-county/` closest
community = Apopka; QA passes.

### FIX-META — titles ≤ 60, descriptions ≤ 155
**Why:** 341/634 titles > 60 chars, 453 descriptions > 160 (from templates).
**Files:** `src/data/services.ts` (add `seoName`), `src/pages/services/[service]/[city].astro`,
`src/pages/services/[service].astro`, `src/pages/service-area/*.astro`.
**Steps:** add `seoName` per service ("Tree Removal", "Tree Pruning", "Palm Care", "Care Plans"…);
title template `${seoName} in ${city}, FL | Sacred Tree Service`; description template
≤ 155 chars that still names city + service + one proof (ISA arborists on staff, free estimates).
**Accept:** `node scripts/qa/check-dist.mjs` shows 0 title/desc length warnings on combo pages.

### FIX-CITY-PAGES — phase 1 (de-doorway) / phase 2 (enrich)
**Why:** 546 service×city pages share ~80% template; zero sentences unique to a URL; the real
`service.faqs` (with price ranges) never render there. Swap-the-city test fails.
**Phase 1 (W9):**
1. Render 2–3 of `service.faqs` on combo pages (FaqBlock + FAQPage schema already exist).
2. Add `cityPages?: boolean` to `Service`; set `false` for large-tree-transplanting,
   tree-care-plans, arborist-consulting, cabling-bracing, land-clearing (−210 URLs). In
   `[city].astro` `getStaticPaths`, skip them. Add `vercel.json` 308 redirects from each removed
   `/services/<svc>/<city>/` to `/services/<svc>/` (generate the list with a tiny script; paste).
3. Add a small `cityServiceAngles` matrix in `cities.ts` (or a new `data/angles.ts`): one true
   sentence per (service family × city) — e.g. removal×lakefront city → root-plate/wet-soil note.
   Even 12 service families × 44 cities = 528 sentences is too many to hand-write in a week — do
   the 15 highest-population cities first, rest stay template (flagged for phase 2).
**Phase 2 (W40):** for the 15 cities: add a "Permits & ordinances in {city}" block linking the
permit guide, 1 job photo taken in/near that city if the inbox has one, and 1 review from that
city (from GBP, with the reviewer's first name only).
**Accept:** swap-the-city test on 3 random pages shows ≥ 2 sentences that would have to change;
redirects verified with curl; QA passes; sitemap count drops by ~210 in phase 1.

### FIX-CONTENT-RISK — factual/claim hygiene (pure copy)
**Files:** `src/data/services.ts`, `src/data/faqs.ts`, `src/pages/tree-care/*.astro`,
`src/content/blog/*.md`, `src/components/Footer.astro`, `src/pages/404.astro`, `src/pages/index.astro`.
**Fix list (all from audit):**
- Oak wilt presented as FL risk in 5 places → reframe: "dormant-season pruning for structure;
  oak wilt is not currently found in Florida (UF/IFAS)". Link UF/IFAS.
- "over-the-counter trunk injections" (×2) → "oxytetracycline (OTC) trunk injections".
- "24/7" (footer, 404, home, hurricane post, services FAQ) → "after-hours emergency/storm
  response" (schema hours: Mon–Sat 8–6; Sunday emergency only).
- how-to-choose guide: "gets paid when the work is done" vs our own deposit policy on larger jobs →
  "be wary of more than ~30–50% up front; a modest deposit on large jobs is normal".
- Stump pricing contradiction (removal FAQ "one all-in number" vs costs guide "quoted
  separately") → pick one; check the owner's field guide for which is true.
- Absolutes: "New lean = remove", "Bradford pears … always split", "in almost every Florida
  policy", "published ISA study … only 42%" (unlinked) → hedge or cite or drop.
- "loblolly" → slash/longleaf pine (Central FL).
- `/tree-care/index.astro`: `'Pests &amp; Diseases'` double-escaped.
- Blog dates render a day early (UTC → ET): `toLocaleDateString('en-US', { timeZone: 'UTC', … })`.
**Plus the citations pass (E2):** add outbound links to UF/IFAS EDIS (palm pruning, lethal bronzing,
fertilization), ISA/treesaregood.org, ANSI A300 (tcia.org), NOAA hurricane season, wherever those
names already appear. Target ≥ 1 authoritative link per guide/post/service page.
**Accept:** grep for each banned string returns 0; QA passes; reviewer line added where
`isaCertified: true`.

### FIX-PERF — fonts, images, dead weight
**Files:** `src/layouts/Base.astro`, `astro.config.mjs`, `src/components/Header.astro`,
`src/pages/index.astro`, `public/assets/`, `src/assets/`, `src/content/blog/**`.
**Steps:**
1. Fonts: move to Astro 6 stable Fonts API (`fonts: [{ provider: fontProviders.fontsource(),
   name: 'Lato', cssVariable: '--font-lato', weights: [400, 700], styles: ['normal','italic'],
   subsets: ['latin'] }, { …Marcellus }]`) + `<Font cssVariable="--font-marcellus" preload />` in
   Base head; remove `@fontsource` imports; update `font-family` to the CSS vars. Quick alternative
   if that fights: import `@fontsource/lato/latin-400.css` etc. + `vite.build.assetsInlineLimit: 0`.
2. Images: resize `src/content/blog/**/*.jpg` sources to ≤ 1600 px wide; hero `<Picture>` add
   `quality={65}` `widths={[640,1024,1440,1920]}`; logo → `<Image src={logo} width={48}
   height={48} densities={[1,2]} />` (move logo into `src/assets/`); delete unreferenced
   `public/assets/work-1..6.jpg` (2.7 MB) and the duplicate `src/assets/hero-canopy.jpg` if the
   blog copy is identical (it is: same bytes) — point hero at one file.
3. Decide ClientRouter: it's 13.6 KB + rebind hacks for a fade on a lead-gen site. Removing it is
   fine; if removed, set `prefetch: { prefetchAll: true, defaultStrategy: 'hover' }` so hover
   prefetch still works. Owner preference — default: remove.
4. Remove unused `QuickActions.astro`, `Stats.astro` if still unreferenced.
**Accept:** PSI mobile LCP improves vs the audit baseline (see METRICS.md); `Base.css` < 10 KB;
no base64 fonts in CSS; QA passes.

### FIX-A11Y — keyboard + contrast
**Files:** `src/layouts/Base.astro`, `src/components/Header.astro`, `StickyActionBar.astro`,
`Footer.astro`, `Testimonials.astro`, `src/pages/service-area/index.astro`.
**Steps:** skip link `<a class="skip" href="#main">Skip to content</a>` + `id="main"` on `<main>`;
mobile menu: `aria-controls`, move focus to close button on open, return focus on close;
`:focus-visible` ring site-wide; `.stars` → `role="img" aria-label="5 out of 5 stars"`; decorative
SVGs `aria-hidden="true"`; contrast: sticky-bar hover white-on-`--green-light` 3.33:1 → use
`--green-dark`; footer legal `#7a8470` on `#1f2a17` 3.83:1 → `#9aa68f`; search input `outline:0`
→ add replacement ring; `contact.astro` nested `<main>` → `<div>`.
**Accept:** PSI accessibility ≥ 95 on / and /contact/; tab through header on mobile works.

### FIX-LLMS — honest AI text files
**Files:** `src/pages/llms.txt.ts`, `src/pages/llms-full.txt.ts`.
**Steps:** move "Quick facts" above the first H2 (spec: H2 sections are link lists); move the
44-city list under `## Optional`; "Reviews: Selected Google reviews" (not "All"); llms-full: append
every guide (short answer + FAQ) and every post body, list commercial/emergency/financing;
"Last updated" = max(`publishedAt`/`updatedAt`) across content, NOT build time; keep under ~150 KB.
Reality check (research, Aug 2026): Google does not read llms.txt; keep it cheap and true,
don't over-invest.
**Accept:** curl both files; sizes sane; no stale counts (review count matches `company.ts`).

### FIX-SITEMAP — drop dead tiers, add real lastmod
**Files:** `astro.config.mjs`.
**Steps:** delete the `tier()` priority/changefreq logic (Google ignores both); in `serialize`, set
`lastmod` ONLY for blog posts (`publishedAt`/`updatedAt`) and guides (their `updatedAt`), nothing
else. Add IndexNow: generate a key, save `public/<key>.txt`, and a script
`scripts/indexnow.mjs` that POSTs changed URLs to `https://api.indexnow.org/indexnow` — run it
manually after each merge (or from the skill). Bing/Copilot only; Google ignores IndexNow.
**Accept:** sitemap shows lastmod on ≤ 15 URLs and none elsewhere; IndexNow key URL returns 200.

### FIX-DATA — single sources of truth
**Files:** `src/data/company.ts`, `src/data/services.ts:394`, `src/pages/contact.astro`,
`emergency.astro`, `tree-care/tree-service-costs.astro`, `storm-prep.astro`,
`how-to-choose-a-tree-service.astro`, `service-area/[city].astro`, `README.md`, `DEPLOYMENT.md`.
**Steps:** replace 6 hard-coded phone strings with `company.phone`/`phoneHref`; refresh
`googleReviewCount` from the live GBP and bump `Last verified:`; surface "N+ Google reviews (as
of <month year>)" in llms.txt and /reviews/; rewrite README (it's still starter boilerplate);
fix DEPLOYMENT.md stale numbers. Consider `src/data/pricing.ts` as the one source for every
published range (services FAQs, cost guide); the owner's private price book is the upstream.
**Accept:** `grep -rn "321) 204" src` returns only `company.ts`; QA freshness warning gone.

### FIX-DEPS — keep the stack current
**Steps:** `npm outdated`; `npm update` within semver; read Astro release notes before any major
(v7 changes `compressHTML` default); rebuild; QA; spot-check 5 pages visually in `npm run preview`.
**Accept:** build clean, QA passes, no visual regressions.

---

## B. CONTENT recipes (the compounding engine)

General content rules (see BRAND.md): answer-first (direct 1–2 sentence answer under a
question-phrased H1/H2, then detail), at least one number/range/date, ≥ 1 authoritative outbound
link, ≥ 2 internal links (service page + city/county page), FAQ block (3–5 Q&A, no duplicate
questions vs the site — grep first), visible "Reviewed/Updated <date>", Article schema with
image, reviewer line when the content is arboricultural. 700–1,400 words. No filler.

Where new pages live: guides → `src/pages/tree-care/<slug>.astro` (copy `storm-prep.astro` as the
template; it already wires Seo/Breadcrumbs/FaqBlock/Article); field notes → `src/content/blog/`.
Add every new guide to `tree-care/index.astro` cards and to `llms.txt.ts`.

### CONTENT-PERMIT-HUB — `/tree-care/permits/`
"Do I need a permit to remove a tree in Central Florida?" Short answer, then: Fla. Stat. §163.045
(a documented dangerous tree assessed by an ISA Certified Arborist / FL licensed landscape
architect does not need a local permit — quote the statute, link it, note the 2022 amendment),
a table by jurisdiction (city/county · protected species · DBH threshold · fee · who applies ·
mitigation/replacement · official link), who pulls it (we do, when hired), timing, fines.
Jurisdictions: Orlando, Orange County (unincorporated), Seminole County, Apopka, Winter Park,
Winter Garden, Maitland, Oviedo, Sanford, Lake Mary, Kissimmee/Osceola, Clermont/Lake, Volusia.
Every number must come from the official ordinance page fetched this week (cite URL + date).
Unknown → write "check with the city" rather than guess.

### CONTENT-PERMIT-CITY [jurisdiction] — `/tree-care/permits/<slug>/`
Template page per jurisdiction (run 2 per week when they share a county site): the rule in one
paragraph, protected species + DBH table, fee, process steps, exemptions (§163.045, hazard,
invasive species, agricultural), replacement/mitigation, how we help, 4 FAQs, link to the city
service-area page and to `/services/tree-removal/<city>/`. Update the hub table.

### CONTENT-COST-PAGE [service] — `/tree-care/<service>-cost/`
Split `/tree-care/tree-service-costs/` into per-service cost pages that answer "how much does X
cost in Orlando": range table by size/complexity, "what moves the price" (access, crane, power
lines, permit, stump, haul-away), example jobs (from field notes/owner), when it's cheaper
(bundling, off-season), financing line, then 5 FAQs. Ranges ONLY from `services.ts`/the costs
guide/owner — never invented. Date the page ("Prices checked <month year>"). Keep the old guide
as the hub linking to each.

### CONTENT-SPECIES [species] — `/tree-care/species/<slug>/`
Owner's guide: ID + where it grows locally (tie to cities), lifespan & failure modes, pruning
cadence & season, common pests/diseases (UF/IFAS links), protected status (link permit hub),
plant-or-avoid, care-plan tie-in, 3–5 FAQs. Add a card on `florida-tree-species.astro`.

### CONTENT-PROBLEM [topic] — `/tree-care/<slug>/`
Diagnosis-style guide (arborist-reviewed voice): symptoms, look-alikes, what's treatable vs not,
what we do, urgency without fear, UF/IFAS citation, photos if inbox has them, FAQs.
Topics queue: lethal bronzing (we already rank #8 for it), laurel wilt, pine bark beetles,
lightning-struck tree, "dead or dormant?", root damage to hardscape, Spanish/ball moss &
mistletoe, ganoderma/butt rot, oak decline (and why it isn't oak wilt).

### CONTENT-DECISION [topic] — `/tree-care/<slug>/`
Homeowner decisions: neighbor-tree law in FL (overhang, roots, fallen tree liability — cite
statute/case, "not legal advice"), HOA tree rules (FL Ch. 720 basics), trees near power lines
(Duke/OUC/FPL — who trims what), insurance after storm damage (claims checklist), FL tree-service
licensing (no state license exists — what "licensed" means, how to verify insurance), what to
expect on estimate/job day (access, lawn protection, wood/chips, payment, timeline).

### CONTENT-SEASONAL [topic]
Calendar-driven pages/refreshes: after-the-storm triage (Sep), pruning calendar by species (Dec),
cold/freeze protection (Dec), planting season (Mar), hurricane-prep refresh + printable checklist
(May, season starts Jun 1), fertilizer blackout by county (May; most Central FL counties restrict
nitrogen/phosphorus Jun 1–Sep 30 — verify each county ordinance this week), season recap (Dec).
Refreshes bump `updatedAt`, re-verify every number, re-run citations.

### CONTENT-FIELD-NOTE — real job, real photos (E-E-A-T)
**Inputs from the owner in `growth/inbox/`:** 3–6 job photos (JPG, any size) + a `facts.md` with:
city, species, the problem, what we did, what we found/declined, anything we flagged, approximate
size, crew/equipment, outcome. Without these the recipe can't run — use the listed fallback.
**Steps:** resize photos ≤ 1600 px into `src/content/blog/<slug>/`; descriptive alt text; post
500–900 words: H1 = job + tree + outcome; H2s "The setup / What we did / What we found / Why we
didn't [remove/top]"; owner voice for ops, reviewer line for anything diagnostic; `ogImage` 1200×630
JPG under `public/og/`; frontmatter `author: "Alexander Satoski"`, `authorRole: "ISA Tree Service
Operator"`, `isaCertified: true` only with the reviewer line; link the service + city pages; one CTA.
Draft 1 GBP post from it (≤ 1,500 chars + photo) into `growth/inbox/out/`.

### CONTENT-REFRESH [pages]
Pick the 3–5 pages with the most GSC impressions (or oldest `updatedAt`). Re-verify numbers,
add/refresh citations, tighten the first 2 sentences to the literal question people search, add
a FAQ if missing, bump `updatedAt`, regenerate llms-full. Research (Ahrefs 2026): pages < 3–6
months old get ~2× AI citations — freshness is the cheapest lever we have.

### CONTENT-ES — Spanish core pages
`/es/`, `/es/remocion-de-arboles/`, `/es/poda-de-arboles/`, `/es/emergencias/`, `/es/contacto/`
(phase 1), palms/stump later. Natural Central-FL Spanish (not literal), same facts from
`company.ts`, `hreflang` pairs in `Seo.astro` (`en`/`es`/`x-default`), `lang="es"` on those pages,
separate Spanish FAQs. Mark for native-speaker review before merge; confirm with the owner whether
someone answers the phone in Spanish before writing "Hablamos español". No local competitor has
Spanish pages (competitor scan, Aug 2026).

### CONTENT-ABOUT — depth for E-E-A-T
Needs owner facts (ask via inbox): founding story, team roles (no names/cert numbers unless the
owner wants), equipment/fleet, insurance (COI on request button → mailto), standards, 4–6 photos.
Add `Person` schema for the owner with `jobTitle: 'ISA Tree Service Operator'`, `sameAs` (FB/GBP).

### CONTENT-FAQ-DEDUPE — one canonical answer per question
Inventory every FAQPage question site-wide (`grep -rn "q: '" src`); group duplicates (emergency
page vs emergency service, removal cost ×4, pruning timing ×2); keep one canonical answer on the
page that owns the topic, others summarize + link. Remove hidden FAQ schema where questions are not
rendered (species, pruning-basics) or render them.

---

## C. LOCAL recipes (off-site; model drafts, owner executes)

### LOCAL-NAP-FIX — one name/address/phone everywhere
Produce `growth/inbox/out/nap-fix-<date>.md` with the exact current wrong value and the exact
correct value for each listing: BBB (lists Hiawassee 32818 + phone (407) 452-8779 + Facebook as
website), Nextdoor (Ocoee address, no website), Yelp (ZIP 32812, category "Landscaping", possible
duplicate slug), YellowPages/YardCareDirectory (Orlando 32818, no website). Correct values:
"Sacred Tree Service LLC", Apopka, FL (service-area business — hide street address everywhere,
per Google SAB rules), (321) 204-8459, https://sacredtreeservice.com, primary category "Tree
service". Include login URLs and the exact field names. Owner executes; model re-checks 2 weeks later.

### LOCAL-DIRECTORIES [batch]
Batch 1: Angi, Thumbtack, Expertise.com nomination, Bing Places (import from GBP), Apple Business
(claim Apple Maps place). Batch 2: Houzz, Porch, Trees.com/LawnStarter lists outreach, Apopka
Chamber, TCIA member directory, ISA "Find an Arborist" (for the staff arborist, if the owner wants).
Deliver one identical 750-char business description + 150-char short description + service list +
category choices + the same 5 photos, so every listing matches. Owner creates accounts.

### LOCAL-GBP-MONTH (monthly sidecar) — keep the profile alive
Draft 4 weekly GBP posts (≤ 1,500 chars, one photo each, one CTA), 3 Q&A seeds (question +
owner answer, FTC-compliant — real questions customers ask), a photo checklist (5 new job photos/month),
a services-menu check (every `services.ts` service exists in GBP Services with a description and
"from" price where the owner agrees), hours check (incl. holidays). Output to `growth/inbox/out/gbp-<month>.md`.
Research (2026): AI Mode cites the GBP for local queries; "open at time of search" is a top-5 pack
factor; weekly posts feed AI summaries.

### LOCAL-REVIEWS-SOP — compliant review velocity
Write the SOP + templates: ask every customer (never gate by sentiment — FTC 16 CFR 465 + Google),
SMS/email text with the direct GBP review link, QR card text for the crew, timing (same day),
reply templates (non-templated feel: mention the job/city), how to handle a bad review, monthly
count target (recency < 90 days matters more than totals). Competitors hold 176–1,000 Google reviews
vs our ~55–63. Don't add self-controlled Review/AggregateRating markup for stars (Google, 2026-07-24).

### LOCAL-LSA — Google Local Services Ads (Google Verified)
Checklist for the owner: eligibility (tree service), background check, GL insurance ≥ $1M upload,
GBP link, budget, the Aug-2026 move to Performance Max pay-per-lead. LSA holds position 1 on ~half
of "tree service <city>" SERPs (2026). Owner decision; not a site change.

### LOCAL-LISTS — get on the lists AI engines cite
Target list + outreach drafts: Expertise.com Orlando tree services, Trees.com, LawnStarter "best",
Orlando Sentinel/Orange Observer local-business features, HOA/property-manager newsletters,
city/county "urban forestry" resource pages (permit guide as the hook), UF/IFAS extension events.
"Presence on expert-curated best-of lists" = #1 AI-visibility factor (Whitespark LSRF 2026).

---

## D. MEASURE recipes

### MEASURE-SETUP (once)
Owner grants access: Google Search Console (domain property), Bing Webmaster Tools (import from
GSC; enable IndexNow with the key from FIX-SITEMAP), GBP Performance, PSI/CrUX. Optional: Vercel
Web Analytics (toggle in Vercel; `@vercel/analytics` is not needed for static — the Vercel
dashboard works) or GA4 if the agency wants it. Create `growth/METRICS.md` with the baseline table.

### MEASURE-MONTHLY (sidecar, first week of month)
Log to `growth/METRICS.md`: GSC clicks/impressions/avg position (28 d), top 10 queries, top 10
pages, Generative-AI report impressions; Bing AI Performance citations; GBP calls/direction
requests/website clicks + AI-summary views; PSI mobile perf/LCP/INP/CLS for / and one service page;
indexed pages (GSC) vs sitemap count; Google review count + rating; ranks for the 15 tracking
queries (manual search or a cheap rank tool); AI prompt log — ask ChatGPT, Perplexity, Claude,
Gemini the same 6 prompts ("best tree service Apopka FL", "tree removal cost Orlando", "who trims
palms in Winter Garden", "do I need a permit to remove a tree in Orlando", "certified arborist near
Sanford FL", "emergency tree removal Orlando") and record whether we're named/cited. Note what
changed since last month and which recipe to pull forward.

### QUARTERLY-REVIEW
Re-run `npm run qa`, PSI, schema validator on 5 templates; re-check NAP on the 6 listings; re-run
the swap-the-city test on 3 combo pages; read METRICS trends; rewrite the next 13 rows of
`SCHEDULE.md` if the data says so. Keep the audit doc current: append a dated "Status" section.

### ANNUAL-REVIEW (W52)
Full re-audit with a frontier model (this audit's prompts are in `docs/AUDIT-2026-08-23.md` §0);
new 52-week schedule.

---

## E. Optional / needs footage

### VIDEO — scripts + VideoObject
Write 6 short scripts (60–90 s: "what tree removal costs in Orlando", "why we don't top trees",
"hurricane cut vs proper palm pruning", "do I need a permit", "lethal bronzing signs", "what
happens on estimate day"); when the owner records them (phone is fine), embed on the matching page
with `VideoObject` schema + transcript. YouTube mentions are the strongest AI-visibility correlate
(Ahrefs, 2025) — but this needs footage, so it's a fallback week until it exists.
