import React from 'react'
import styles from '../../Page.module.scss'
import { SimpleButton } from '../../common/Buttons'
import { useParallax } from 'react-scroll-parallax'

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
        <div className={styles.home_page__video_hero_content}>
          <div ref={ref.ref} className=''>
            <h1>Somos Consultoria Integral</h1>

            <h2>
              Ofrecemos soluciones a todas
              <br /> las necesidades financieras
            </h2>
          </div>

          <SimpleButton ref={ref2.ref} className={styles.home_page__video_hero_button} />
        </div>
      </div>
    </div>
  )
}

export default HeroSection
