// Customer-voiced FAQ — answers backed by real Google review quotes.
// Used on /faq/ for AEO (FAQPage schema), and can be sliced into service pages.
export type FaqQuote = { quote: string; name: string };
export type Faq = {
  q: string;
  /** Short synthesis used as the schema-friendly accepted answer. */
  answer: string;
  /** Real customer quotes that back up the answer. Shown on the page. */
  quotes: FaqQuote[];
};

export const faqs: Faq[] = [
  {
    q: 'Will your team show up on time?',
    answer:
      'Yes — punctuality is one of the most consistent things our customers mention in their reviews. We schedule each estimate and crew arrival, and we communicate proactively if anything shifts.',
    quotes: [
      { quote: 'Alex was on time, professional, and incredibly speedy in taking down my 20ft Mexican Palm.', name: 'Keith Montefusco' },
      { quote: 'Prompt and right on time as scheduled.', name: 'k pyle' },
    ],
  },
  {
    q: 'Do you clean up after the job?',
    answer:
      'Always. We bring our own debris hauling, sweep up chips and small branches, and walk the site with you at the end so you can confirm. Your yard should look better than we found it.',
    quotes: [
      { quote: 'They made sure no damage was done to anything including my grass and cleaned up everything.', name: 'Toni' },
      { quote: 'The team was respectful of the property and left everything clean and tidy.', name: 'Katherin Berrio' },
      { quote: 'Fast, efficient… the cleanup was exceptional.', name: 'Kayla Peterson' },
    ],
  },
  {
    q: 'Are your prices fair?',
    answer:
      'Our quotes are competitive and itemized — no hidden fees, no high-pressure upsells. Customers regularly tell us we came in under or close to other bids on the same job.',
    quotes: [
      { quote: 'Of all the people we got quotes from, theirs was definitely the best.', name: 'Michael Jones' },
      { quote: 'Very competitive price, great attitude with Alex and all his team.', name: 'k pyle' },
      { quote: 'Fairly priced, great service, and very knowledgeable.', name: 'Daniel Maldonado' },
    ],
  },
  {
    q: 'Can you handle emergency or storm-damaged trees?',
    answer:
      'Yes. Most of our work is preventive — but when something does fail in a storm, we respond fast, prioritizing trees on structures and blocked access.',
    quotes: [
      { quote: 'I had a monster tree come down during hurricane Milton. I thought for sure it would be a month before anyone could help me. Alex came out that night and set it all up to be removed the next day.', name: 'Jeanine Argenti' },
      { quote: 'Thanks Alex and team for doing a nice job on trimming up my yard to clear the lines before our next storm! Especially the big dead limb.', name: 'Bobbie Bruner' },
    ],
  },
  {
    q: 'Can you remove trees in tight or difficult spots without damaging my property?',
    answer:
      'Yes — this is where planning, climbing skill, and crane access matter most. We rig everything down piece-by-piece when needed, and protect surrounding plants, structures, and surfaces.',
    quotes: [
      { quote: 'Sacred Tree Service removed a large bird of paradise in my pool area that was in a small area difficult to work in.', name: 'Phil Biddlecome' },
      { quote: 'Alex and his team safely removed a large tree in a spot I thought was impossible.', name: 'Tim M' },
      { quote: 'I have hired them for multiple removals and trimming, including jobs overhanging our house and fences with complicated rigging.', name: 'Lux' },
    ],
  },
  {
    q: 'Do you know how to properly prune oaks and mature trees?',
    answer:
      'Mature trees are our specialty. We follow ANSI A300 pruning standards — no topping, no over-thinning. We assess each branch for structural and aesthetic impact before cutting.',
    quotes: [
      { quote: 'He explained in detail everything he would do to preserve the integrity and look of our oaks, even down to which specific branches could get cut back.', name: 'Heather Waller' },
      { quote: 'The trees look amazing without being butchered.', name: 'Gigi Horvath' },
    ],
  },
  {
    q: 'Do you do palm trees?',
    answer:
      'Yes. Florida palms have specific care needs — we work on sabal, queen, royal, washingtonia, and other common species, with the right techniques to keep them healthy.',
    quotes: [
      { quote: 'They groomed 3 of my palm trees which look new again!', name: 'Tonya Upshaw' },
      { quote: 'Our palms looked horrible before but are beautiful again. He trimmed our tree with precision and did not touch our roof or our neighbors.', name: 'Marla Satoski' },
      { quote: 'Sacred Tree Service removed our sick palm tree and grinded the stump. The guys did a great job!', name: 'Nick & Natasha Wirbel' },
    ],
  },
  {
    q: 'Do you do stump grinding?',
    answer:
      'Yes. We grind stumps 6–12 inches below grade, sweep up the chips, and leave the site ready for sod, mulch, or new plantings.',
    quotes: [
      { quote: "I recently hired Sacred Tree Service for the removal of a live oak tree and stump grinding, and I'm very satisfied with their work.", name: 'Helmuth P.' },
    ],
  },
  {
    q: 'Can you handle very large trees?',
    answer:
      'Yes — large hardwoods, pines, and complex residential removals are routine for us, including crane-assisted work where it’s the safest option.',
    quotes: [
      { quote: 'They did an amazing job taking out a huge oak tree in my back yard.', name: 'Zack Whitney' },
      { quote: 'Alex and his team did a great job removing a large pine.', name: 'k pyle' },
    ],
  },
  {
    q: 'Will you give me an honest assessment, not upsell me?',
    answer:
      'We’d rather save your tree than sell you a removal. If a tree doesn’t need to come down, we’ll tell you — and recommend the smallest scope that solves the actual problem.',
    quotes: [
      { quote: 'Alex took care of everything agreed to for the job, and made honest recommendations.', name: 'Gabriel Contreras' },
      { quote: 'Alex is extremely knowledgeable and will be straightforward with you on what he can do for you.', name: 'Cindi Vidal' },
    ],
  },
  {
    q: 'How easy is it to schedule and communicate with you?',
    answer:
      'Calls and messages reach a real person. We confirm appointments, send updates if anything moves, and follow up after the work is done.',
    quotes: [
      { quote: 'His expertise and recommendations were clearly communicated and scheduling was easy.', name: 'umi clark' },
      { quote: 'They always kept me up to date with appointment scheduling.', name: 'Quality Key' },
      { quote: 'He was always in contact with me every step of the process and followed up with me days after the work was done.', name: 'Johanna Carmona' },
    ],
  },
  {
    q: 'Are your arborists real arborists who actually care about the trees?',
    answer:
      'Yes. Sacred Tree Service is built around plant health and long-term care — certified arborists on staff handle assessments, and we operate to ANSI A300 pruning standards on every job as members of the ISA and TCIA.',
    quotes: [
      { quote: 'Sacred Tree Service goes above and beyond! They really care about the trees, your property and others property!', name: 'Erica Hall' },
      { quote: 'They actually care for their work and the organisms they are working on.', name: 'Jaylon Hamer' },
      { quote: "I chose Sacred Tree Service over other companies due to Alex's experience as a knowledgeable arborist.", name: 'Jerad Gunter' },
    ],
  },
  {
    q: 'Would your past customers hire you again?',
    answer:
      'Repeat customers are a big share of our work. People find us once and then call us for every tree they own.',
    quotes: [
      { quote: 'This is my new company. Definitely call.', name: 'Gigi Horvath' },
      { quote: "Keep their number and you'll never need another!", name: 'Kyle Sheppard' },
      { quote: 'Our first choice for all our trees and yard care.', name: 'Daniel Maldonado' },
    ],
  },
];
