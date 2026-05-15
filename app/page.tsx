import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import HeroSection from '@/components/sections/hero-section'
import AboutSection from '@/components/sections/about-section'
import SponsorshipSection from '@/components/sections/sponsorship-section'
import TalentSection from '@/components/sections/talent-section'
import ProductionsSection from '@/components/sections/productions-section'
import ServicesSection from '@/components/sections/services-section'
import ContactSection from '@/components/sections/contact-section'

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <SponsorshipSection />
        <TalentSection />
        <ProductionsSection />
        <ServicesSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  )
}
