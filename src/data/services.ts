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
