'use client'
import { ServicesSection, GridSection } from './home'
import { ParallaxProvider } from 'react-scroll-parallax'
import HeroSection from './home/HeroSection/HeroSection'
import PartnersSection from './home/PartnersSection/PartnersSection'
import ContactSection from './home/ContactSection/ContactSection'
import { IsClientCtxProvider } from './utils/hooks/IsClient'

export default function HomePage (options: any) {
  return (
    <ParallaxProvider>
      <main>
        <HeroSection />

        <div className='content-container' style={{ marginTop: '20px' }}>
          <ServicesSection />
        </div>

        <div className='content-container'>
          <IsClientCtxProvider>
            <PartnersSection />
          </IsClientCtxProvider>
        </div>

        <div className='content-container'>
          <ContactSection whatsappMsg='¡Hola Luve! Estoy en tu sitio web, quisiera recibir mas información.' />
        </div>
      </main>
    </ParallaxProvider>
  )
}
