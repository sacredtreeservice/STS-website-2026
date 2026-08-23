# SCHEDULE.md — 52 weeks, one thing per week (2026-08-24 → 2027-08-16)

How to read: each row = one week's main task (a `PLAYBOOK.md` recipe). "Sidecar" = a ≤30-min
monthly add-on (S-MEASURE = log numbers into METRICS.md; S-GBP = draft next month's 4 GBP posts + Q&A).
"Sonnet alone" = a smaller model can do the site work by itself given the recipe; "(owner …)" means
the model produces the pack and a human executes the off-site part. Status: ☐ planned · ◐ in PR ·
☑ shipped · ⊘ skipped (say why in LOG.md).

Rules: run the current week's row (`/sts-weekly`). If its inputs are missing (inbox empty for a
field note, owner facts absent) run the listed fallback, log it, and keep the original for later.
Weeks are not sacred — when METRICS says something else matters more, swap rows, but never skip a
FIX row without a reason in LOG.md. Quarterly reviews (W14, W26, W40) may rewrite the next 13 rows.

Seasonal anchors baked in: hurricane season Jun 1–Nov 30 (peak Aug–Oct), oak pruning Dec–Feb,
freeze nights Dec–Feb, planting Mar–Apr, county fertilizer blackouts Jun 1–Sep 30, season-start prep in May.

