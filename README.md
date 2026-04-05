# CyberPulse — Cybersecurity SaaS Landing Page Template

A production-ready landing page template for cybersecurity and SaaS startups. Built with React 18, TypeScript, Framer Motion, and Tailwind CSS. Dark theme, animated components, fully config-driven customisation, and SEO-optimised markup throughout.

---

## Preview



---

## Live Demo

https://cybersecurity-saas-landing-page-tem.vercel.app/

---

## Tech Stack

- **React 18** with TypeScript
- **Vite 5** — dev server and build tool
- **Tailwind CSS 3** — utility-first styling
- **Framer Motion 11** — all animations and transitions
- **MUI Icons 5** — icon set

---

## Features

### Sections
- **Navbar** — Pill-shaped hero navbar + scroll-triggered sticky navbar, both with a responsive mobile hamburger menu. 
- **Hero** — Animated network background (SVG with seeded-random particle CSS, no JS per frame), moving grid overlay, soft glow sweep, and a full-viewport layout.
- **Trusted By** — Infinite-scroll marquee logo strip with pause-on-hover.
- **About** — Two-column layout with intersection-observer entrance animations, a feature bullet grid, and stat cards.
- **Services** — Flip-card grid. Hover reveals the description, front face slides out.
- **How It Works** — Three-step process section with an animated SVG path and a travelling dot. Separate mobile stacked layout  for small screens.
- **Testimonials** — Auto-playing testimonial carousel with dot indicators and star ratings.
- **Why Choose Us** — Feature rows with auto-advancing progress bar alongside a right-side image.
- **Live Metrics** — animated radar sweep with live-style counter cards. Extracted into its own sub-component (`LiveMetrics`) with a thin section wrapper handling the scroll reveal.
- **Pricing** — Three-column pricing cards with Schema.org structured data.
- **Newsletter** — Parallax background email capture form with inline validation.
- **Footer** — Four-column footer with social links, nav columns, and contact info.
- **Back to Top** — `Fixed floating scroll-to-top button with radar-sweep hover animation.

### Architecture
- Each component is intentionally sealed — the component file handles layout, animation, and accessibility, while all content   lives in a separate config file. The pattern looks like this:

```
src/
  components/
    Sections/
      About.tsx           ← component (do not edit)
      Footer.tsx
      ...
    ConfigFiles/
      aboutConfig.ts      ← edit this
      footerConfig.ts
      ...

```

This makes it easy to hand off to a client or non-developer — they only ever touch the config files.

- **Lazy loading** — all sections below the fold are `React.lazy()` wrapped in a single `<Suspense>` boundary in `App.tsx`. Heavy MUI icon imports are also lazy.

### Scroll Animations
All sections use IntersectionObserver to trigger entrance animations once on first scroll-into-view. Animations do not re-fire on scroll-back, which keeps the experience clean and avoids layout thrashing.

### SEO & Accessibility
- Semantic HTML throughout: `<section>`, `<article>`, `<figure>`, `<blockquote>`, `<figcaption>`, `<nav>`, `<footer>`, `<dl>`/`<dt>`/`<dd>`
- Every `<section>` has `aria-labelledby` pointing to its visible `<h2>`
- Decorative elements are `aria-hidden="true"` with empty `alt=""`
- Meaningful images have descriptive `alt` text pulled from config
- Schema.org structured data: `Review`, `ItemList`, `OfferCatalog`, `Offer`, `UnitPriceSpecification`, `Person`
- `role="alert"` + `aria-live="polite"` on inline form feedback
- `aria-invalid` and `aria-describedby` on the newsletter input
- Keyboard navigation on all interactive elements including the service cards (`tabIndex`, `onFocus`, `onBlur`, `onKeyDown`)
- `loading="lazy"` + `decoding="async"` on below-fold images; `loading="eager"` on above-fold images to protect LCP
- `fetchPriority="high"` on the hero background image

---

## Project Structure

```
src/
├── components/
│   ├── ConfigFiles/          ← all client-editable config
│   │   ├── siteConfig.ts
│   │   ├── navbarConfig.ts
│   │   ├── heroConfig.ts
│   │   ├── trustedlogosConfig.ts
│   │   ├── aboutConfig.ts
│   │   ├── servicesConfig.ts
│   │   ├── howitworksConfig.ts
│   │   ├── testimonialsConfig.ts
│   │   ├── whychooseusConfig.ts
│   │   ├── pricingConfig.ts
│   │   ├── newsletterConfig.ts
│   │   └── footerConfig.ts
│   │
│   ├── Navbar/
│   │   ├── Navbar.tsx          ← main component
│   │   └── NavbarComponents.tsx ← Logo, DesktopLinks, CtaButton, Hamburger
│   ├── Hero/
│   │   ├── Hero.tsx
│   │   └── NetworkBackground.tsx
│   ├── LiveMetrics/
│   │   ├── LiveMetricsSection.tsx
│   │   └── LiveMetrics.tsx
│   ├── About.tsx
│   ├── Services.tsx
│   ├── HowItWorks.tsx
│   ├── Testimonials.tsx
│   ├── WhyChooseUs.tsx
│   ├── PricingPlans.tsx
│   ├── Newsletter.tsx
│   ├── TrustedLogos.tsx
│   ├── Footer.tsx
│   └── BackToTop.tsx
│
├── App.tsx
├── main.tsx
└── index.css
```

---

## Notable Implementation Details

### Config-driven without a CMS
Every section's text, arrays, and links live in TypeScript config files. Components import from config and render — they contain zero hardcoded strings. This means clients can rebrand the entire page by editing 12 files without understanding React. 

The one exception is LiveMetricsSection.tsx, which has a small LIVE_METRICS_CONFIG object defined inline at the top of the file rather than in a separate config file. This is intentional — the section only has 3 short strings (eyebrow, heading, subheading) with no arrays or shared values, so a dedicated config file would be unnecessary friction. 

---

## Setup

```bash
git clone https://github.com/SyedaMushfia/cybersecurity-saas-landing-page-template.git
cd cybersecurity-saas-landing-page-template
npm install
npm run dev
```

---

## Dependencies

```json
{
  "react": "^18.0.0",
  "react-dom": "^18.0.0",
  "framer-motion": "^11.0.0",
  "@mui/icons-material": "^5.0.0",
  "@mui/material": "^5.0.0",
  "typescript": "^5.0.0",
  "tailwindcss": "^3.0.0",
  "vite": "^5.0.0"
}
```
