// =============================================================================
//  trustedLogos.config.ts — Trusted Logos section settings
//  Edit this file to customise the logos shown in the social-proof strip.
//  The component (TrustedLogos.tsx) should be left untouched.
// =============================================================================

export interface BrandLogo {
  /**
   * Unique identifier for the logo entry.
   * Used as the React key — must be unique across all items.
   */
  id: string;

  /**
   * Full company / brand name.
   * Used as the <img> alt text for screen readers and SEO crawlers.
   * Be descriptive: prefer "Salford University" over "Salford".
   */
  name: string;

  /**
   * Path to the logo image file.
   * - Place your logo files in the /public folder of your project.
   * - Use absolute public paths (e.g. "/logos/acme.png"), NOT relative paths.
   * - Recommended formats: SVG (best) or PNG with a transparent background.
   * - Recommended size: ~200 × 80 px, optimised for web (< 30 KB each).
   */
  imagePath: string;
}

export interface TrustedLogosConfig {
  /**
   * Heading shown above the logo strip.
   * Keep it short — one line ideally.
   * This text is also used in the section's aria-label for SEO and accessibility.
   */
  heading: string;

  /**
   * The list of brand logos to display.
   * Add, remove, or reorder entries freely.
   * Aim for 4–8 logos — fewer looks sparse; more clutters the strip.
   */
  logos: BrandLogo[];

  /**
   * How many seconds one full scroll cycle takes.
   * Lower = faster scroll. Default: 20.
   * Increase this if you have many logos so each one stays visible longer.
   */
  scrollDuration: number;
}

// ─── YOUR SETTINGS ────────────────────────────────────────────────────────────

const trustedlogosConfig: TrustedLogosConfig = {
  heading: 'Trusted by over 500 startups',

  logos: [
    { id: '1', name: 'MAQ Software',       imagePath: '/brand-logo1.webp' },
    { id: '2', name: 'Venture',            imagePath: '/brand-logo2.webp' },
    { id: '3', name: 'Salford University', imagePath: '/brand-logo3.webp' },
    { id: '4', name: 'Matrix Technology',  imagePath: '/brand-logo4.webp' },
    { id: '5', name: 'Xantrip',            imagePath: '/brand-logo5.webp' },
  ],

  scrollDuration: 20,
};

export default trustedlogosConfig;