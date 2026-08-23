---
name: sts-weekly
description: Run this week's growth task for sacredtreeservice.com (SEO / AEO / local) from growth/SCHEDULE.md — branch, do the recipe, npm run qa, open PR, log it. Use when the user says "/sts-weekly", "weekly site task", "what's this week's task", "run week N", or asks to ship the next STS growth item. Designed for Claude Sonnet.
---

# /sts-weekly — one growth task, end to end

You are running the weekly growth loop for the Sacred Tree Service website (Astro 6 static,
Vercel, production = `main`). One recipe per week. Small, verifiable, PR'd. You never push to `main`.

Arguments (optional): `status` · `run W<N>` · `run <RECIPE-ID>` · `skip "<reason>"` · `ship` (after a PR
is approved: merge it). No argument = run the current week.

## 0. Read before anything
1. `growth/BRAND.md` — hard constraints. If any step below conflicts with it, BRAND wins; stop and say so.
2. `growth/SCHEDULE.md` — find the row whose "Week of" is the Monday of the current week (use `date`).
   If that row is ☑ shipped, take the next ☐ row. If `run W<N>` / `run <ID>` was given, use that.
3. `growth/LOG.md` — read the last 3 entries (carry-overs, "next-week note", owner inputs still needed).
4. `growth/PLAYBOOK.md` — read ONLY the recipe(s) named in the row (plus the "Every recipe, always" header).
5. `docs/AUDIT-2026-08-23.md` — only the finding IDs the recipe cites (grep the ID), for evidence/context.

`status` → print: current week row, last LOG entry, open PRs (`gh pr list`), inbox contents, and stop.

## 1. Preflight (stop on any failure and tell the user exactly what to do)
```bash
cd ~/STS-website-2026
git status --porcelain          # must be empty (untracked CLAUDE.md is fine)
git checkout main && git pull --ff-only
npm ci
npm run build                   # baseline must build
node scripts/qa/check-dist.mjs  # baseline QA — note existing warnings so you don't claim credit for them
git checkout -b growth/w<NN>-<recipe-id-lowercase>
```
If the recipe needs owner inputs (`growth/inbox/…`) and they're missing, run the row's **fallback**
(named in SCHEDULE) and say so in the LOG; if there is no fallback, write one clear list of the
exact inputs needed into `growth/inbox/out/needed-w<NN>.md`, commit that, and stop.

## 2. Do the recipe
- Follow PLAYBOOK steps literally. Touch only the files the recipe names unless a step requires another.
- Content: answer-first, numbers/dates, ≥1 authoritative outbound link (UF/IFAS · ISA · ANSI A300/TCIA ·
  NOAA · the official ordinance/statute), ≥2 internal links, FAQ block with no duplicate questions
  (`grep -rn "q: '" src` first), visible date, reviewer line for arboricultural content, Article schema
  with image. Facts and price ranges ONLY from `src/data/company.ts`, `src/data/services.ts`, existing
  pages, or the owner's inbox file — never invented. Verify every ordinance/statute/date you cite by
  fetching the official page THIS session (WebFetch) and cite its URL.
- New guide page: copy `src/pages/tree-care/storm-prep.astro` as the scaffold; add the card in
  `src/pages/tree-care/index.astro`; add the link in `src/pages/llms.txt.ts`.
- New blog post: `src/content/blog/<slug>.md` (+ folder for images); frontmatter per `src/content.config.ts`.
- Schema: any new `@type` must be a real page at `https://schema.org/<Type>` (fetch it) and added to
  `KNOWN_TYPES` in `scripts/qa/check-dist.mjs`.
- Off-site recipes (LOCAL-*): write the pack to `growth/inbox/out/<name>-<date>.md` with exact
  current → correct values, URLs, field names. You cannot log into those accounts; don't pretend to.
- Never: add booking calendars, dark mode, chat widgets, street address/ZIP, cert numbers, "24/7",
  superlatives, fear copy, links to `/book-a-call/` or `/workflow/` from indexable pages.

## 3. Verify
```bash
npm run qa        # = astro build + scripts/qa/check-dist.mjs — must end with "QA PASSED"
```
Then, for content: open the built HTML of the new/changed page(s) in `dist/` and read it once as a
customer. For schema/meta changes: `grep` the built HTML for the exact new tag. For redirects/headers
(`vercel.json`): they only take effect on Vercel — say so in the PR and give the `curl -sI` check
to run after merge. Run `npm run preview` + a screenshot only if layout changed.

## 4. Ship the PR (not main)
```bash
git add -A && git commit -m "w<NN>: <RECIPE-ID> — <one line>"
git push -u origin HEAD
gh pr create --title "w<NN>: <RECIPE-ID> — <one line>" --body "<what / why (audit IDs) / how to verify / Vercel preview URL auto-posts here>"
```
Append the LOG block to `growth/LOG.md` (format at the top of that file) **in the same branch**,
flip the SCHEDULE row status to ◐, commit, push. Tell the user: PR link, what to check on the
Vercel preview, and the one-line merge instruction. Only merge (`gh pr merge --squash`) when the
user says `ship` / "merge it" — merging = live on sacredtreeservice.com.

After merge (if asked to `ship`): flip the SCHEDULE row to ☑ in a tiny follow-up commit on main
(the only direct-to-main commit allowed: status tick + LOG "merged <date>") — or fold it into the
next week's PR. If IndexNow is set up (`scripts/indexnow.mjs`), run it with the changed URLs.

## 5. Sidecars (if the row has one)
- **S-MEASURE**: fill one row in `growth/METRICS.md` (GSC, Bing, GBP, PSI via the PageSpeed API
  `https://www.googleapis.com/pagespeedonline/v5/runPagespeed?url=<URL>&strategy=mobile`, review
  count from the GBP link in `company.ts`, the 15 tracking queries, the 6 AI prompts). Write "—" and
  who owns access where you can't get a number. Add a 2-line "what changed / what to pull forward".
- **S-GBP**: write `growth/inbox/out/gbp-<yyyy-mm>.md` — 4 posts (≤1,500 chars, CTA, photo suggestion),
  3 Q&A seeds, photo checklist, services-menu/hours check list.

## Tone in the PR and LOG
Plain, short, factual. State what shipped and what didn't. No marketing language.
