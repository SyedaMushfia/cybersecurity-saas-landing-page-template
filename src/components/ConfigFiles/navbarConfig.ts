// =============================================================================
//  navbar.config.ts — Navbar-specific settings
//  Logo and nav links are in site.config.ts (shared with footer and other components).
//  Only edit this for navbar-specific overrides.
// =============================================================================

export interface NavLink {
  label: string;
  href:  string;
}

export interface NavbarConfig {
  /** ── CTA BUTTON ─────────────────────────────────────────────────────────────
   *  The call-to-action button in the top-right of the navbar.
   *  `ctaHref` defaults to `primaryCtaHref` in site.config.ts if left empty.
   */
  ctaShow: boolean; // set to false to hide the button entirely
  ctaText: string;
  ctaHref: string;  // leave as "" to fall back to site.config.primaryCtaHref
}

const navbarConfig: NavbarConfig = {
  ctaShow: true,
  ctaText: 'Get Started',
  ctaHref: '',       // uses primaryCtaHref from site.config.ts
};

export default navbarConfig;