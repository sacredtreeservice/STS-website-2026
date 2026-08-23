# growth/ — the weekly system that keeps sacredtreeservice.com moving

One task a week. Small model does the work. Human merges. Numbers logged monthly.

| File | What it is |
|---|---|
| `BRAND.md` | Non-negotiables (owner facts, voice, legal/brand constraints). Read first, always. |
| `PLAYBOOK.md` | The recipes: what each weekly task is, files, steps, acceptance. |
| `SCHEDULE.md` | 52 dated weeks → recipe. Status ticks. Sidecars (monthly measure / GBP). |
| `LOG.md` | What actually shipped each week (append-only). |
| `METRICS.md` | Monthly numbers + the 15 tracking queries + AI prompt log. |
| `inbox/` | Owner drops photos/facts; model writes off-site packs to `inbox/out/`. |
| `../docs/AUDIT-2026-08-23.md` | The audit this system was built from. |
| `../scripts/qa/check-dist.mjs` | Deterministic post-build QA (`npm run qa`). Must pass before any PR. |
| `../.claude/skills/sts-weekly/` | `/sts-weekly` — runs this week's row end-to-end. |

## Run a week
```bash
cd ~/STS-website-2026 && claude --model sonnet
```
then `/sts-weekly` (or `/sts-weekly status`, `/sts-weekly run W7`, `/sts-weekly skip "reason"`).
The skill: reads SCHEDULE + LOG → picks the row → reads the recipe → branches → does the work →
`npm run qa` → PR → LOG entry. You review the PR on Vercel's preview URL and merge (= live).

## Why this shape (from the 2026 research in the audit)
- GBP + reviews + NAP consistency are ~52% of local ranking weight and what AI Mode actually cites
  for local queries → off-site packs are first-class tasks, not afterthoughts.
- Fresh (< 3–6 months), question-aligned pages with real numbers get cited; schema and llms.txt don't
  move AI citations → content cadence + refresh weeks, minimal schema ceremony (but valid).
- Programmatic city pages are a spam-update liability unless they carry local substance → de-doorway
  early, enrich later.
