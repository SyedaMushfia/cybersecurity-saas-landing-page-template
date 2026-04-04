import { lazy, Suspense } from 'react'
import BackToTop from './components/BackToTop'
import Hero from './components/Hero/Hero'
import Navbar from './components/Navbar/Navbar'
import TrustedLogos from './components/TrustedLogos'

const About = lazy(() => import('./components/About'))
const Services = lazy(() => import('./components/Services'))
const HowItWorks = lazy(() => import('./components/HowItWorks'))
const Testimonials = lazy(() => import('./components/Testimonials'))
const WhyChooseUs = lazy(() => import('./components/WhyChooseUs'))
const LiveMetricsSection = lazy(() => import('./components/LiveMetricsSection'))
const PricingPlans = lazy(() => import('./components/PricingPlans'))
const Newsletter = lazy(() => import('./components/Newsletter'))
const Footer = lazy(() => import('./components/Footer'))

function App() {
  return (
    <>
      <div>
        <Navbar />
        <Hero />
        <TrustedLogos />
        <Suspense fallback={null}>
          <About />
          <Services />
          <HowItWorks />
          <Testimonials />
          <WhyChooseUs />
          <LiveMetricsSection />
          <PricingPlans />
          <Newsletter />
          <Footer />
        </Suspense>
        <BackToTop />
      </div>
    </>
  )
}

export default App