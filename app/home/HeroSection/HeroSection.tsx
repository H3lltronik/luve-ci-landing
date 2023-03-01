import React from 'react'
import styles from '../../Page.module.scss'
import { SimpleButton } from '../../common/Buttons'
import { useParallax } from 'react-scroll-parallax'
import { LuveLogo } from '../../common/Logo'

const HeroSection = () => {
  const ref = useParallax({
    speed: 5,
    // translateY: [100, -200],
    easing: 'easeInCubic'
  })
  const ref2 = useParallax({
    speed: 8,
    // translateY: [100, -200],
    easing: 'easeInCubic'
  })

  return (
    <div className={styles.home_page__video_hero__outer}>
      <div className={styles.home_page__video_hero_wrapper}>
        <div className={styles.home_page__video_hero}>
          <video loop autoPlay muted>
            <source src='/hero-video.webm' />
          </video>
        </div>
        <LuveLogo className={styles.home_page__video_hero_content_logo} />
        <div className={styles.home_page__video_hero_content}>
          <div ref={ref.ref} className=''>
            <h1>LUVE</h1>
            <h1>Consultoria Integral</h1>
            <br />

            <h2>
              Ofrecemos las mejores soluciones
              <br /> para todas las necesidades financieras
            </h2>
          </div>

          <SimpleButton ref={ref2.ref} className={styles.home_page__video_hero_button} />
        </div>
      </div>
    </div>
  )
}

export default HeroSection
