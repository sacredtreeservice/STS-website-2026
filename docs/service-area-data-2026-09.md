# Where Sacred Tree Service Actually Works

**Source:** `~/Downloads/Sacred_Tree_Service_Reports/` — 494 quotes, Jan 1 – Sep 8, 2026
**Converted:** 227 quotes · **$529,574** revenue · **$1,641,509** total quoted
**Purpose:** replace guesswork in `cities.ts` and the service × city matrix with real job data

---

## 1. The headline

Revenue is far more concentrated than the site assumes.

| | Share of converted revenue |
|---|---|
| Orlando alone | **41%** |
| Top 6 cities | **72%** |
| Top 12 cities | **88%** |
| Remaining 30 cities | 12% |

The site currently gives all 44 cities identical weight and generates 528 service × city pages. The data says roughly **20 places** matter, and one of them matters more than the other nineteen combined.

---

## 2. Three corrections the data makes to the site's map

### Gotha is your #4 city and has no page

Nine quotes, seven converted, **$31,268** — more revenue than Winter Park, Ocoee, Sanford or Longwood, all of which have pages. Gotha, Montverde, Winter Springs and Oakland are all producing work with no page at all.

### Ten city pages have never produced a single quote

Celebration, Cocoa, DeLand, Four Corners, Goldenrod, Haines City, Lake Buena Vista, Orange City, Titusville, Edgewood.

Titusville and Cocoa are Brevard County — 45+ minutes out and zero traction in nine months. These pages are pure dilution.

### Orlando's 41% is compressed into one page — and the ZIPs say it shouldn't be

Dr. Phillips, Hunters Creek, Lake Nona, Pine Hills and Meadow Woods currently look "dead" if you search by city name, because the work is filed under Orlando. By ZIP, they're some of your best areas:

| ZIP | Area | Quotes | Revenue |
|---|---|---:|---:|
| 32811 | Millenia | 6 | $41,200 |
| 32819 | **Dr. Phillips** | 18 | $24,875 |
| 32806 | Delaney Park / SoDo | 20 | $24,455 |
| 32803 | Colonialtown / Audubon Park | 17 | $19,040 |
| 32835 | Metrowest | 12 | $17,025 |
| 32837 | **Hunters Creek** | 9 | $11,782 |
| 32836 | Bay Hill | 9 | $10,975 |
| 32832 | **Lake Nona** South | 7 | $9,810 |
| 32808 | Pine Hills | 8 | $8,975 |
| 32810 | Lockhart | 10 | $5,750 |
| 32818 | Hiawassee | 9 | $5,650 |
| 32801 | Downtown / Thornton Park | 7 | $4,000 |
| 32804 | College Park | 16 | $3,975 |

Millenia at $41,200 off six quotes is the single highest-value pocket in the business and appears nowhere on the site.

**Implication:** Dr. Phillips, Hunters Creek and Lake Nona should be kept and rebuilt as *Orlando neighborhood* pages, not standalone city pages. That's also how people search — "tree removal Dr Phillips" not "tree removal Orlando 32819."

---

## 3. What actually sells

Converted line items, nine months:

| Service | Lines | Revenue |
|---|---:|---:|
| Tree Removal | 186 | **$205,200** |
| Pruning & Trimming | 362 | **$178,415** |
| Planting / Installation | 28 | $27,109 |
| Stump Grinding | 54 | $21,625 |
| Palm Work | 18 | $16,650 |
| Land / Lot Clearing | 14 | $10,950 |
| Consulting / Assessment | 6 | $2,250 |
| Cabling & Bracing | 1 | $1,200 |
| Plant Health Care | 1 | **$300** |

Two services are 72% of revenue. Six services cover 99%.

**Worth a conversation, not a decision:** Plant Health Care is the second item in the site's service list, is named in the page title, the hero copy and `llms.txt` — and did $300 in nine months. Either it's a deliberate growth bet the marketing is front-running, or the site is leading with something the business doesn't really sell. Both are legitimate; they just imply opposite fixes.

Crane and emergency work didn't appear as their own line items — they're likely priced inside removals. Worth confirming before either gets a dedicated page.

---

## 4. Recommended matrix

**6 services × 22 places = 132 pages** (down from 528)

**Services to keep:** Tree Removal · Pruning & Trimming · Stump Grinding · Tree Planting & Installation · Palm Tree Services · Land & Lot Clearing

**Places to keep — cities (13):** Orlando · Winter Garden · Apopka · **Gotha** · Winter Park · Ocoee · Sanford · Longwood · Altamonte Springs · Windermere · Groveland · Oviedo · Mount Dora

**Places to keep — Orlando neighborhoods (9):** Dr. Phillips · Millenia · Delaney Park/SoDo · Colonialtown/Audubon Park · Metrowest · Hunters Creek · Bay Hill · Lake Nona · College Park

**Keep as city pages only, no service pages (9):** Casselberry · Winter Springs · Kissimmee · Maitland · Eustis · Clermont · Montverde · Davenport · St. Cloud

**Cut entirely (10):** Celebration · Cocoa · DeLand · Four Corners · Goldenrod · Haines City · Lake Buena Vista · Orange City · Titusville · Edgewood
→ 301 redirects to the parent service page.

Every kept city gets a real local hook. Currently 7 of 44 have one; the 7 that exist are the right standard.

---

## 5. Lead sources — worth noting

| Source | Quotes |
|---|---:|
| Existing client | 75 |
| Facebook | 69 |
| Referral | 62 |
| Google | 56 |
| Yelp | 18 |
| Website | 5 |

The website is credited with 5 of 494 quotes. Facebook and word of mouth are carrying the business. That's context for how much site work is worth right now — and an argument that the Google Business Profile rebuild (already next in your sequence) is the highest-value item on the whole list, since "Google" at 56 is mostly GBP, not organic search.

Also: `lead_source` is blank on 117 quotes (24%). Worth making that field required in OO v1 — without it, none of this gets measurable.

---

## 6. Open question for you

**BBB / TCIA / ISA — I meant getting *listed in their directories*, not adding badges to your site.**

TCIA and ISA both publish public "find a professional" directories that are scraped heavily and carry real authority, and you already hold both memberships — so it's claiming something you've already paid for. BBB is lower value and costs money; skip it unless you want the accreditation for other reasons.

Badges on your own site are worth having too, but that's a separate and much smaller thing.
