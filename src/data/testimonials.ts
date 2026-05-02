// Real Google reviews for Sacred Tree Service.
// `featured: true` = surfaces on the homepage testimonials grid.
// To rotate which reviews appear on home, just toggle `featured`.
export type Testimonial = {
  quote: string;
  name: string;
  rating: number;          // 1–5
  source: 'Google' | 'Facebook' | 'Nextdoor' | 'Other';
  topic: string;           // short category label, e.g. "Mature oak care"
  featured?: boolean;
};

export const testimonials: Testimonial[] = [
  {
    quote:
      'If I could give this company 10 stars I would. I had a monster tree come down during hurricane Milton. I thought for sure it would be a month before anyone could help me. Alex came out that night and set it all up to be removed the next day.',
    name: 'Jeanine Argenti',
    rating: 5,
    source: 'Google',
    topic: 'Hurricane response',
    featured: true,
  },
  {
    quote:
      'Alex and his crew are top notch! He came out to first give us a quote and explained in detail everything he would do to preserve the integrity and look of our oaks, even down to which specific branches could get cut back. His expertise is unmatched.',
    name: 'Heather Waller',
    rating: 5,
    source: 'Google',
    topic: 'Mature oak care',
    featured: true,
  },
  {
    quote:
      "I've used them many times at this point for projects ranging from a few small trees to very large single trees and small forests of junk trees. Always love working with their kind and considerate crew. They make the job look easy and are worth every dollar. Keep their number and you'll never need another!",
    name: 'Kyle Sheppard',
    rating: 5,
    source: 'Google',
    topic: 'Repeat customer',
    featured: true,
  },
  {
    quote:
      'Most professional arborist my company has ever worked with! 10/10 pro who can climb and use cranes. They can do it all! Even massive residential trees in precarious spots.',
    name: 'Patrick Lang',
    rating: 5,
    source: 'Google',
    topic: 'Crane & complex rigging',
    featured: true,
  },
  {
    quote:
      'The beautiful old oak tree in our front yard was a big selling point when choosing our home, so I did my research when it was time to have it pruned. I wanted someone who appreciated how beautiful it is and understood my desire to keep it healthy.',
    name: 'Lenore Smith',
    rating: 5,
    source: 'Google',
    topic: 'Tree preservation',
    featured: true,
  },
  {
    quote:
      'They came out and were professional. They went above and beyond and did a great job. The trees look amazing without being butchered. This is my new company. Definitely call.',
    name: 'Gigi Horvath',
    rating: 5,
    source: 'Google',
    topic: 'Quality pruning',
    featured: true,
  },
  {
    quote:
      'Alex and his crew took down our live oak and did just as we asked. Even went above to process some of the debris we choose to keep. Listening to the crew talk and plan, I knew we were in good hands. Kind and easy to communicate with.',
    name: 'Marie',
    rating: 5,
    source: 'Google',
    topic: 'Large removal',
  },
  {
    quote:
      'Alex and his crew were meticulous and very professional. They made sure no damage was done to anything including my grass and cleaned up everything. They are truly professionals and if you are looking for a job well done, these are your guys.',
    name: 'Toni',
    rating: 5,
    source: 'Google',
    topic: 'Property protection',
  },
  {
    quote:
      'Fabulous experience — they are so knowledgeable and we are thrilled with the work they did. They also went over and above letting my son be engaged in the cleanup, letting him help pick up the little branches. He was over the moon excited to get to help.',
    name: 'Jennifer Ullrich',
    rating: 5,
    source: 'Google',
    topic: 'Family-friendly',
  },
  {
    quote:
      "Alex and his crew knew we were doing service work as a community for an elderly lady in Altamonte Springs recently. He volunteered his time, talent, and equipment to beautify and enhance this sweet lady's property through a laborious project.",
    name: 'Michael Speed',
    rating: 5,
    source: 'Google',
    topic: 'Community',
  },
  {
    quote:
      'Great job for a fair price. Alex took care of everything agreed to for the job, and made honest recommendations.',
    name: 'Gabriel Contreras',
    rating: 5,
    source: 'Google',
    topic: 'Honest pricing',
  },
  {
    quote:
      "Alex and his team did a great job removing a large pine. Prompt and right on time as scheduled. Very competitive price, great attitude with Alex and all his team. Obviously capable seeing him climb the tree, cleaned up all the debris. I couldn't be more satisfied.",
    name: 'k pyle',
    rating: 5,
    source: 'Google',
    topic: 'Pine removal',
  },
];

export const featuredTestimonials = testimonials.filter((t) => t.featured);
