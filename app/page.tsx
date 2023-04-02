'use client'
import { ServicesSection, GridSection } from './home'
import { ParallaxProvider } from 'react-scroll-parallax'
import HeroSection from './home/HeroSection/HeroSection'
import PartnersSection from './home/PartnersSection/PartnersSection'
import ContactSection from './home/ContactSection/ContactSection'
import { IsClientCtxProvider } from './utils/hooks/IsClient'
import styles from './Page.module.scss'
import services from '../assets/data/services.json'

export const metadata = {
  title: 'My Page Title'
}
export default function HomePage (options: any) {
  return (
    <ParallaxProvider>
      <main>
        <HeroSection />

        <div id='services-section' className={`${styles.home_first_container} content-container`}>
          <ServicesSection type='services' services={services} />
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
