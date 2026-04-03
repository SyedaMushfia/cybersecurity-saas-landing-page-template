// =============================================================================
//  BackToTop.tsx — Floating back-to-top button
//  Appears after the user scrolls down, disappears at the top.
//  No config needed — this component has no client-editable text.
//  Drop it anywhere in App.tsx / Layout.tsx — it is position:fixed.
// =============================================================================

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// ─── Locked constants ─────────────────────────────────────────────────────────

/** Pixels scrolled before the button appears */
const SCROLL_THRESHOLD = 400;

// ─── BackToTop ────────────────────────────────────────────────────────────────
const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  // Show / hide based on scroll position
  useEffect(() => {
    const onScroll = () => setIsVisible(window.scrollY > SCROLL_THRESHOLD);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    // Return focus to the top of the document for keyboard users
    document.body.focus();
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          key="back-to-top"
          onClick={scrollToTop}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          aria-label="Back to top"
          initial={{ opacity: 0, y: 20, scale: 0.85 }}
          animate={{ opacity: 1, y: 0,  scale: 1     }}
          exit={{    opacity: 0, y: 20, scale: 0.85  }}
          transition={{ duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
          whileTap={{ scale: 0.92 }}
          className="fixed bottom-8 right-8 z-50 w-12 h-12 flex items-center justify-center focus-visible:outline focus-visible:outline-2 focus-visible:outline-cyan-400 focus-visible:outline-offset-2 rounded-full"
          style={{ WebkitTapHighlightColor: 'transparent' }}
        >
          {/* ── Outer glow pulse ring ── */}
          <span
            aria-hidden="true"
            className="absolute inset-0 rounded-full"
            style={{
              background:  'linear-gradient(135deg, #06b6d4 0%, #8b5cf6 100%)',
              opacity:     0.25,
              animation:   'btt-pulse 2.4s ease-in-out infinite',
              transform:   'scale(1.35)',
            }}
          />

          {/* ── Rotating radar sweep ring (visible on hover) ── */}
          <motion.span
            aria-hidden="true"
            className="absolute inset-0 rounded-full"
            animate={{ rotate: isHovered ? 360 : 0 }}
            transition={{
              duration: 1.6,
              ease:     'linear',
              repeat:   isHovered ? Infinity : 0,
            }}
            style={{
              background: 'conic-gradient(from 0deg, transparent 75%, #06b6d4 100%)',
              opacity:    isHovered ? 0.8 : 0,
              transition: 'opacity 0.2s ease',
            }}
          />

          {/* ── Button face ── */}
          <span
            aria-hidden="true"
            className="absolute inset-[2px] rounded-full flex items-center justify-center"
            style={{
              background:   '#0d1f3c',
              border:       '1px solid rgba(156, 213, 240, 0.2)',
              boxShadow:    isHovered
                ? '0 0 20px rgba(6, 182, 212, 0.35), inset 0 1px 0 rgba(255,255,255,0.08)'
                : '0 4px 20px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.05)',
              transition:   'box-shadow 0.25s ease',
            }}
          >
            {/* Up chevron — shifts up slightly on hover for tactile feedback */}
            <motion.svg
              viewBox="0 0 24 24"
              className="w-5 h-5"
              fill="none"
              stroke="url(#btt-gradient)"
              strokeWidth={2.5}
              strokeLinecap="round"
              strokeLinejoin="round"
              animate={{ y: isHovered ? -2 : 0 }}
              transition={{ duration: 0.2, ease: 'easeOut' }}
            >
              <defs>
                {/* Gradient stroke on the arrow — matches site accent colours */}
                <linearGradient id="btt-gradient" x1="0%" y1="100%" x2="100%" y2="0%">
                  <stop offset="0%"   stopColor="#06b6d4" />
                  <stop offset="100%" stopColor="#9CD5F0" />
                </linearGradient>
              </defs>
              <path d="M18 15l-6-6-6 6" />
            </motion.svg>
          </span>

          {/* ── Keyframe styles injected once ── */}
          <style>{`
            @keyframes btt-pulse {
              0%, 100% { transform: scale(1.35); opacity: 0.25; }
              50%       { transform: scale(1.55); opacity: 0.10; }
            }
          `}</style>
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default BackToTop;