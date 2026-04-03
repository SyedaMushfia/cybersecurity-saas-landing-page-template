// =============================================================================
//  footer.config.ts — Edit this file to customise the Footer
//  The component file (Footer.tsx) should be left untouched.
//
//  NOTE: Logo and nav links come from site.config.ts (they are shared with
//  the navbar). Only footer-specific content lives here.
// =============================================================================

export interface ContactItem {
  id:    string; // Internal identifier — not shown to users
  label: string; // Small label above the value, e.g. "Email"
  value: string; // The contact detail. Use \n for a line break (e.g. addresses)
  type:  'location' | 'email' | 'phone'; // Controls which icon is shown — locked
}

export interface SocialLink {
  id:       string; // Internal identifier — not shown to users
  label:    string; // Screen reader label, e.g. "Follow us on Instagram"
  href:     string; // Full URL to your profile, e.g. 'https://instagram.com/yourhandle'
  platform: 'instagram' | 'linkedin' | 'facebook' | 'pinterest'; // Controls which icon is shown — locked
}

export interface FooterLinkGroup {
  heading: string;   // Column heading, e.g. "Product" or "Company"
  links: {
    label: string;   // Link text shown to the user
    href:  string;   // Destination — use '#section-id' for page sections, or a full URL
  }[];
}

export interface FooterConfig {
  /**
   * ── BRAND DESCRIPTION ──────────────────────────────────────────────────────
   * Short paragraph shown below the logo in the first column.
   * Keep it to 2–3 sentences — space is limited.
   */
  brandDescription: string;

  /**
   * ── SOCIAL LINKS ───────────────────────────────────────────────────────────
   * Each entry renders as a circular icon button.
   * Set href to your actual profile URL.
   * To hide a platform, remove its entry from the array.
   * To show a platform, add an entry with the correct `platform` value.
   *
   * Supported platforms (controls the icon shown):
   *   'instagram' | 'linkedin' | 'facebook' | 'pinterest'
   */
  socialLinks: SocialLink[];

  /**
   * ── LINK COLUMNS ───────────────────────────────────────────────────────────
   * Each entry renders as a column with a heading and a list of links.
   * The footer supports 2 link columns (columns 2 and 3 of the 4-column grid).
   *
   * INTERNAL LINKS (page sections):
   *   Use '#section-id' — clicking will smooth-scroll to that section.
   *   Example: { label: 'Pricing', href: '#pricing-plans' }
   *
   * EXTERNAL LINKS (other pages or sites):
   *   Use a full URL — opens in a new tab automatically.
   *   Example: { label: 'Privacy Policy', href: '/privacy' }
   *            { label: 'Blog', href: 'https://blog.yoursite.com' }
   */
  linkColumns: FooterLinkGroup[];

  /**
   * ── CONTACT ITEMS ──────────────────────────────────────────────────────────
   * Shown in the 4th column. Supports location, email, and phone.
   * Each type maps to a fixed icon (locked — part of the design).
   *
   * ADDRESS (multi-line): use \n between lines:
   *   value: 'Level 12, Nova Tech Tower\n451 Orion Avenue'
   *
   * EMAIL: use your actual support or contact email.
   * PHONE: include country code for international visitors.
   *
   * To hide a contact item, remove its entry from the array.
   */
  contactItems: ContactItem[];

  /**
   * ── COPYRIGHT ──────────────────────────────────────────────────────────────
   * Shown at the very bottom of the footer.
   * Tip: use the current year and your legal company name.
   * Example: '© 2025 Acme Security Inc. All rights reserved.'
   */
  copyright: string;
}

// ─── YOUR SETTINGS — only edit below this line ────────────────────────────────

const footerConfig: FooterConfig = {

  brandDescription:
    'Autonomous security monitoring for modern startups. Real-time threat detection, incident response, and vulnerability monitoring — all from a single intelligent platform.',

  socialLinks: [
    { id: 'instagram', label: 'Follow us on Instagram', href: 'https://instagram.com/yourhandle',  platform: 'instagram' },
    { id: 'linkedin',  label: 'Connect on LinkedIn',    href: 'https://linkedin.com/company/your', platform: 'linkedin'  },
    { id: 'facebook',  label: 'Follow us on Facebook',  href: 'https://facebook.com/yourpage',     platform: 'facebook'  },
    { id: 'pinterest', label: 'Follow us on Pinterest', href: 'https://pinterest.com/yourhandle',  platform: 'pinterest' },
  ],

  linkColumns: [
    {
      heading: 'Product',
      links: [
        { label: 'Features',               href: '#services'      },
        { label: 'Live Monitoring',         href: '#services'      },
        { label: 'Incident Response',       href: '#services'      },
        { label: 'Vulnerability Scanner',   href: '#services'      },
        { label: 'Security Dashboard',      href: '#services'      },
        { label: 'Pricing',                 href: '#pricing-plans' },
      ],
    },
    {
      heading: 'Company',
      links: [
        { label: 'About Us',        href: '#about'           },
        { label: 'Careers',         href: '/careers'         }, // create this page or remove this link
        { label: 'Contact',         href: '#subscribe'       },
        { label: 'Privacy Policy',  href: '/privacy-policy'  }, // create this page or remove this link
        { label: 'Terms of Service', href: '/terms'          }, // create this page or remove this link
      ],
    },
  ],

  contactItems: [
    {
      id:    'location',
      label: 'Location',
      value: 'Level 12, Nova Tech Tower\n451 Orion Avenue',
      type:  'location',
    },
    {
      id:    'email',
      label: 'Email',
      value: 'support@yourcompany.com',
      type:  'email',
    },
    {
      id:    'phone',
      label: 'Phone',
      value: '+1 (555) 019-2847',
      type:  'phone',
    },
  ],

  copyright: `© ${new Date().getFullYear()} Acme Security Inc. All rights reserved.`,

};

export default footerConfig;