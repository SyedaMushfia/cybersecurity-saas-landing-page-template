// =============================================================================
//  LiveMetricsSection.tsx
//  To customise the text in this section, edit LIVE_METRICS_CONFIG below.
//  Everything else should be left untouched.
// =============================================================================

import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import LiveMetrics from './LiveMetrics/LiveMetrics';

// ─── CLIENT CUSTOMIZATION — Edit only this section ────────────────────────────

const LIVE_METRICS_CONFIG = {
  /** The small uppercase label above the main heading */
  eyebrow: 'Live Metrics',

  /** The main bold heading */
  heading: 'Your Security, Measured in Real Time',

  /** The supporting description below the heading */
  subheading: 'Track threats stopped, vulnerabilities scanned, and servers secured — all in real time.',
};

// ─── END OF CLIENT CUSTOMIZATION — Do not edit below this line ───────────────

/**
 * LiveMetricsSection
 *
 * Wrapper section for the LiveMetrics animated component.
 * Handles scroll-triggered reveal and renders the section header text.
 *
 * SEO notes:
 * - <section> is labelled via aria-labelledby pointing to the <h2> so
 *   screen readers and crawlers can identify this landmark correctly.
 * - The eyebrow label is aria-hidden — the <h2> is the real section title.
 */
const LiveMetricsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  // Trigger the reveal animation once the section enters the viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      aria-labelledby="live-metrics-heading"
      className="relative py-12 sm:py-16 md:py-14"
    >
      {/* Section header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="mb-10 sm:mb-12 md:mb-16 text-center relative z-10"
      >
        {/* Decorative eyebrow label — hidden from assistive tech since the h2 is the real label */}
        <p
          aria-hidden="true"
          className="text-cyan-400 text-xs sm:text-sm font-medium tracking-wider uppercase mb-3 sm:mb-4"
        >
          {LIVE_METRICS_CONFIG.eyebrow}
        </p>

        <h2
          id="live-metrics-heading"
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white px-4 mb-2"
        >
          {LIVE_METRICS_CONFIG.heading}
        </h2>

        <p className="text-gray-300 text-sm sm:text-base md:text-lg px-4 max-w-2xl mx-auto">
          {LIVE_METRICS_CONFIG.subheading}
        </p>
      </motion.div>

      {/* Animated radar/metrics component — customised separately */}
      <LiveMetrics />
    </section>
  );
};

export default LiveMetricsSection;