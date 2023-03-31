'use client'
import { useCallback, useEffect, useState } from 'react'
import Lottie from 'react-lottie'
import * as animationData from '../../../assets/Comp 2.json'
import useLuveStore from '../../../store'
import { getOffset } from '../../../utils'
import styles from '../../Page.module.scss'
import { useIsClient } from '../../utils/hooks/IsClient'
import LogosCarousel from '../ServicesSection/LogosCarousel'

const lottieOptions = {
  loop: false,
  autoplay: false,
  animationData,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice'
  }
}

const PartnersSection = () => {
  const { lineMaxHeight, pageScroll, setLogoAnimElHeight, setLogoAnimElTop, setLineGrowthEnabled } = useLuveStore()
  const [paused, setPaused] = useState(false)
  const onRefChange = useCallback((node: any) => {
    if (node != null) {
      setLogoAnimElHeight(node.clientHeight)
      setLogoAnimElTop(getOffset(node).top)
    }
  }, [setLogoAnimElHeight, setLogoAnimElTop])

  const isClient = useIsClient()
  // LottieAnimWidth values responsive
  const [lottieAnimWidth, setLottieAnimWidth] = useState(400)

  useEffect(() => {
    if (!isClient) return
    if (window.innerWidth < 768) {
      setLottieAnimWidth(200)
    } else if (window.innerWidth < 1024) {
      setLottieAnimWidth(300)
    } else {
      setLottieAnimWidth(400)
    }
  }, [isClient])

  useEffect(() => {
    if (pageScroll >= lineMaxHeight && pageScroll !== 0 && lineMaxHeight !== 0) {
      setPaused(true)
      setLineGrowthEnabled(false)
    }
  }, [pageScroll, lineMaxHeight, setLineGrowthEnabled])

  return (
    <section className={styles.home_page__logo_anim}>
      <div className={styles.home_page__logo_anim__image__container}>
        {/* <Image id='logo-anim' className={styles.home_page__logo_anim__image} src={logoGif.src} alt='Luve Logo' fill /> */}
        <div id='logo-anim' ref={onRefChange} className={styles.home_page__logo_anim__image}>
          <Lottie
            options={lottieOptions}
            // className={styles.home_page__logo_anim__lottie}
            width={lottieAnimWidth}
            isStopped={!paused}
            isPaused={false}
          />
        </div>
      </div>
      <h2 data-aos='fade-up'>En ascociacion con:</h2>
      <div data-aos='fade-down' className={`${styles.home_page__partners} content-container'`}>
        <LogosCarousel />
      </div>
    </section>
  )
}

export default PartnersSection
