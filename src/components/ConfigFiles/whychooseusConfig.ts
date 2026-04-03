// =============================================================================
//  whychooseus.config.ts — Edit this file to customise the Why Choose Us section
//  The component file (WhyChooseUs.tsx) should be left untouched.
// =============================================================================

export interface Feature {
  title:       string; // Short feature name shown as the row heading
  description: string; // One or two sentences explaining the feature
}

export interface WhyChooseUsConfig {
  /**
   * ── SECTION HEADING ────────────────────────────────────────────────────────
   * The bold headline shown below the "WHY CHOOSE US" label.
   */
  heading: string;

  /**
   * ── IMAGE ──────────────────────────────────────────────────────────────────
   * Path to the image shown on the right side of the section.
   * Place your image in /public/images/ and reference it like:
   *   image: '/images/your-image.jpg'
   * Recommended: tall/portrait crop, min 600×900 px, JPG or PNG.
   *
   * alt — describe what is in the image for screen readers and SEO.
   * Good alt: 'A security analyst reviewing live threat data on a monitor'
   * Bad alt:  'image' or 'photo'
   */
  image: {
    src: string;
    alt: string;
  };

  /**
   * ── FEATURES LIST ──────────────────────────────────────────────────────────
   * Each entry becomes a clickable row on the left side of the section.
   * The active row highlights and shows a progress bar before auto-advancing.
   *
   * HOW TO ADD A FEATURE:
   *   1. Copy any existing { ... } block below.
   *   2. Paste it after the last entry, inside the [ ] brackets.
   *   3. Fill in the title and description.
   *
   * HOW TO REMOVE A FEATURE:
   *   Delete the entire { ... } block for that entry.
   *   Keep at least 1 entry in the list at all times.
   *
   * RECOMMENDED: 3–4 features works best visually.
   * More than 5 will make the left column taller than the image.
   */
  features: Feature[];
}

// ─── YOUR SETTINGS — only edit below this line ────────────────────────────────

const whychooseusConfig: WhyChooseUsConfig = {

  heading: "Built for startups that can't afford downtime",

  image: {
    src: './why-choose-us-img.png',
    alt: 'A security analyst reviewing live threat data on a monitor',
  },

  features: [
    {
      title:       'AI-Powered Threat Detection',
      description: 'Our AI continuously analyzes traffic patterns and system logs to detect anomalies in real time — stopping threats before they escalate.',
    },
    {
      title:       'Automated Incident Response',
      description: 'Instant containment workflows isolate compromised systems and neutralize risks automatically, reducing response time from hours to seconds.',
    },
    {
      title:       'Enterprise-Grade Data Encryption',
      description: 'All sensitive data is protected with end-to-end encryption and zero-trust access controls to ensure maximum security and compliance.',
    },
  ],

};

export default whychooseusConfig;