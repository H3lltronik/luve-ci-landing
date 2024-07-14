import React from 'react'
import styles from '../../Page.module.scss'
import { SimpleButton } from '../../common/Buttons'
import { useParallax } from 'react-scroll-parallax'
import { LuveLogo } from '../../common/Logo'
import DelayedWindup from '../../common/Animation/DelayedWindup'
import dynamic from 'next/dynamic'
const LazyLoad = dynamic(() => import('react-lazyload'), {
  ssr: false
})

const HeroSection = () => {
  const ref = useParallax<HTMLDivElement>({
    speed: 5,
    // translateY: [100, -200],
    easing: 'easeInCubic'
  })
  const ref2 = useParallax<HTMLDivElement>({
    speed: 8,
    // translateY: [100, -200],
    easing: 'easeInCubic'
  })

  const handleClick = () => {
    const el = document.getElementById('services-section')
    const header = document.getElementById('header')
    const headerHeight = header ? header.offsetHeight : 0
    if (el) {
      const topOffset = el.getBoundingClientRect().top
      window.scroll({
        top: topOffset - headerHeight,
        behavior: 'smooth'
      })
    }
  }

  return (
    <div className={styles.home_page__video_hero__outer}>
      <div className={styles.home_page__video_hero_wrapper}>
        <div className={styles.home_page__video_hero}>
          <LazyLoad offset={100} className='full-size'>
            <video loop autoPlay muted playsInline webkitPlaysinline>
              <source src='/hero-video.webm' type='video/webm' />
            </video>
          </LazyLoad>
        </div>
        <LuveLogo className={styles.home_page__video_hero_content_logo} />
        <div className={styles.home_page__video_hero_content}>
          {/* red dot pulsating anim */}
          <div className='w-[50px] h-[50px] rounded-full bg-[#e31937] transition duration-300 ease-in-out pulse-relative mt-3 md:mt-0' />
          <div ref={ref.ref} className=''>
            <h1>
              Cons<span className='red'>u</span>ltoria Int
              <span className='red'>e</span>gral
            </h1>
            <br />

            <DelayedWindup delay={500}>
              <h2 className='px-2'>
                Ofr<span className='red'>e</span>cemos{' '}
                <span className='red'>l</span>as mejor
                <span className='red'>e</span>s so<span className='red'>l</span>
                uciones
                <br /> para todas <span className='red'>l</span>as necesidad
                <span className='red'>e</span>s financi
                <span className='red'>e</span>ras
              </h2>
            </DelayedWindup>
          </div>

          <SimpleButton
            title='CONOCE MAS'
            data-aos='fade-in'
            data-aos-offset='-100'
            data-aos-delay='1000'
            ref={ref2.ref}
            onClick={handleClick}
            className={styles.home_page__video_hero_button}
          />
        </div>
      </div>
    </div>
  )
}

export default HeroSection
