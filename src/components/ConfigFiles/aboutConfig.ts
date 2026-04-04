// =============================================================================
//  about.config.ts — About section settings
//  Edit this file to customise all text content in the About section.
//  The component (AboutSection.tsx) should be left untouched.
// =============================================================================

import React from 'react';
const SecurityIcon = React.lazy(() => import('@mui/icons-material/Security'));
const BoltIcon = React.lazy(() => import('@mui/icons-material/Bolt'));
const PublicIcon = React.lazy(() => import('@mui/icons-material/Public'));

// ─── TYPE DEFINITIONS ─────────────────────────────────────────────────────────

export interface StatCard {
  icon: React.LazyExoticComponent<React.ComponentType<any>>;

  /**
   * The headline number or value shown large on the card.
   * Keep it short — 2–6 characters (e.g. "120k+", "96%", "12+").
   */
  value: string;

  /**
   * Short descriptive label below the value.
   * 1–4 words recommended (e.g. "Threats Detected").
   */
  label: string;

  /**
   * Staggered entrance animation delay in seconds.
   * Increase by ~0.2s for each successive card to create a cascade effect.
   */
  delay: number;
}

export interface AboutConfig {
  /**
   * Small uppercase label shown above the main heading.
   * Typically your brand/product name with a short descriptor.
   * Example: "ABOUT CYBERPULSE"
   */
  sectionLabel: string;

  /**
   * Main heading for the section.
   * 1–2 lines recommended. Aim for 6–10 words.
   */
  heading: string;

  /**
   * Body paragraph below the heading (right column).
   * 2–3 sentences describing your product or company.
   * Appears at base/lg/xl font sizes depending on viewport.
   */
  description: string;

  /**
   * Short bullet-point features listed in a 2-column grid.
   * 4 items recommended — more will break the 2×2 layout.
   * Keep each item to 3–5 words.
   */
  features: string[];

  /**
   * Three stat cards shown at the bottom of the right column.
   * Exactly 3 items are expected to fill the 3-column grid correctly.
   */
  stats: [StatCard, StatCard, StatCard];

  /**
   * Alt text for the staff/team image on the left column.
   * Describe the image content for screen readers and SEO.
   * Example: "CyberPulse security analysts monitoring threat dashboards"
   */
  imageAlt: string;
}

// ─── YOUR SETTINGS ────────────────────────────────────────────────────────────

const aboutConfig: AboutConfig = {
  sectionLabel: "ABOUT CYBERPULSE",

  heading: "Cyber Defense Designed For Modern Startups",

  description:
    "CyberPulse is a cybersecurity monitoring platform designed for fast-growing teams. " +
    "We combine 24/7 monitoring, intelligent threat detection, and vulnerability tracking " +
    "to help startups stay protected without slowing down.",

  features: [
    "Real-time threat monitoring",
    "Automated vulnerability scans",
    "Instant security alerts",
    "Compliance tracking",
  ],

  stats: [
    {
      icon:  SecurityIcon,
      value: "120k+",
      label: "Threats Detected",
      delay: 0.2,
    },
    {
      icon:  BoltIcon,
      value: "96%",
      label: "Alert Accuracy",
      delay: 0.4,
    },
    {
      icon:  PublicIcon,
      value: "12+",
      label: "Regions Covered",
      delay: 0.6,
    },
  ],

  imageAlt: "CyberPulse security analysts monitoring threat dashboards",
};

export default aboutConfig;