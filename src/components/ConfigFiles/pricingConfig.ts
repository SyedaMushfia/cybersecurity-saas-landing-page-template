// =============================================================================
//  pricing.config.ts — Edit this file to customise the Pricing Plans section
//  The component file (PricingPlans.tsx) should be left untouched.
// =============================================================================

export interface PricingPlan {
  id:          string;   // Unique identifier — used internally, not shown to users
  name:        string;   // Plan name shown on the card, e.g. "Starter"
  subtitle:    string;   // Short description shown below the plan name
  price:       number;   // Monthly price as a number — do not include the $ sign
  icon:        string;   // Path to the plan icon image (see icon tips below)
  features:    string[]; // List of features shown in the features box
  highlighted?: boolean; // Set to true on ONE plan to give it extra visual weight (the recommended plan)

  /**
   * CTA BUTTON LINK — Where "Choose Plan" takes the user.
   *
   * While you're setting up the page, leave this as '#subscribe' (or whichever
   * section has your contact / waitlist form) so the button scrolls there.
   *
   * Once you have a payment provider set up, replace it with your checkout URL:
   *   Stripe:        'https://buy.stripe.com/your-link'
   *   Lemon Squeezy: 'https://your-store.lemonsqueezy.com/checkout/...'
   *   Paddle:        'https://buy.paddle.com/product/...'
   *
   * External URLs (starting with https://) open in a new tab automatically.
   * Internal section links (starting with #) scroll smoothly to that section.
   */
  ctaHref: string;
}

export interface PricingConfig {
  /**
   * ── SECTION HEADING ────────────────────────────────────────────────────────
   * The bold headline shown above the pricing cards.
   */
  heading: string;

  /**
   * ── BILLING PERIOD LABEL ───────────────────────────────────────────────────
   * The small text shown next to the price, e.g. "/Per Month" or "/Per Year".
   */
  billingLabel: string;

  /**
   * ── PRICING PLANS ──────────────────────────────────────────────────────────
   * Each entry renders as one pricing card.
   *
   * RECOMMENDED: 3 plans works best for this layout (Starter / Pro / Enterprise).
   * Using 2 or 4 plans will still work but may affect the visual balance.
   *
   * HIGHLIGHTED PLAN:
   *   Set highlighted: true on the plan you want to visually emphasise
   *   (typically the middle / most popular plan). Only set this on ONE plan.
   *
   * ICON TIPS:
   *   - Place icons in /public/images/pricing/
   *   - Reference them as: icon: '/images/pricing/starter.png'
   *   - Recommended: 40×40 px, transparent PNG or SVG
   *
   * HOW TO ADD A PLAN:
   *   Copy any { ... } block and paste it after the last entry.
   *   Give it a unique `id`.
   *
   * HOW TO REMOVE A PLAN:
   *   Delete the entire { ... } block for that plan.
   */
  plans: PricingPlan[];
}

// ─── YOUR SETTINGS — only edit below this line ────────────────────────────────

const pricingConfig: PricingConfig = {

  heading:      'Pricing Built For Growing Startups',
  billingLabel: '/Per Month',

  plans: [
    {
      id:       'starter',
      name:     'Starter',
      subtitle: 'For early-stage startups',
      price:    49,
      icon:     '/security-shield.webp',
      ctaHref:  '#subscribe', // Replace with your Stripe / checkout URL when ready
      features: [
        '24/7 system monitoring',
        'Basic incident detection',
        'Centralized log collection',
        'Standard alerting',
        'Weekly vulnerability scans',
        'Email support',
      ],
    },
    {
      id:          'pro',
      name:        'Pro',
      subtitle:    'For growing SaaS teams',
      price:       149,
      icon:        '/radar.webp',
      highlighted: true,      // This plan gets extra visual emphasis — the recommended plan
      ctaHref:     '#subscribe', // Replace with your Stripe / checkout URL when ready
      features: [
        'Everything in Starter',
        'Real-time log analytics',
        'Smart alert prioritization',
        'Security health dashboard',
        'Slack / webhook alerts',
        'Priority support',
      ],
    },
    {
      id:       'enterprise',
      name:     'Enterprise',
      subtitle: 'For high-security environments',
      price:    249,
      icon:     '/network.webp',
      ctaHref:  '#subscribe', // Replace with your Stripe / checkout URL when ready
      features: [
        'Everything in Pro',
        'Dedicated incident response',
        'Custom alert rules',
        'Compliance-ready reporting',
        'Extended log retention',
        'SLA & uptime guarantees',
      ], 
    },
  ],

};

export default pricingConfig;