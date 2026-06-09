export type Service = {
  slug: string;
  name: string;
  shortName: string;
  blurb: string;
  description: string;
  icon: string;
  faqs?: { q: string; a: string }[];
};

// Order matters — we lead with proactive care, frame removals as part of the
// natural cycle, and leave emergency/storm at the bottom (it's a small portion
// of actual work and we don't fear-monger).
export const services: Service[] = [
  {
    slug: 'tree-pruning',
    name: 'Tree Pruning & Trimming',
    shortName: 'Pruning',
    blurb: 'Routine pruning that helps trees thrive — and prevents problems before they start.',
    description:
      'Proper pruning extends a tree’s life, supports healthy structure, and reduces future risk. We follow ANSI A300 standards — structural pruning for young trees, crown cleaning and reduction for mature canopies, never topping.',
    icon: 'lucide:scissors',
    faqs: [
      {
        q: 'How much does tree pruning cost in Central Florida?',
        a: 'Single-tree pruning typically runs $250–$1,200 in the Orlando area depending on size and access. A mature live oak with deadwood and structural work usually lands $800–$2,000. Multi-tree property visits are priced as one job — less per tree than individual visits. We quote every job in person, in writing, with no high-pressure upsells.',
      },
      {
        q: 'When is the best time to prune trees in Florida?',
        a: 'Late winter through early spring (January–March) is ideal for most species — the tree is dormant, structural defects are visible, and there is time to push new growth before summer. Oaks specifically should be pruned in cooler months to reduce oak wilt risk. Storm-damaged or dead wood should be removed whenever found, regardless of season. Palms follow different rules.',
      },
      {
        q: 'Why don’t you "top" trees?',
        a: 'Topping — cutting major branches back to stubs — is the single worst thing you can do to a tree. It permanently disfigures it, opens it to decay, triggers weak structurally-compromised regrowth, and often kills the tree within 5–10 years. ANSI A300 prohibits topping. If a tree is too big for its space, the right answer is reduction pruning or removal — never topping. We have turned down jobs from homeowners who insisted on it.',
      },
      {
        q: 'How often should mature oaks be pruned?',
        a: 'Healthy mature live oaks in Central Florida typically need structural and deadwood pruning every 3–5 years. Younger oaks (under 15 years) benefit from structural pruning every 1–2 years — establishing a sound branch architecture that won’t fail in a hurricane. Skipping decades of pruning lets weak branch attachments mature into failure points. If you have never had your oaks looked at by an arborist, that is the visit to schedule.',
      },
      {
        q: 'Do you prune palms differently from other trees?',
        a: 'Yes — and this is where most palm work goes wrong. Palms don’t produce wound wood the way hardwoods do; every cut is permanent. Over-pruning (the "hurricane cut" removing every frond above horizontal) starves the palm and shortens its life. We follow UF/IFAS guidelines: take only dead or dying fronds at or below horizontal — typically a fraction of what most landscapers cut.',
      },
    ],
  },
  {
    slug: 'plant-health-care',
    name: 'Plant Health Care',
    shortName: 'Plant Health',
    blurb: 'Diagnose before you treat. Year-round monitoring, targeted pest and disease care, and fertilization built for Florida soils.',
    description:
      'Most plant health care is sold as a calendar of pre-paid sprays. Ours starts with an ISA Certified Arborist watching the tree. We scout, sample soil, identify the actual problem, and treat surgically — with priority on the threats that matter most in Central Florida: lethal bronzing in palms, oak decline, laurel wilt, scale and borers, and the chronic nutrient deficiencies sandy FL soils cause.',
    icon: 'lucide:leaf',
    faqs: [
      {
        q: 'Is plant health care a one-time service or an ongoing program?',
        a: 'Both work, but we strongly favor the annual program. Most plant health care is preventive, and a single visit can only solve what is already obvious. Our program runs on the FL seasonal calendar: spring scouting and soil sampling, summer monitoring (during the county fertilizer blackout), and fall fertilization once the rainy-season restrictions lift. One-time fertilization or targeted treatment is available when that is what the tree actually needs.',
      },
      {
        q: 'What does plant health care cost?',
        a: 'It depends on tree count, species, and what we find. Deep root fertilization is typically priced per tree; the annual program is priced per property based on the initial scout. We do free property walks and put everything in writing before any treatment — no surprises and no "you should pre-pay for the whole year of sprays."',
      },
      {
        q: 'Can you save a tree that is already showing decline?',
        a: 'Sometimes — and sometimes the honest answer is no. Many declines are reversible with the right intervention started early: oak decline driven by soil compaction, scale infestations, drought stress, manganese or iron deficiency. Others are not: advanced lethal bronzing in palms, Ganoderma butt rot, severe internal decay. An ISA Certified Arborist assessment will tell you which side of that line your tree is on, and we will not sell you treatment for a tree that cannot be saved.',
      },
      {
        q: 'Do you offer organic or lower-chemical options?',
        a: 'Yes. IPM-first means we treat only when scouting confirms a problem above threshold — and when we treat, we pick the targeted, lowest-impact option. Horticultural oils, biological controls, soil amendments, and systemic trunk injection (which uses roughly a tenth of the chemical of a foliar spray and stays inside the tree, with no drift) are part of our standard kit.',
      },
      {
        q: 'What if my palm already has lethal bronzing?',
        a: 'If a palm is symptomatic — bronzing fronds advancing up the crown, spear leaf collapse — it cannot be saved. UF/IFAS is unambiguous about this, and removal is the only way to stop the disease from spreading to nearby healthy palms. Those nearby palms, however, can be protected with oxytetracycline (OTC) trunk injections every 3–4 months for at least 2 years. That preventive protocol is one of the most common reasons Central Florida palm owners hire us.',
      },
    ],
  },
  {
    slug: 'arborist-consulting',
    name: 'Arborist Consulting & Risk Assessment',
    shortName: 'Consulting',
    blurb: 'ISA Certified Arborist evaluations, reports, and tree risk assessments.',
    description:
      'Pre-purchase tree inspections, insurance and HOA reports, and tree risk evaluations conducted by ISA Certified Arborists — with documented findings you can share with stakeholders.',
    icon: 'lucide:clipboard-check',
    faqs: [
      {
        q: 'What is an arborist consultation, and when do I need one?',
        a: 'An arborist consultation is a documented professional opinion about your tree(s) — health, structural risk, species ID, or expected service life. You need one when something changes (sudden lean, large limb failure), when paperwork requires it (insurance claim, HOA, city permit), or before a major decision (removing a heritage tree, buying a property with mature canopy). Consultations are not estimates — you’re paying for professional judgment, not a sales call.',
      },
      {
        q: 'How much does an arborist consultation or tree risk assessment cost?',
        a: 'Basic on-site consultations and informal risk assessments typically run $250–$500. Formal written reports — the kind insurance carriers, HOAs, and municipalities accept — run $400–$1,200 depending on tree count, complexity, and required documentation. Pre-purchase inspections of properties with significant canopy typically fall $350–$800. We quote each consultation in advance based on the actual scope.',
      },
      {
        q: 'Can you write a report for my insurance company, HOA, or city permit?',
        a: 'Yes. We routinely write reports for insurance claims (storm damage, tree-on-structure), HOA disputes, and municipal permits (heritage tree removal, mitigation requirements). The report includes species ID, condition assessment, photographic documentation, and a clear professional opinion — formatted to satisfy what the requesting party needs. Tell us up front what the report is for; the level of detail and formatting differs.',
      },
      {
        q: 'Do you write TRAQ-level tree risk assessments?',
        a: 'Yes. TRAQ (Tree Risk Assessment Qualification) is the ISA’s structured framework for evaluating tree failure risk. We conduct full Level 2 visual assessments and, when warranted, advanced (Level 3) assessments involving climbing inspection. The report includes target identification, likelihood-of-failure, likelihood-of-impact, consequence analysis, and a final risk rating — the framework municipalities and insurance carriers recognize.',
      },
    ],
  },
  {
    slug: 'cabling-bracing',
    name: 'Cabling & Bracing',
    shortName: 'Cabling',
    blurb: 'Structural support that gives strong-but-vulnerable trees more good years.',
    description:
      'Co-dominant stems, weak branch attachments, and old wounds can often be reinforced with steel cabling or bracing rods. We assess every candidate tree to make sure support hardware will meaningfully extend its safe, healthy life.',
    icon: 'lucide:link-2',
    faqs: [
      {
        q: 'When is cabling or bracing the right call?',
        a: 'When a tree has a structural weakness — typically a co-dominant stem with included bark, a heavy lateral limb with a poor branch attachment, or a partially failed branch union — but the tree is otherwise healthy and worth keeping. It is not a fix for decayed wood, dying trees, or trees that should be removed. We evaluate every candidate against ISA standards. If hardware won’t meaningfully extend safe, healthy life, we’ll say so.',
      },
      {
        q: 'How much does cabling a tree cost?',
        a: 'A single cable installation in a residential setting typically runs $300–$1,000 per cable depending on tree size, height, and access. Bracing rods (used to hold split unions together) add roughly $200–$500 per rod. Most jobs involve 1–3 attachment points. Heritage trees with multiple failure points can run $1,500–$3,500 for a full system. We quote the full system in writing before any hardware goes in.',
      },
      {
        q: 'How long do cables and braces last?',
        a: 'A properly installed steel cable system typically lasts 8–10 years before inspection or replacement is needed. Synthetic (Cobra-style) cabling can last longer. Bracing rods are permanent. The tree continues to grow around the hardware, which means periodic inspection (every 3–5 years) is part of the long-term plan. We document each installation with photos and notes so future inspection has context.',
      },
      {
        q: 'Will cabling save a tree that’s already cracked or split?',
        a: 'Sometimes — and sometimes not. A clean recent crack with no decay can often be braced and recovered. An older crack, a split with internal rot, or a failure that has separated tissue beyond a certain limit usually means the tree can’t be saved structurally. We have to see it to know. What we won’t do is install hardware on a tree that’s likely to fail anyway — that creates a false sense of safety.',
      },
    ],
  },
  {
    slug: 'large-tree-transplanting',
    name: 'Large Tree Transplanting',
    shortName: 'Transplanting',
    blurb: 'Save the tree — move it. Mature-tree relocation done with the patience and craft this work demands.',
    description:
      'Moving a mature tree is not a one-day job. Done right, it’s months of root pruning, a careful extraction, and a full year of guided aftercare. Sacred Tree is training under one of Florida’s veteran tree-movers to bring this specialty to homeowners who want to save a heritage tree instead of remove it — heritage live oaks, mature magnolias, and the specimen trees worth the effort.',
    icon: 'lucide:move',
    faqs: [
      {
        q: 'What does it cost to transplant a large tree?',
        a: 'Wide range. Typical residential moves run $1,000–$5,000. Trees over 24 inches in trunk caliper or with hard access can run $3,500–$10,000 or more. Distance, crane needs, species, and soil disposal all swing the price significantly, so we quote every job in person rather than guess.',
      },
      {
        q: 'What is the survival rate for a transplanted tree?',
        a: 'With proper root-pruning lead time and a committed aftercare year, professional large-tree transplants can survive at rates near 95%. Rushed or under-watered transplants — even by competent crews — can drop into the 40–60% range (a published ISA study of red oaks dug with a tree spade saw only 42%). Before you commit, we will tell you our honest read on the survival probability for your specific tree.',
      },
      {
        q: 'How far in advance do we need to start?',
        a: 'Root pruning takes a minimum of 3–4 months of lead time. Six months is more realistic for medium-large trees, and the largest specimens deserve a phased approach over 1–4 years (UF/IFAS recommends pruning one quadrant per year for the biggest moves). If a crew tells you they can move a 100-year-old live oak next week, walk away.',
      },
      {
        q: 'Can you move a protected live oak?',
        a: 'Often yes — but Florida cities and counties (Orange, Seminole, and others) frequently protect mature live oaks under local tree ordinances. We help homeowners navigate the permit process, document the tree’s health, and submit what the municipality needs.',
      },
      {
        q: 'Do you guarantee the tree will survive?',
        a: 'We do not put a hollow warranty on a living thing whose success depends on factors a homeowner controls — irrigation, ground conditions, weather, and time. What we do: assess honestly before quoting, prep the tree the right way, execute the move under our mentor’s eye, and stay involved through the full aftercare year so problems get caught early.',
      },
    ],
  },
  {
    slug: 'palm-tree-services',
    name: 'Palm Tree Services',
    shortName: 'Palms',
    blurb: 'Specialty care for Florida palms — sabal, queen, royal, washingtonia, and more.',
    description:
      'Florida palms have specific care needs — improper pruning weakens them and accelerates decline. Our crews are trained on sabal palmetto, queen, royal, washingtonia, and other common species, with the right techniques to keep them healthy.',
    icon: 'lucide:palmtree',
    faqs: [
      {
        q: 'How much does palm trimming cost in Central Florida?',
        a: 'Standard palm trimming typically runs $75–$250 per palm depending on height, species, and how overdue the trim is. Tall royal palms (over 40 feet) can run $250–$450 each because they require climbing or a bucket. Sabal palmettos, washingtonias, and queens are routine — we price each in person. Removal of a dead palm (lethal bronzing, late-stage Ganoderma) typically runs $400–$1,500 depending on size and access.',
      },
      {
        q: 'How often should I have my palms trimmed?',
        a: 'Less often than most people think. UF/IFAS specifically recommends pruning palms only to remove dead, dying, or broken fronds — typically once every 12–18 months, sometimes less. Pruning healthy green fronds weakens the palm and accelerates nutritional decline. If a landscaper recommends quarterly palm trimming, get a second opinion. The right cadence keeps the canopy fuller and the palm healthier.',
      },
      {
        q: 'What is a "hurricane cut" — and why don’t you do it?',
        a: 'The "hurricane cut" is cutting palm fronds all the way back above horizontal, leaving only a small upright tuft. It looks tidy and customers often love it — but it severely weakens the palm, removes the photosynthetic capacity it needs to feed itself, and triggers nutritional deficiencies. UF/IFAS, the ISA, and every credentialed arborist agree: don’t do it. Hurricane-cut palms are markedly more vulnerable in actual hurricanes, not less.',
      },
      {
        q: 'What is lethal bronzing — and what do I do if I see it?',
        a: 'Lethal bronzing (Texas Phoenix palm decline) is a phytoplasma disease spreading through Central Florida that kills sabal, queen, Phoenix, and other palms once symptoms appear. Symptoms: bronzing of older fronds advancing up the canopy, premature fruit drop, spear leaf collapse. There is no cure once symptomatic — removal is the only way to stop the spread. Nearby healthy palms can be protected with oxytetracycline (OTC) trunk injections every 3–4 months for at least 2 years.',
      },
      {
        q: 'What palms grow well in Central Florida?',
        a: 'Sabal palmetto (our state tree) is the most reliable native — drought-tolerant, cold-hardy, well-suited to local soils. Other strong performers: pindo (Butia capitata), Mediterranean fan (Chamaerops humilis), windmill (Trachycarpus fortunei), and cabbage palm. Queen palms grow well but need more nutrition. Royals need cold-snap protection. Washingtonia robusta is fast but messy and prone to lightning strikes. We can advise on the right palm for your site.',
      },
    ],
  },
  {
    slug: 'tree-removal',
    name: 'Tree Removal & Replanting',
    shortName: 'Removal',
    blurb: 'Thoughtful removals as part of a healthy landscape — and we replant where you want.',
    description:
      'Removals happen for good reasons: a tree has reached the end of its safe life, a property is being reshaped, or a tree has outgrown its space. Our ISA Certified Arborists assess every removal carefully, and we’ll always tell you when a tree is worth saving. Where you’d like, we replant — keeping the cycle going.',
    icon: 'lucide:tree-deciduous',
    faqs: [
      {
        q: 'How much does tree removal cost in Central Florida?',
        a: 'Residential tree removal in the Orlando metro typically runs $400–$3,500 depending on size, access, proximity to structures, and disposal. A 30-foot pine in an open yard sits at the low end ($400–$800). A 70-foot live oak overhanging a house and pool with crane access runs $3,000–$8,000+. Stump grinding is usually quoted separately ($100–$400 per stump). We quote in person, in writing, and stand behind the number.',
      },
      {
        q: 'Do I need a permit to remove a tree in Central Florida?',
        a: 'Often, yes. Many Central Florida municipalities — including parts of Orange County, the City of Orlando, Winter Park, Maitland, Seminole County, and others — protect certain species (especially mature live oaks) under local tree ordinances. Removal often requires a permit, an arborist’s written justification, and sometimes a mitigation planting plan. We help homeowners navigate the permit process and submit what the municipality needs.',
      },
      {
        q: 'How long does a tree removal take?',
        a: 'A standard residential tree removal — including takedown, cleanup, and haul-away — typically takes a half-day to a full day per tree. Large oaks or pines with structures underneath can take 1–2 days. Crane-assisted removals are usually faster (a few hours of crane time) but require setup and pre-rigging. Multi-tree jobs are scheduled efficiently to minimize trips. We give a realistic timeline in the written estimate, not a best-case number that slips.',
      },
      {
        q: 'Will you grind the stump too?',
        a: 'Yes — and we’ll quote it with the removal so you see one all-in number. Standard stump grinding is $100–$400 per stump depending on diameter. We grind 6–12 inches below grade, sweep up the chips, and leave the site ready for sod, mulch, or new plantings. If you want the stump left (some homeowners do for natural seating, mushroom cultivation, or carving), we leave it whatever height you want.',
      },
      {
        q: 'Will you replant after a removal?',
        a: 'Yes. Removals should be part of a healthy landscape cycle, not the end of it. If you’d like to replant, we can recommend appropriate species (right-tree-right-place principles), source the new tree, and plant it as part of the same visit or a follow-up — this is our dedicated Tree Planting & Installation service. Replanting after a removal is one of the most overlooked parts of good tree care.',
      },
    ],
  },
  {
    slug: 'tree-planting',
    name: 'Tree Planting & Installation',
    shortName: 'Planting',
    blurb: 'Locally grown trees, planted right and cared for for years — same-day with a removal or on their own.',
    description:
      'We plant trees the right way: locally grown, locally sourced specimens we deliver and install ourselves — same day alongside a removal, or as a standalone “I just want trees planted” job. The range runs from foundational Florida-native species to more delicate ornamentals, and Central Florida’s near year-round growing season opens up a wide, interesting palette. And we don’t plant and leave — we maintain your new trees for years afterward, tied directly into our Plant Health Care program, guided start to finish by right-tree-right-place principles.',
    icon: 'lucide:sprout',
    faqs: [
      {
        q: 'Can you plant a tree the same day you remove one — or do I have to book planting separately?',
        a: 'Either works. Most of our planting happens the same day as a removal — the crew, equipment, and access are already on site, so a fresh tree goes in where the old one came out and you only pay for one visit. But planting is also a standalone service: plenty of customers call us simply because they want trees added to their landscape, with no removal involved at all. Same-visit planting after a removal typically runs $250–$1,200 per tree installed (size and species dependent); a standalone planting day is quoted on its own based on tree count, sizes, and access.',
      },
      {
        q: 'Where do the trees come from — do you grow them or buy them from a big-box store?',
        a: 'Neither a warehouse pallet nor a mystery shipment. We source locally grown, locally sourced trees from Central Florida growers we personally know — Apopka is the “Indoor Foliage Capital,” and this region is one of the best places in the country to source healthy nursery stock. Because the trees are grown in our climate and soils, they transplant with far less shock than stock trucked in from out of state. We pick the specimens, we deliver them, and our own crew installs them — so the same people who choose the tree are the ones who plant it correctly.',
      },
      {
        q: 'What should I plant — native species or ornamentals? What actually thrives in Central Florida?',
        a: 'Both have a place, and we help you adapt your landscape as much as the environment around you will allow. Florida-native species are the foundation — live oak, southern magnolia, bald cypress, red maple, dahoon holly, and sabal palm are tough, well-adapted, and low-maintenance once established. From there you can layer in more delicate ornamentals — flowering and accent trees that reward a little extra care. Every recommendation follows right-tree-right-place: we match the species to your soil, sun, drainage, overhead lines, and how much room the mature canopy and roots will actually need, so you’re not fighting the site for the next thirty years.',
      },
      {
        q: 'Do you just plant the tree and leave, or do you take care of it afterward?',
        a: 'We stay involved. The first year or two after planting is when a young tree lives or dies, so we don’t plant and walk away. New plantings fold directly into our Plant Health Care program — establishment watering guidance, monitoring for transplant stress, deep-root fertilization tuned to Florida’s sandy soils, and pest and disease scouting — for years afterward, not just the install day. Planting the tree is the easy part; getting it established and keeping it healthy is the part most companies skip, and it’s the part we’re built around.',
      },
      {
        q: 'When is the best time of year to plant a tree in Central Florida?',
        a: 'Central Florida’s growing season runs nearly year-round, so the planting window is far wider here than up north — one of the real advantages of this climate. That said, the sweet spot for most trees is the cooler, drier months from roughly October through March: the tree can settle its roots without the heat and water stress of peak summer, and the natural rains of the following wet season help it establish. We do plant in summer when it makes sense (especially same-day with a removal), with closer attention to irrigation while the tree takes hold. We’ll tell you the ideal window for your specific species rather than rush a planting that would do better a few weeks later.',
      },
    ],
  },
  {
    slug: 'stump-grinding',
    name: 'Stump Grinding',
    shortName: 'Stumps',
    blurb: 'Grind stumps below grade so you can replant, resod, or rebuild.',
    description:
      'We grind stumps 6–12 inches below grade, sweep up the chips, and leave the site ready for sod, mulch, or new plantings. Fast turnaround, no big machinery ruts, no surprises.',
    icon: 'lucide:circle-dot',
    faqs: [
      {
        q: 'How much does stump grinding cost in Central Florida?',
        a: 'Single stump grinding typically runs $100–$400 depending on diameter, root flare, and access. Large stumps (24-inch+ diameter, big root systems, old hardwood) can run $400–$700. A common rule of thumb is $4–$8 per inch of stump diameter, with a minimum charge. Multi-stump jobs on the same property are priced together — less per stump than individual visits.',
      },
      {
        q: 'How deep do you grind a stump?',
        a: 'Standard grinding takes the stump 6–12 inches below grade — enough to lay new sod, mulch over, or replant nearby. If you’re planning to put another tree right where the old one was, we can grind deeper (12–18 inches) and remove more of the lateral root system; this is typically priced separately. For pure cosmetic grinding (covering with mulch or grass), 6 inches is usually plenty.',
      },
      {
        q: 'What happens to the wood chips after grinding?',
        a: 'The grinding produces a pile of mixed wood chips and soil right where the stump was. Three options: leave them as fill (they settle in a few months, decompose over a year or two); we haul them away ($50–$150 added); or we spread them as mulch around the rest of the landscape. Most homeowners pick option 1 or 3.',
      },
      {
        q: 'Can I plant grass over a ground stump?',
        a: 'Yes, with a caveat. Wood chips and old roots tie up nitrogen as they decompose, which can yellow new grass for the first season. Best practice: scrape off loose chips, add 4–6 inches of fresh topsoil, mix in a starter fertilizer, and seed or sod. By the second season the area is indistinguishable from surrounding lawn. If you want to plant a new tree right on top, give it a year — or grind deeper at the time of the original job.',
      },
    ],
  },
  {
    slug: 'land-clearing',
    name: 'Land & Lot Clearing',
    shortName: 'Land Clearing',
    blurb: 'Selective or full lot clearing for builders, developers, and landowners.',
    description:
      'From single-lot prep to multi-acre clearing, we work with builders and property owners to clear vegetation cleanly and efficiently — preserving specimen trees where you’d like to keep them.',
    icon: 'lucide:trees',
    faqs: [
      {
        q: 'How much does land clearing cost per acre in Central Florida?',
        a: 'Selective clearing of a lightly wooded acre typically runs $1,500–$3,500. Heavily wooded acreage with mature hardwoods, palms, and undergrowth runs $3,500–$7,500 per acre. Multi-acre commercial clearing is quoted per project — economies of scale apply. The variables: tree density, stump removal vs. grinding, debris disposal, and how much specimen-tree preservation is required. We give a written estimate after walking the site.',
      },
      {
        q: 'Do I need a permit for land clearing in Central Florida?',
        a: 'Almost always yes for any meaningful clearing. Cities and counties protect mature trees under local ordinances, especially live oaks, magnolias, and palms over certain calipers. Builders and homeowners typically need a clearing permit, a tree survey, and sometimes a mitigation plan (planting replacement trees) before clearing starts. We help navigate the permit process and document the existing canopy for the application.',
      },
      {
        q: 'Can you preserve specimen trees during land clearing?',
        a: 'Yes, and we encourage it. Selective clearing — where mature specimens are protected with root-zone fencing, careful crew routing, and pruning to keep equipment clear — is more work than mass clearing but preserves the property’s most valuable trees. We walk the site with you and tag which trees stay, which come down, and which are borderline calls. Once construction starts, those protected trees need ongoing root-zone protection; we can document the plan for your builder.',
      },
      {
        q: 'What happens to the debris from clearing?',
        a: 'Land clearing produces three streams of debris: brush (chipped on-site or hauled to a mulch facility), logs (sold as firewood, milled, or hauled away depending on species and quality), and stumps (ground in place or trucked out for landfill). We handle all three. Disposal costs are a meaningful line item — we tell you the breakdown so you can decide if any debris stays on-site.',
      },
    ],
  },
  {
    slug: 'crane-assisted-removal',
    name: 'Crane-Assisted Removal',
    shortName: 'Crane Work',
    blurb: 'For trees that are too large, too tight, or too risky to drop conventionally.',
    description:
      'When a tree is over a structure, leaning the wrong way, or wedged into a tight lot, a crane is the safest tool. We coordinate certified crane operators with our climbing crew for clean, controlled removals.',
    icon: 'lucide:construction',
    faqs: [
      {
        q: 'When does crane-assisted removal make sense over conventional?',
        a: 'When the tree is too large to rig conventionally, when it’s over a structure (house, pool, screened enclosure) and dropping pieces conventionally risks damage, when access is too tight for a bucket but a crane can reach over a roof or fence, or when speed and safety matter (post-storm leaners). For an open-yard 40-foot pine, a crane is overkill. For a 70-foot oak over a screened pool enclosure, it’s the only safe option.',
      },
      {
        q: 'How much does crane-assisted tree removal cost?',
        a: 'Crane work adds $1,500–$3,500 minimum to a conventional removal — sometimes more for larger cranes, longer setup, or extended boom reach. A full crane-assisted removal of a large hardwood over a structure typically lands $3,500–$10,000, including the crane, climbing crew, rigging, and cleanup. We coordinate certified operators with our crew so it’s one quote, one invoice, one job.',
      },
      {
        q: 'Can you use a crane in tight residential lots?',
        a: 'Often yes. Modern cranes range from compact 28-ton models that fit in driveways to 70-ton cranes with extended boom for over-the-roof picks on tight lots. We scout each site before quoting to confirm crane size, setup location, and reach. If we can’t get a crane in, we say so and propose an alternative (climbing with technical rigging, or a multi-day takedown).',
      },
      {
        q: 'Is crane work safer for my property than conventional removal?',
        a: 'Generally yes — for large trees over structures. A crane lets us pick a heavy section, lift it cleanly clear of the house or pool, and lower it to a safe area for processing. Conventional rigging requires lowering pieces by rope through the canopy, which is safe when done by trained crews but offers less margin. For ground-level brush and clear-zone trees, conventional rigging is faster and cheaper.',
      },
    ],
  },
  {
    slug: 'emergency-storm-damage',
    name: 'Emergency & Storm Response',
    shortName: 'Emergency',
    blurb: 'When a storm catches you off guard, we respond fast.',
    description:
      'Most of our work is preventive — but when something does go wrong after a storm, we respond fast. We prioritize hazardous removals, structures hit by trees, and roads or driveways blocked by debris.',
    icon: 'lucide:cloud-lightning',
    faqs: [
      {
        q: 'Are you available 24/7 for storm or tree emergencies?',
        a: 'Yes — outside business hours we respond to true emergencies: trees on structures, blocked driveways or roads, hazardous leaners over walkways. Call (321) 204-8459. During active storm events (hurricane landfall, severe summer storms), we triage by hazard: structure hits first, then access blockages, then preventive next-day work. Non-emergency requests are scheduled into the next routine window so we keep emergency capacity open.',
      },
      {
        q: 'Will my homeowners insurance cover emergency tree removal?',
        a: 'Usually yes if the tree fell on an insured structure (house, garage, fence) — your insurer typically covers removal from the structure and repair of the structure itself. A tree that fell in your yard with no structure damage is usually not covered. Trees that fell from a neighbor’s property onto yours are covered by your insurance, not theirs, in almost every Florida policy. We provide written documentation (photos, scope, invoice) formatted for insurance claims at no extra charge.',
      },
      {
        q: 'Is emergency tree work more expensive than scheduled work?',
        a: 'Yes, modestly. Emergency response involves after-hours crews, expedited scheduling, and often more complex rigging because the tree is already in a failure state. Expect 20–50% above the equivalent scheduled job rate. For active storm events, demand exceeds supply across the entire Central Florida market and prices reflect that. We post our rates honestly and don’t price-gouge — but we also don’t undercharge our crew for working at 2 AM in a hurricane.',
      },
      {
        q: 'What should I do before the crew arrives?',
        a: 'First, prioritize safety: stay clear of fallen trees and broken limbs, never approach a tree resting on power lines, call 911 if there’s active sparking. Document the damage with photos for insurance — wide shots, close-ups, structure damage. Move vehicles and outdoor furniture out of the work zone if it’s safe. If a tree is on your house, restrict access to that room. Then call us — we’ll triage by phone and dispatch.',
      },
    ],
  },
];

export const getServiceBySlug = (slug: string) => services.find((s) => s.slug === slug);
