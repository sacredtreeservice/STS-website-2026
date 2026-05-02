// Sample testimonial structure — replace these with real Google / Facebook
// reviews. Keep `quote` under ~200 chars for clean cards.
export type Testimonial = {
  quote: string;
  name: string;
  location: string;
  rating: number;          // 1–5
  source: 'Google' | 'Facebook' | 'Nextdoor' | 'Other';
  date: string;            // ISO yyyy-mm-dd or human-readable
  job?: string;            // optional — e.g. "Live oak pruning"
};

// TODO(STS): Swap these placeholders with real reviews. The component will
// happily render any number — keep 4–6 visible for best layout.
export const testimonials: Testimonial[] = [
  {
    quote:
      'Alex came out the same day for an estimate, walked us through the whole job, and his crew left the yard cleaner than they found it. Honest pricing, no upsell.',
    name: 'M. Rodriguez',
    location: 'Winter Park, FL',
    rating: 5,
    source: 'Google',
    date: '2026-04-18',
    job: 'Live oak pruning + small removal',
  },
  {
    quote:
      'They actually told me one of my trees didn’t need to come down — they pruned it instead and it looks great. Hard to find that kind of honesty in tree services.',
    name: 'J. Patel',
    location: 'Oviedo, FL',
    rating: 5,
    source: 'Google',
    date: '2026-03-22',
    job: 'Tree risk assessment + selective pruning',
  },
  {
    quote:
      'Took a giant water oak out from over our pool without dropping a single piece on the deck. Insurance, professionalism, all of it. We’ll use them again.',
    name: 'D. Williams',
    location: 'Apopka, FL',
    rating: 5,
    source: 'Google',
    date: '2026-02-10',
    job: 'Crane-assisted removal',
  },
  {
    quote:
      'Sacred Tree Service handled our palms and oaks before hurricane season. Super communicative, on time, fair price. Highly recommend.',
    name: 'K. Nguyen',
    location: 'Lake Mary, FL',
    rating: 5,
    source: 'Google',
    date: '2026-01-15',
    job: 'Pre-season pruning',
  },
];
