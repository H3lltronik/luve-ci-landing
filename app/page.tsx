'use client'
import { ServicesSection, GridSection } from './home'
import { ParallaxProvider } from 'react-scroll-parallax'
import HeroSection from './home/HeroSection/HeroSection'
import { useEffect } from 'react'
import PartnersSection from './home/PartnersSection/PartnersSection'
import $ from 'jquery'

export default function HomePage (options: any) {
  useEffect(() => {
    const test = document.querySelector(':root') as HTMLElement
    const $logoObj = $('#logo-anim')
    const objFromTop = ($logoObj.offset()?.top || 0)
    const objHeight = ($logoObj.height() ?? 0) / 1.3
    console.log('objHeight', objHeight)
    const logoFromTop = objFromTop - window.innerHeight
    test.style.setProperty('--services-line-max-height', `${logoFromTop - objHeight}px`)

    window.addEventListener('scroll', function (e) {
      if (this.scrollY >= this.innerHeight) {
        if (!test) return

        test.style.setProperty('--services-line-height', `${(this.scrollY - this.innerHeight) + 10}px`)
      } else {
        test.style.setProperty('--services-line-height', '0px')
      }
    })
  })

  return (
    <ParallaxProvider>
      <main>
        <HeroSection />

        <div className='content-container'>
          <ServicesSection />
        </div>

        <PartnersSection />

        <GridSection />
      </main>
    </ParallaxProvider>
  )
}
