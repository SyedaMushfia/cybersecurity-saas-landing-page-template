// =============================================================================
//  services.config.ts — Services section settings
//  ⚠️  Only edit the text content below. Card background image, colors,
//      animations, and layout are part of the template theme and are locked.
// =============================================================================

import React from 'react';
const VisibilityOutlinedIcon = React.lazy(() => import('@mui/icons-material/VisibilityOutlined'));
const ShieldOutlinedIcon = React.lazy(() => import('@mui/icons-material/ShieldOutlined'));
const StorageIcon = React.lazy(() => import('@mui/icons-material/Storage'));
const NotificationsOutlinedIcon = React.lazy(() => import('@mui/icons-material/NotificationsOutlined'));
const SearchOutlinedIcon = React.lazy(() => import('@mui/icons-material/SearchOutlined'));

export interface ServiceCard {
  icon: React.LazyExoticComponent<React.ComponentType<any>>;

  /** Short title shown on the card face (4–6 words recommended). */
  title: string;

  /**
   * Description revealed on hover. Keep to 2–3 sentences.
   * Longer text may overflow the card on smaller screens.
   */
  description: string;
}

const servicesConfig = {
  /** ── SECTION HEADER ─────────────────────────────────────────────────────────
   *  `heading`  — The large h2 title above the cards.
   *  `subtext`  — Supporting paragraph beneath the heading.
   *               1–2 sentences, max ~20 words for clean layout.
   */
  heading: 'Security Services Built for Startups',
  subtext:
    'Everything you need to detect threats, respond instantly, and stay ' +
    'protected — without a full security team.',

  /** ── SERVICE CARDS ──────────────────────────────────────────────────────────
   *  Add, remove, or reorder cards freely. The grid adjusts automatically.
   *  Odd totals (3, 5) center-align the last row — best kept at 3 or 6 cards.
   *
   *  `icon`        — Any icon from the Material-UI Icon library.
   *  `title`       — Shown on the card face. Keep short.
   *  `description` — Shown on hover. 2–3 sentences max.
   */
  cards: [
    {
      icon: VisibilityOutlinedIcon,
      title: '24/7 Infrastructure Monitoring',
      description:
        'Continuous monitoring of your entire infrastructure with real-time alerts and automated threat detection to keep your systems secure around the clock.',
    },
    {
      icon: ShieldOutlinedIcon,
      title: 'Incident Response',
      description:
        'Rapid incident response protocols that minimize damage and downtime. Our team identifies, contains, and resolves security threats immediately.',
    },
    {
      icon: StorageIcon,
      title: 'Log Analysis',
      description:
        'Advanced log analysis and correlation to identify suspicious patterns, track user behavior, and maintain comprehensive audit trails for compliance.',
    },
    {
      icon: NotificationsOutlinedIcon,
      title: 'Smart Alerting',
      description:
        'Intelligent alert system that filters noise and prioritizes critical threats. Get notified only when it matters, with actionable insights.',
    },
    {
      icon: SearchOutlinedIcon,
      title: 'Vulnerability Scanning',
      description:
        'Automated vulnerability assessments that scan your infrastructure for weaknesses before attackers find them. Includes detailed remediation guidance.',
    },
  ] satisfies ServiceCard[],
};

export default servicesConfig;