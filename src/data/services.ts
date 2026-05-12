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
  },
  {
    slug: 'plant-health-care',
    name: 'Plant Health Care',
    shortName: 'Plant Health',
    blurb: 'Fertilization, pest, and disease care to keep the trees you love thriving.',
    description:
      'Healthy trees give back decades of shade, beauty, and property value. Our plant health care program includes deep-root fertilization, pest scouting, and disease treatment — with priority on Florida-specific concerns like lethal bronzing and oak decline.',
    icon: 'lucide:leaf',
  },
  {
    slug: 'arborist-consulting',
    name: 'Arborist Consulting & Risk Assessment',
    shortName: 'Consulting',
    blurb: 'ISA Certified Arborist evaluations, reports, and tree risk assessments.',
    description:
      'Pre-purchase tree inspections, insurance and HOA reports, and tree risk evaluations conducted by ISA Certified Arborists — with documented findings you can share with stakeholders.',
    icon: 'lucide:clipboard-check',
  },
  {
    slug: 'cabling-bracing',
    name: 'Cabling & Bracing',
    shortName: 'Cabling',
    blurb: 'Structural support that gives strong-but-vulnerable trees more good years.',
    description:
      'Co-dominant stems, weak branch attachments, and old wounds can often be reinforced with steel cabling or bracing rods. We assess every candidate tree to make sure support hardware will meaningfully extend its safe, healthy life.',
    icon: 'lucide:link-2',
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
  },
  {
    slug: 'tree-removal',
    name: 'Tree Removal & Replanting',
    shortName: 'Removal',
    blurb: 'Thoughtful removals as part of a healthy landscape — and we replant where you want.',
    description:
      'Removals happen for good reasons: a tree has reached the end of its safe life, a property is being reshaped, or a tree has outgrown its space. Our ISA Certified Arborists assess every removal carefully, and we’ll always tell you when a tree is worth saving. Where you’d like, we replant — keeping the cycle going.',
    icon: 'lucide:tree-deciduous',
  },
  {
    slug: 'stump-grinding',
    name: 'Stump Grinding',
    shortName: 'Stumps',
    blurb: 'Grind stumps below grade so you can replant, resod, or rebuild.',
    description:
      'We grind stumps 6–12 inches below grade, sweep up the chips, and leave the site ready for sod, mulch, or new plantings. Fast turnaround, no big machinery ruts, no surprises.',
    icon: 'lucide:circle-dot',
  },
  {
    slug: 'land-clearing',
    name: 'Land & Lot Clearing',
    shortName: 'Land Clearing',
    blurb: 'Selective or full lot clearing for builders, developers, and landowners.',
    description:
      'From single-lot prep to multi-acre clearing, we work with builders and property owners to clear vegetation cleanly and efficiently — preserving specimen trees where you’d like to keep them.',
    icon: 'lucide:trees',
  },
  {
    slug: 'crane-assisted-removal',
    name: 'Crane-Assisted Removal',
    shortName: 'Crane Work',
    blurb: 'For trees that are too large, too tight, or too risky to drop conventionally.',
    description:
      'When a tree is over a structure, leaning the wrong way, or wedged into a tight lot, a crane is the safest tool. We coordinate certified crane operators with our climbing crew for clean, controlled removals.',
    icon: 'lucide:construction',
  },
  {
    slug: 'emergency-storm-damage',
    name: 'Emergency & Storm Response',
    shortName: 'Emergency',
    blurb: 'When a storm catches you off guard, we respond fast.',
    description:
      'Most of our work is preventive — but when something does go wrong after a storm, we respond fast. We prioritize hazardous removals, structures hit by trees, and roads or driveways blocked by debris.',
    icon: 'lucide:cloud-lightning',
  },
];

export const getServiceBySlug = (slug: string) => services.find((s) => s.slug === slug);
