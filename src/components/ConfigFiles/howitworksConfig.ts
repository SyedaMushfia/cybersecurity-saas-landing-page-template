// =============================================================================
//  howitworks.config.ts — "How It Works" section settings
//  ⚠️  Only edit the text content below. Colors, SVG path, animations, and
//      layout are part of the template theme and are locked.
// =============================================================================

export interface Step {
  /** Short title shown above the description (4–6 words recommended). */
  title: string;

  /**
   * Body text for this step. 2–3 sentences max.
   * Longer text may overlap neighbouring steps on the desktop SVG layout.
   */
  description: string;
}

const howitworksConfig = {
  /** ── SECTION HEADER ─────────────────────────────────────────────────────────
   *  `heading` — Large h2 title above the steps.
   *  `subtext` — Supporting paragraph beneath the heading.
   *              Keep to 1–2 sentences for clean layout across breakpoints.
   */
  heading: 'Secure Your Startup In Minutes — Step-By-Step',
  subtext:
    'Connect your infrastructure, stream security signals in real time, ' +
    'and let CyberPulse detect threats before they become incidents.',

  /** ── STEPS ──────────────────────────────────────────────────────────────────
   *  Exactly 3 steps are supported — the SVG path and node positions are
   *  fixed to three waypoints. Do not add or remove steps.
   *
   *  Order: steps[0] = Step 1 (left), steps[1] = Step 2 (centre),
   *         steps[2] = Step 3 (right).
   */
  steps: [
    {
      title: 'Connect Your Stack',
      description:
        "Plug CyberPulse into your startup's infrastructure in minutes. " +
        'Connect cloud services, servers, web apps, and logs with secure integrations.',
    },
    {
      title: 'Monitor Everything 24/7',
      description:
        'We continuously monitor your infrastructure, services, and traffic — ' +
        'even while your team sleeps. All activity becomes visible in one command dashboard.',
    },
    {
      title: 'Fix & Stay Secure',
      description:
        'When threats appear, CyberPulse prioritizes alerts and guides your response. ' +
        'Track incidents, reduce noise, and patch vulnerabilities before attackers exploit them.',
    },
  ] as [Step, Step, Step], // exactly 3 — do not change the tuple type
};

export default howitworksConfig;