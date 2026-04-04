// =============================================================================
//  testimonials.config.ts — Edit this file to customise the Testimonials section
//  The component file (Testimonials.tsx) should be left untouched.
// =============================================================================

export interface Testimonial {
  id:     number; // Unique number for each entry — must not be repeated
  quote:  string; // The testimonial text
  name:   string; // Full name of the person
  title:  string; // Job title and company, e.g. "CTO, Acme Inc"
  image:  string; // Path to the person's profile photo (see image tips below)
  rating: number; // Star rating — whole number from 1 to 5
}

export interface TestimonialsConfig {
  /**
   * ── SECTION HEADING ────────────────────────────────────────────────────────
   * The main heading shown above the testimonials carousel.
   */
  heading: string;

  /**
   * ── TESTIMONIALS LIST ──────────────────────────────────────────────────────
   * Add one object per testimonial. The carousel handles any number of entries
   * automatically — add 3 or add 30, it all works.
   *
   * HOW TO ADD A TESTIMONIAL:
   *   1. Copy any existing { ... } block below.
   *   2. Paste it after the last entry, inside the [ ] brackets.
   *   3. Fill in the quote, name, title, image, and rating.
   *   4. Give it a unique `id` (just increment the last one).
   *
   * HOW TO REMOVE A TESTIMONIAL:
   *   Delete the entire { ... } block for that entry.
   *   Keep at least 1 entry in the list at all times.
   *
   * IMAGE TIPS:
   *   - Place photos in /public/images/testimonials/
   *   - Reference them as: image: '/images/testimonials/jane-doe.jpg'
   *   - Recommended size: 96×96 px, square crop, JPG or PNG
   *   - No photo? Use an auto-generated avatar as a placeholder:
   *     image: 'https://ui-avatars.com/api/?name=Jane+Doe&background=0d1b2e&color=9CD5F0'
   */
  testimonials: Testimonial[];
}

// ─── YOUR SETTINGS — only edit below this line ────────────────────────────────

const testimonialsConfig: TestimonialsConfig = {

  heading: 'What Our Clients Are Saying',

  testimonials: [
    {
      id:     1,
      quote:  'The 24/7 monitoring and real-time alerts saved us from multiple potential breaches. CyberPulse feels like having a full security team in one dashboard.',
      name:   'Lina Mathew',
      title:  'CTO, NovaTech',
      image:  '/testimonial-img3.webp',
      rating: 5,
    },
    {
      id:     2,
      quote:  'I love how intuitive the dashboard is. We get instant visibility into our vulnerabilities and can respond immediately.',
      name:   'James Smith',
      title:  'Founder, CloudStream',
      image:  '/testimonial-img1.webp',
      rating: 5,
    },
    {
      id:     3,
      quote:  'CyberPulse transformed how we approach security. The AI alerts and log intelligence are game-changers for a small team like ours.',
      name:   'Sophie Kim',
      title:  'Head of DevOps, ByteWave',
      image:  '/testimonial-img5.webp',
      rating: 5,
    },
    {
      id:     4,
      quote:  "Within the first week, CyberPulse flagged a misconfigured S3 bucket we'd missed for months. The setup took under 10 minutes.",
      name:   'Marcus Osei',
      title:  'Lead Engineer, Stacklify',
      image:  '/testimonial-img2.webp',
      rating: 5,
    },
    {
      id:     5,
      quote:  'Our compliance audits used to take days. Now CyberPulse generates the reports automatically and we sail through every review.',
      name:   'Priya Nair',
      title:  'VP Engineering, Orbiton',
      image:  '/testimonial-img4.webp',
      rating: 5,
    },
  ],
};

export default testimonialsConfig;