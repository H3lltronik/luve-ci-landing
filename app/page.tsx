'use client'
import { ServicesSection, GridSection } from './home'
import { ParallaxProvider } from 'react-scroll-parallax'
import HeroSection from './home/HeroSection/HeroSection'
import PartnersSection from './home/PartnersSection/PartnersSection'
import ContactSection from './home/ContactSection/ContactSection'

export default function HomePage (options: any) {
  return (
    <ParallaxProvider>
      <main>
        <HeroSection />

        <GridSection />

        <div className='content-container'>
          <ServicesSection />
        </div>

        <PartnersSection />

        <ContactSection />
      </main>
    </ParallaxProvider>
  )
}
