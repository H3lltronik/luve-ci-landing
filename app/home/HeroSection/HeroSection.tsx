import React from 'react'
import styles from '../../Page.module.scss'
import { SimpleButton } from '../../common/Buttons'
import { useParallax } from 'react-scroll-parallax'
import { LuveLogo } from '../../common/Logo'
import DelayedWindup from '../../common/Animation/DelayedWindup'

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
            <h1 data-aos='fade-up'>LUVE</h1>
            <h1 data-aos='fade-up' data-aos-delay='200'>
              <span>Cons<span className='red'>u</span>ltoria Int<span className='red'>e</span>gral</span>
            </h1>
            <br />

            <DelayedWindup delay={500}>
              <h2>
                Ofr<span className='red'>e</span>cemos <span className='red'>l</span>as mejor<span className='red'>e</span>s so<span className='red'>l</span>uciones
                <br /> para todas <span className='red'>l</span>as necesidad<span className='red'>e</span>s financi<span className='red'>e</span>ras
              </h2>
            </DelayedWindup>
          </div>

          <SimpleButton data-aos='fade-in' data-aos-offset={-100} data-aos-delay='1000' ref={ref2.ref} className={styles.home_page__video_hero_button} />
        </div>
      </div>
    </div>
  )
}

export default HeroSection