| W | Week of (Mon) | Recipe | What ships | Sonnet alone | Sidecar | Status |
|---|---|---|---|---|---|---|
| 1 | 2026-08-24 | FIX-SCHEMA + FIX-HOST (+ EXIF strip, hero LCP, contact CLS) | Valid LocalBusiness type, robots meta, Article image, Sunday hours, z import, build warnings, image breakpoints; www→apex 308; X-Robots-Tag + robots Disallow on /workflow/; GPS EXIF stripped from all JPEGs + QA check; no reveal-hide above the fold; contact form wrapper height reserved + eager | Y | — | ◐ PR open 2026-08-23 |
| 2 | 2026-08-31 | LOCAL-NAP-FIX + FIX-SITEMAP (IndexNow) | Exact NAP corrections pack for BBB/Yelp/Nextdoor/YP; drop sitemap tiers, real lastmod on posts/guides; IndexNow key + script; MEASURE-SETUP checklist (GSC, Bing WMT, GBP access) | Y (owner executes listings) | S-MEASURE baseline | ☐ |
| 3 | 2026-09-07 | FIX-CONTENT-RISK + citations | Oak wilt, OTC, 24/7, deposit, stump contradiction, absolutes, loblolly, date-off-by-one; UF/IFAS·ISA·ANSI·NOAA links everywhere names appear | Y |  | ☐ |
| 4 | 2026-09-14 | CONTENT-SEASONAL: after-the-storm | /tree-care/after-the-storm/ — triage, what not to touch, debris, insurance claim checklist, when to call; peak hurricane month | Y |  | ☐ |
| 5 | 2026-09-21 | FIX-GEO + FIX-META | Apopka geo + miles recomputed from Apopka; seoName + title/description templates ≤60/≤155 | Y |  | ☐ |
| 6 | 2026-09-28 | CONTENT-PERMIT-HUB | /tree-care/permits/ — §163.045 + jurisdiction table (13 rows, official links, fetched this week) | Y | S-MEASURE #1 | ☐ |
| 7 | 2026-10-05 | LOCAL-REVIEWS-SOP | FTC-compliant ask flow, SMS/QR text, reply templates, bad-review playbook; GBP post drafts for Oct | Y (owner runs it) | S-GBP Oct | ☐ |
| 8 | 2026-10-12 | CONTENT-PERMIT-CITY: Orlando + Orange County | Two permit pages from the template; update hub table | Y |  | ☐ |
| 9 | 2026-10-19 | FIX-CITY-PAGES phase 1 | Render service FAQs on combo pages; cityPages flag (−210 URLs) + 308s; 15-city angle sentences | Y |  | ☐ |
| 10 | 2026-10-26 | CONTENT-FIELD-NOTE #1 | From growth/inbox (photos + facts). Fallback: CONTENT-PROBLEM lethal bronzing page | Y (needs inbox) |  | ☐ |
| 11 | 2026-11-02 | CONTENT-COST-PAGE: tree removal | /tree-care/tree-removal-cost/ — ranges by size/access, what moves price, stump line, dated | Y | S-MEASURE | ☐ |
| 12 | 2026-11-09 | LOCAL-DIRECTORIES batch 1 + FIX-DATA | Angi/Thumbtack/Expertise/Bing Places/Apple Business pack (identical description+photos); phone hardcodes, review count refresh, README/DEPLOYMENT | Y (owner creates accounts) | S-GBP Nov | ☐ |
| 13 | 2026-11-16 | CONTENT-PERMIT-CITY: Seminole County + Apopka | Seminole (Oviedo/Sanford/Lake Mary note) + Apopka (home turf) | Y |  | ☐ |
| 14 | 2026-11-23 | FIX-PERF + QUARTERLY-REVIEW Q1 | Fonts API, image sizes, logo, dead assets, ClientRouter decision; 13-week check of METRICS + reprioritize W15–W26 | Y |  | ☐ |
| 15 | 2026-11-30 | CONTENT-SEASONAL: pruning calendar | /tree-care/pruning-calendar/ — month × species grid (oaks Dec–Feb, palms, crape myrtle no-murder, citrus), season-end recap note | Y |  | ☐ |
| 16 | 2026-12-07 | CONTENT-DECISION: neighbor tree law FL | /tree-care/neighbor-tree-law-florida/ — overhang, roots, fallen tree, liability; statute/case cites; not legal advice | Y | S-MEASURE | ☐ |
| 17 | 2026-12-14 | CONTENT-SPECIES: live oak | /tree-care/species/live-oak/ — owner's guide, pruning cadence, protected status, failure modes | Y | S-GBP Dec–Jan | ☐ |
| 18 | 2026-12-21 | CONTENT-SEASONAL: cold protection | /tree-care/cold-protection/ — palms & tropicals, freeze nights, what not to do after a freeze (light holiday week) | Y |  | ☐ |
| 19 | 2026-12-28 | FIX-A11Y + FIX-LLMS | Skip link, focus, contrast, aria; llms.txt structure, llms-full faithful + real date (light week) | Y |  | ☐ |
| 20 | 2027-01-04 | CONTENT-COST-PAGE: pruning + palm trimming | Two cost pages; link from service pages and pricing FAQ | Y | S-MEASURE | ☐ |
| 21 | 2027-01-11 | CONTENT-ABOUT | About page depth + owner Person schema. Needs owner facts in inbox. Fallback: CONTENT-FAQ-DEDUPE | Y (needs inbox) | S-GBP Jan | ☐ |
| 22 | 2027-01-18 | CONTENT-PERMIT-CITY: Winter Park + Winter Garden | Two permit pages; update hub | Y |  | ☐ |
| 23 | 2027-01-25 | CONTENT-FIELD-NOTE #2 | Pruning-season job. Fallback: CONTENT-PROBLEM 'dead or dormant?' | Y (needs inbox) |  | ☐ |
| 24 | 2027-02-01 | CONTENT-ES phase 1 | /es/ + removal + pruning + emergency + contact; hreflang; native review before merge | Y (review) | S-MEASURE | ☐ |
| 25 | 2027-02-08 | CONTENT-DECISION: trees near power lines | Duke/OUC/FPL — who trims what, 10-ft rule, right-tree-right-place | Y | S-GBP Feb | ☐ |
| 26 | 2027-02-15 | QUARTERLY-REVIEW Q2 | Re-audit subset (QA, PSI, schema, NAP re-check, swap-city test), METRICS trends, rewrite W27–W39 if needed | Y |  | ☐ |
| 27 | 2027-02-22 | CONTENT-SPECIES: laurel oak & water oak | Lifespan/failure modes, when to plan replacement, protected status | Y |  | ☐ |
| 28 | 2027-03-01 | CONTENT-PERMIT-CITY: Sanford + Kissimmee/Osceola | Two permit pages; update hub | Y | S-MEASURE | ☐ |
| 29 | 2027-03-08 | CONTENT-SEASONAL: planting season refresh | Refresh /services/tree-planting/ + /tree-care/new-tree-care/, 'right tree right place' block, species picks by city | Y | S-GBP Mar | ☐ |
| 30 | 2027-03-15 | CONTENT-COST-PAGE: stump grinding + crane | Two cost pages | Y |  | ☐ |
| 31 | 2027-03-22 | CONTENT-DECISION: HOA tree rules + commercial case | FL Ch.720 basics for owners; one anonymized HOA case study on /commercial/ | Y (case facts from owner) |  | ☐ |
| 32 | 2027-03-29 | CONTENT-FIELD-NOTE #3 | Fallback: CONTENT-PROBLEM pine bark beetles | Y (needs inbox) |  | ☐ |
| 33 | 2027-04-05 | CONTENT-SPECIES: palms comparison | Sabal/queen/royal/foxtail/Phoenix/pygmy — bronzing hosts, pruning rules (UF/IFAS), cold hardiness | Y | S-MEASURE | ☐ |
| 34 | 2027-04-12 | LOCAL-LISTS + LOCAL-LSA | Best-of list outreach drafts (Expertise, Trees.com, LawnStarter, local press, HOA newsletters); LSA/Google Verified checklist | Y (owner executes) | S-GBP Apr | ☐ |
| 35 | 2027-04-19 | CONTENT-PERMIT-CITY: Lake/Clermont + Volusia | Two permit pages; hub complete | Y |  | ☐ |
| 36 | 2027-04-26 | CONTENT-DECISION: FL tree-service licensing | No state license exists — what 'licensed' means, verify insurance/WC, refresh how-to-choose guide | Y |  | ☐ |
| 37 | 2027-05-03 | CONTENT-SEASONAL: hurricane prep refresh | Refresh storm-prep + hurricane post; printable checklist; season starts Jun 1 | Y | S-MEASURE | ☐ |
| 38 | 2027-05-10 | CONTENT-PROBLEM: lethal bronzing / laurel wilt | Dedicated page(s) — we already rank for 'lethal bronzing … arborist'; OTC protocol; UF/IFAS | Y | S-GBP May | ☐ |
| 39 | 2027-05-17 | CONTENT-SEASONAL: fertilizer blackout by county | Table of Central FL county ordinances (dates, what's allowed), verified this week; PHC tie-in | Y |  | ☐ |
| 40 | 2027-05-24 | QUARTERLY-REVIEW Q3 + FIX-CITY-PAGES phase 2 | Enrich top-15 cities: permit block, city review, photo; METRICS trends; rewrite W41–W52 | Y |  | ☐ |
| 41 | 2027-05-31 | CONTENT-ES phase 2 | Palms, stump, plant health in Spanish; FAQs | Y (review) | S-MEASURE | ☐ |
| 42 | 2027-06-07 | CONTENT-FIELD-NOTE #4 | Fallback: CONTENT-PROBLEM lightning-struck tree | Y (needs inbox) | S-GBP Jun | ☐ |
| 43 | 2027-06-14 | CONTENT-DECISION: insurance after storm damage | Claims checklist, documentation, what's typically covered (hedged), debris caps | Y |  | ☐ |
| 44 | 2027-06-21 | CONTENT-SPECIES: citrus + invasives | Citrus greening/pruning; camphor, Brazilian pepper, Chinese tallow, earleaf acacia — remove & replace picks | Y |  | ☐ |
| 45 | 2027-06-28 | CONTENT-COST-PAGE: emergency/storm + what-to-expect | Emergency removal cost; /tree-care/what-to-expect/ process guide (estimate→job day) | Y | S-MEASURE | ☐ |
| 46 | 2027-07-05 | CONTENT-DECISION: root damage + mulching | Roots vs driveways/foundations/sewer; volcano mulch; free-mulch offer if real | Y | S-GBP Jul | ☐ |
| 47 | 2027-07-12 | VIDEO scripts + VideoObject scaffold | 6 scripts; schema component ready. Fallback if no footage: CONTENT-REFRESH costs hub | Y (footage from owner) |  | ☐ |
| 48 | 2027-07-19 | CONTENT-FIELD-NOTE #5 | Fallback: CONTENT-PROBLEM Spanish moss / ball moss / mistletoe | Y (needs inbox) |  | ☐ |
| 49 | 2027-07-26 | CONTENT-REFRESH: top 5 by impressions | Re-verify, re-date, citations, FAQ alignment on the 5 biggest GSC pages | Y | S-MEASURE | ☐ |
| 50 | 2027-08-02 | CONTENT-SEASONAL: peak-season triage refresh | Refresh after-the-storm + emergency page; storm-line copy consistent | Y | S-GBP Aug | ☐ |
| 51 | 2027-08-09 | FIX-DEPS + QA hardening | Astro/deps upgrade; extend check-dist.mjs with anything the year taught us | Y |  | ☐ |
| 52 | 2027-08-16 | ANNUAL-REVIEW | Full re-audit with a frontier model; write SCHEDULE 2027-28 | N (Opus/Fable) |  | ☐ |

## Standing weekly micro-habits (owner, not the model — 10 min)
- Ask every customer for a Google review the day the job closes (SOP from W7). Reply to every review within 48 h.
- Drop 3–6 job photos + 5 facts into `growth/inbox/` whenever a job is worth a field note (feeds W10/23/32/42/48).
- Post/approve the week's GBP post (drafted in the monthly S-GBP sidecar).

## Backlog (not scheduled — pull in when a week frees up)
CONTENT-PROBLEM ganoderma/butt rot · oak decline vs "oak wilt" myth · solar-panel canopy reduction ·
lightning protection systems (service page) · TRAQ tree risk assessment page · emergency × top-5-city
pages (only with real local substance) · mulch-pickup offer page · careers refresh · Commercial
sample TRAQ report download · VideoObject rollout once footage exists.

