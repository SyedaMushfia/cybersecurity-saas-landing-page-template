// =============================================================================
//  site.config.ts — Global site settings
//  Edit this file to set your brand identity, logo, nav links, and SEO.
// =============================================================================

import type { NavLink } from './navbarConfig';

const siteConfig = {

  /** ── BRAND ────────────────────────────────────────────────────────────────
   *  Option A (image): set `logoSrc` to the path of your logo file.
   *  Option B (text):  leave `logoSrc` as "" and set `logoText` instead.
   */
  logo: {
    src:  '/logo.webp', // set to "" to use text logo instead
    alt:  'Company logo',
    text: 'Acme',        // only shown when src is ""
  },

  /** ── NAV LINKS ─────────────────────────────────────────────────────────────
   *  Shared across the navbar and footer sitemap.
   *  Each href must match the id of a section on your page.
   */
  navLinks: [
    { label: 'Home',      href: '#home'      },
    { label: 'Services',  href: '#services'  },
    { label: 'About',     href: '#about'     },
    { label: 'Subscribe', href: '#subscribe' },
  ] satisfies NavLink[],

  /** ── SEO / META ─────────────────────────────────────────────────────────── */
  siteTitle:       'Acme Security — Enterprise-Grade Protection for Startups',
  siteDescription: 'Monitor your systems 24/7, detect incidents in real time, and stay ahead of threats.',
  brandName:       'Acme Security',

  /** ── GLOBAL CTA TARGET ─────────────────────────────────────────────────────
   *  All primary CTA buttons across the page scroll to this section.
   */
  primaryCtaHref: '#pricing-plans',
};

export default siteConfig;