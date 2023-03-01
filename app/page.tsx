'use client'
import { ServicesSection, GridSection } from './home'
import { ParallaxProvider } from 'react-scroll-parallax'
import HeroSection from './home/HeroSection/HeroSection'
import PartnersSection from './home/PartnersSection/PartnersSection'
import ContactSection from './home/ContactSection/ContactSection'

/*
window.addEventListener('load', () => {
  const root = document.querySelector(':root') as HTMLElement
  const $logoObj = $('#logo-anim')
  const objFromTop = ($logoObj.offset()?.top || 0)
  const objHeight = ($logoObj.height() ?? 0)
  const logoFromTop = objFromTop - (window.innerHeight * 1.5)

  root.style.setProperty('--services-line-max-height', `${logoFromTop + (objHeight / 3)}px`)

  window.addEventListener('scroll', function (e) {
    if (this.scrollY >= this.innerHeight) {
      if (!root) return

      root.style.setProperty('--services-line-height', `${(this.scrollY - this.innerHeight) + 10}px`)
    } else {
      root.style.setProperty('--services-line-height', '0px')
    }
  })
})
*/

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
