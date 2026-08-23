# BRAND.md — non-negotiables for anyone (human or model) editing sacredtreeservice.com

Read this before writing a single word of copy, schema, or metadata. These are owner
decisions, not style preferences. If a task in PLAYBOOK.md ever conflicts with this file,
this file wins — stop and flag it.

## Who we are (facts — copy these exactly; source of truth is `src/data/company.ts`)

- Legal name **Sacred Tree Service LLC**, brand **Sacred Tree Service**. Founded 2023-01-13.
- Owner **Alexander Satoski**, title **"ISA Tree Service Operator"**. He is the owner/operator,
  **not an arborist** — never write diagnosis, disease, or risk opinions in his voice.
- **"ISA Certified Arborists on Staff"** is accurate per the owner and STANDS. Never question it,
  never "soften" it, never publish individual cert numbers or arborist names.
- Company is an ISA and TCIA **member** (not "accredited", not "certified company").
- Licensed · Insured · Workers' Comp. Certificate of insurance available on request.
- Phone (321) 204-8459 · sacredtreeservice@gmail.com.
- Public location = **"Apopka, FL"** only. No street address, no ZIP, no map pin copy. Ever.
- Serves greater Orlando, ~50-mile radius, 7 counties (Orange, Seminole, Osceola, Lake,
  Volusia, Brevard, Polk). Hours Mon–Sat 8–6; **after-hours emergency/storm response** —
  write it that way, not "24/7" (schema hours say Sunday = emergency only).
- Google rating 5.0; review count lives in `company.ts` (refresh from GBP, note the date).

## Philosophy (copy voice)

- **Save before remove.** Removal is the last option, framed as part of a healthy landscape.
- **ANSI A300. Never topping.** "Hurricane cut" palm over-pruning is wrong (UF/IFAS).
- **No fear-based selling.** No "before it's too late", no countdown urgency, no
  catastrophe framing. Calm, specific, useful.
- **Fundamentals, processes, repeatable results.** "Corporately small."
- Free in-person estimates, written quotes, no high-pressure upsells.
- No superlatives we can't prove ("#1", "best in Orlando", "guaranteed").

## Two voices

| Voice | Who | Allowed to say | Not allowed |
|---|---|---|---|
| **Owner / ops** | Alexander Satoski, ISA Tree Service Operator | what we did, how crews work, process, pricing, philosophy, what we declined and why | diagnosis, disease ID, risk ratings, "as an arborist" |
| **Company / field-team voice** | "our arborists", "the field team" — the company speaking, no individual names or cert numbers | biology, disease, pruning science, risk assessment | cert numbers, personal names |

The site's existing "Arborist-reviewed" badge (`isaCertified: true` in blog frontmatter) is a label the
owner controls — set it when the owner says the content reflects the staff arborists' practice. It is
NOT an approval step: nobody outside the owner, the office manager and the website consultant reviews
or signs off on content. No arborist sign-off gate, ever.

## Citation rules (every guide/post links at least one)

- Biology / disease / palm care / fertilization → **UF/IFAS EDIS** (edis.ifas.ufl.edu).
- Pruning standards → **ANSI A300**, **ISA / treesaregood.org**.
- Industry → **TCIA**.
- Hurricane season dates → **NOAA / NHC**.
- Permits / ordinances → the **city or county code page itself** (Municode / official site).
- Law (neighbor trees, §163.045) → the **Florida Statutes** page; always "not legal advice".
- Oak wilt is **not currently found in Florida** (UF/IFAS) — do not present it as a local risk.
- Lethal bronzing treatment = **oxytetracycline (OTC)** — never "over-the-counter".

## Numbers

- Price ranges come ONLY from existing published pages (`src/data/services.ts`,
  `/tree-care/tree-service-costs/`) or from the owner. Never invent a range.
- Dates, review counts, founding year, radius → `company.ts`.

## Product / funnel decisions (don't "improve" these)

- The lead form is a **request** form (GoHighLevel). Customers must NOT self-book appointments.
  Don't add calendars, booking widgets, or "pick a time" language on public pages.
- `/book-a-call/` (quick office call, GHL calendar) is noindex/out of sitemap and is linked only
  from `/contact/` by design — don't add more links to it, don't "promote" it.
- The old `/workflow/` staff pricing guide was DELETED 2026-08-23 (it leaked internal pricing from a
  public repo). Internal pricing never goes on the website or in this repo again — it lives in
  SkuldTree / the owner's own docs. The repo is PUBLIC on GitHub: nothing internal, no street
  address, no non-public phone, no passwords, no raw customer photos (`growth/inbox/` is gitignored).
- Dark mode was removed on purpose. Don't reintroduce it.
- Chat widget was removed at admin staff's request. Don't reintroduce it.
- Don't name Lantern Media, GoHighLevel, or "Edgeful" anywhere on the site.
- Ownership: sacredtreeservice.com (code, Vercel, GitHub) is built and run by the website consultant
  (skuld) personally. Lantern Media has no control over the site (their old site was replaced); Lantern
  only supplies the GoHighLevel lead form / SMS / CRM pieces embedded in it. Decisions are made by the
  owner, the office manager and the consultant — no other approvals needed.

## Deploy rules

- Vercel builds production from `main` only. A branch push = private preview, not live.
- Never push straight to `main` from an automated/weekly task — open a PR. The human merges.
- `npm run qa` must pass before any PR.
