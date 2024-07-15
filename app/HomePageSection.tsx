'use client'
import React from 'react'
import { ParallaxProvider } from 'react-scroll-parallax'
import { ServicesSection } from './home'
import ContactSection from './home/ContactSection/ContactSection'
import HeroSection from './home/HeroSection/HeroSection'
import PartnersSection from './home/PartnersSection/PartnersSection'
import { IsClientCtxProvider } from './utils/hooks/IsClient'
import styles from './Page.module.scss'
import services from '../assets/data/services.json'

export const HomePageSection = () => {
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
          <ContactSection />
        </div>
      </main>
    </ParallaxProvider>
  )
}
