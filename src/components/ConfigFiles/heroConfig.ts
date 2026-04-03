// =============================================================================
//  hero.config.ts — Hero section settings
//  ⚠️  Only edit the text content below. Colors, animations, background image,
//      and visual effects are part of the template theme and are locked.
// =============================================================================

const heroConfig = {
  /** ── HEADLINE ───────────────────────────────────────────────────────────────
   *  Main heading shown large in the centre of the hero.
   *  `headlinePrimary` is the first line (full opacity).
   *  `headlineAccent`  is the second line (slightly dimmed — keeps the
   *                    template's typographic rhythm intact).
   *  Keep both lines short — aim for 4–6 words each for best layout.
   */
  headlinePrimary: 'Enterprise-Grade Security',
  headlineAccent:  'for Growing Startups',

  /** ── SUBTEXT ────────────────────────────────────────────────────────────────
   *  Supporting paragraph beneath the headline.
   *  1–2 sentences recommended. Long paragraphs will overflow on mobile.
   */
  subtext:
    'Monitor your systems 24/7, detect incidents in real time, and stay ' +
    'ahead of threats — without building a full security team.',

  /** ── CTA BUTTON ─────────────────────────────────────────────────────────────
   *  Label on the primary call-to-action button in the hero.
   *  The button scrolls to `primaryCtaHref` defined in site.config.ts —
   *  change the target there, not here.
   */
  ctaText: 'Start Free Trial',
};

export default heroConfig;