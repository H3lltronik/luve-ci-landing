'use client'
import React, { useEffect, useState } from 'react'
import styles from './HorizontalModule.module.scss'
import { setCSSVariable } from '../../../utils'
import FirstModule from './modules/FirstModule'
import SecondModule from './modules/SecondModule'
import ThirdModule from './modules/ThirdModule'
import FourthModule from './modules/FourthModule'
import FifthModule from './modules/FifthModule'
import { useIsClient } from '../../utils/hooks/IsClient'

const ITEMS_COUNT = 5
const HEADER_HEIGHT = 80
const MAX_PAGE_WIDTH = 1550
const HorizontalModule = (props: any) => {
  const filler = React.useRef<HTMLDivElement>(null)
  const container = React.useRef<HTMLDivElement>(null)
  const isClient = useIsClient()

  const [scrollPosition, setScrollPosition] = useState(0)
  //
  // SETTING FILLER HEIGHT
  //
  useEffect(() => {
    if (!isClient) return
    if (filler.current === null) return
    filler.current.style.height = `${window.innerHeight * ITEMS_COUNT}px`
  }, [filler, isClient])

  //
  // SETTING PROGRESS BAR
  //
  useEffect(() => {
    if (!isClient) return
    if (container.current === null) return
    const elementPosition =
      container.current.getBoundingClientRect().top + window.scrollY

    const handleScroll = () => {
      const currentPosition = window.scrollY

      const hasPassed = currentPosition + HEADER_HEIGHT > elementPosition
      const rest = currentPosition + HEADER_HEIGHT - elementPosition
      if (hasPassed) {
        const maxWidth = (MAX_PAGE_WIDTH > window.innerWidth) ? window.innerWidth : MAX_PAGE_WIDTH
        const progress = (rest * maxWidth) / (window.innerHeight * ITEMS_COUNT)
        setScrollPosition(rest)
        setCSSVariable('horizontal-module-progress-width', `${progress}px`)
      } else {
        setScrollPosition(0)
      }
    }

    function handleResize () {
      handleScroll()
    }

    window.addEventListener('scroll', handleScroll)
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleResize)
    }
  }, [container, isClient])

  return (
    <section ref={container} className={styles.horizontal_module__container}>
      <div className={styles.horizontal_module}>
        <div className={styles.horizontal_module__wrapper}>
          <div className={`${styles.horizontal_module__red_dot} pulse`} />
          <div className={styles.horizontal_module__progress} />

          {scrollPosition >= 0 && (
            <FirstModule />
          )}

          {isClient && scrollPosition >= window.innerHeight * 1 && (
            <SecondModule />
          )}

          {isClient && scrollPosition >= window.innerHeight * 2 && (
            <ThirdModule />
          )}

          {isClient && scrollPosition >= window.innerHeight * 3 && (
            <FourthModule />
          )}

          {isClient && scrollPosition >= window.innerHeight * 4 && (
            <FifthModule />
          )}

        </div>
      </div>

      <div ref={filler} />
    </section>
  )
}

export default HorizontalModule
