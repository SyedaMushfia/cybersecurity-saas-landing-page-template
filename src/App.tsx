import About from './components/About'
import BackToTop from './components/BackToTop'
import Footer from './components/Footer'
import Hero from './components/Hero/Hero'
import HowItWorks from './components/HowItWorks'
import LiveMetricsSection from './components/LiveMetricsSection'
import Navbar from './components/Navbar/Navbar'
import Newsletter from './components/Newsletter'
import PricingPlans from './components/PricingPlans'
import Services from './components/Services'
import Testimonials from './components/Testimonials'
import TrustedLogos from './components/TrustedLogos'
import WhyChooseUs from './components/WhyChooseUs'

function App() {
  return (
    <>
      <div>
        <Navbar />
        <Hero />
        <TrustedLogos />
        <About />
        <Services />
        <HowItWorks />
        <Testimonials />
        <WhyChooseUs />
        <LiveMetricsSection />
        <PricingPlans />
        <Newsletter />
        <Footer />
        <BackToTop />
      </div>
    </>
  )
}

export default App
