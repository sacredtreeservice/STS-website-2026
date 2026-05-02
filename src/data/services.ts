export type Service = {
  slug: string;
  name: string;
  shortName: string;
  blurb: string;
  description: string;
  icon: string;
  faqs?: { q: string; a: string }[];
};

export const services: Service[] = [
  {
    slug: 'tree-removal',
    name: 'Tree Removal',
    shortName: 'Removal',
    blurb: 'Safe, efficient tree removal — from backyard hazards to large-scale lot clearing.',
    description:
      'Our ISA Certified Arborists assess every removal for safety, access, and environmental impact before a saw ever touches the trunk. We handle hazardous, leaning, dead, and diseased trees across Central Florida with the right rigging, climbers, and equipment for the job.',
    icon: 'lucide:axe',
  },
  {
    slug: 'tree-pruning',
    name: 'Tree Pruning & Trimming',
    shortName: 'Pruning',
    blurb: 'Pruning that protects long-term tree health — not just shape.',
    description:
      'Proper pruning extends a tree’s life, reduces storm risk, and keeps your property safer. We follow ANSI A300 standards: structural pruning for young trees, crown cleaning and reduction for mature canopies, never topping.',
    icon: 'lucide:scissors',
  },
  {
    slug: 'stump-grinding',
    name: 'Stump Grinding',
    shortName: 'Stumps',
    blurb: 'Grind stumps below grade so you can replant, resod, or rebuild.',
    description:
      'We grind stumps 6–12 inches below grade, sweep up the chips, and leave the site ready for sod, mulch, or new plantings. Fast turnaround, no big machinery ruts, no surprises.',
    icon: 'lucide:tree-deciduous',
  },
  {
    slug: 'emergency-storm-damage',
    name: 'Emergency & Storm Damage',
    shortName: 'Emergency',
    blurb: 'Hurricane, lightning, or wind damage — we respond fast.',
    description:
      'Storm-damaged trees need immediate, careful work. We prioritize hazardous removals, structures hit by trees, and roads or driveways blocked by debris. Available for emergency response across Central Florida during and after storm events.',
    icon: 'lucide:cloud-lightning',
  },
  {
    slug: 'crane-assisted-removal',
    name: 'Crane-Assisted & Hazardous Removal',
    shortName: 'Crane Work',
    blurb: 'For trees too dangerous, too large, or too tight to drop conventionally.',
    description:
      'When a tree is over a structure, leaning the wrong way, or wedged into a tight lot, a crane is the safest tool. We coordinate certified crane operators with our climbing crew for clean, controlled removals.',
    icon: 'lucide:construction',
  },
  {
    slug: 'palm-tree-services',
    name: 'Palm Tree Services',
    shortName: 'Palms',
    blurb: 'Pruning, removal, and care for Florida palms — sabal, queen, royal, and more.',
    description:
      'Florida palms have specific care needs — improper pruning weakens them and accelerates decline. Our crews are trained on sabal palmetto, queen, royal, washingtonia, and other common species, with the right techniques to keep them healthy.',
    icon: 'lucide:palmtree',
  },
  {
    slug: 'cabling-bracing',
    name: 'Cabling & Bracing',
    shortName: 'Cabling',
    blurb: 'Structural support to save trees with weak unions or split risk.',
    description:
      'Co-dominant stems, weak branch attachments, and old wounds can be reinforced with steel cabling or bracing rods. We assess every candidate tree to determine if support hardware will meaningfully extend its safe life.',
    icon: 'lucide:link-2',
  },
  {
    slug: 'land-clearing',
    name: 'Land & Lot Clearing',
    shortName: 'Land Clearing',
    blurb: 'Selective or full lot clearing for builders, developers, and landowners.',
    description:
      'From single-lot prep to multi-acre clearing, we work with builders and property owners to remove vegetation cleanly and efficiently — preserving specimen trees where requested.',
    icon: 'lucide:trees',
  },
  {
    slug: 'plant-health-care',
    name: 'Plant Health Care',
    shortName: 'Health Care',
    blurb: 'Fertilization, pest, and disease management for the trees you want to keep.',
    description:
      'Mature, healthy trees raise property value and provide decades of shade. Our plant health care program includes deep-root fertilization, pest scouting, and disease treatment — with priority on Florida-specific concerns like lethal bronzing and oak decline.',
    icon: 'lucide:leaf',
  },
  {
    slug: 'arborist-consulting',
    name: 'Arborist Consulting & Risk Assessment',
    shortName: 'Consulting',
    blurb: 'ISA Certified Arborist evaluations, reports, and risk assessments.',
    description:
      'Pre-purchase tree inspections, insurance and HOA reports, post-storm assessments, and tree risk evaluations conducted by ISA Certified Arborists with documented findings you can share with stakeholders.',
    icon: 'lucide:clipboard-check',
  },
];

export const getServiceBySlug = (slug: string) => services.find((s) => s.slug === slug);
