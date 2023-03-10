'use client'
import React, { useEffect, useState } from 'react'
import styles from './HorizontalModule.module.scss'
import { setCSSVariable } from '../../../utils'
import FirstModule from './modules/FirstModule'
import SecondModule from './modules/SecondModule'
import ThirdModule from './modules/ThirdModule'
import FourthModule from './modules/FourthModule'
import FifthModule from './modules/FifthModule'

const ITEMS_COUNT = 5
const HEADER_HEIGHT = 80
const MAX_PAGE_WIDTH = 1550
export default function HorizontalModule (props: any) {
  const filler = React.useRef<HTMLDivElement>(null)
  const container = React.useRef<HTMLDivElement>(null)

  const [scrollPosition, setScrollPosition] = useState(0)

  if (typeof window === 'undefined') return (<></>)
  //
  // SETTING FILLER HEIGHT
  //
  useEffect(() => {
    if (!window) return
    if (filler.current === null) return
    filler.current.style.height = `${window.innerHeight * ITEMS_COUNT}px`
  }, [filler])

  //
  // SETTING PROGRESS BAR
  //
  useEffect(() => {
    if (!window) return
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
  }, [container])

  return (
    <section ref={container} className={styles.horizontal_module__container}>
      <div className={styles.horizontal_module}>
        <div className={styles.horizontal_module__wrapper}>
          <div className={`${styles.horizontal_module__red_dot} pulse`} />
          <div className={styles.horizontal_module__progress} />

          {scrollPosition >= 0 && (
            <FirstModule />
          )}

          {scrollPosition >= window.innerHeight * 1 && (
            <SecondModule />
          )}

          {scrollPosition >= window.innerHeight * 2 && (
            <ThirdModule />
          )}

          {scrollPosition >= window.innerHeight * 3 && (
            <FourthModule />
          )}

          {scrollPosition >= window.innerHeight * 4 && (
            <FifthModule />
          )}

        </div>
      </div>

      <div ref={filler} />
    </section>
  )
}
