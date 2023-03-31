'use client'
import * as React from 'react'
import ServiceItem from './ServiceItem'
import styles from './ServicesSection.module.scss'
import { useEffect, useState } from 'react'
import useLuveStore from '../../../store'
import { setCSSVariable } from '../../../utils'
import services from '../../../assets/data/services.json'

let _lineHeightScrollE: any = null
const ServicesSection = (props: any) => {
  const {
    serviceSectionHeight,
    scrollValue,
    setPageScroll,
    logoAnimElHeight,
    logoAnimElTop,
    setLineMaxHeight,
    lineGrowthEnabled,
    setServiceSectionHeight,
    setScrollValue
  } = useLuveStore()
  const [headerHeight, setHeaderHeight] = useState(0)
  const [logoPageScroll, setLogoPageScroll] = useState(false)
  const sectionRef = React.useRef<HTMLElement>(null)

  // SCROLL EVENTS
  useEffect(() => {
    _lineHeightScrollE = () => LineHeightScrollEvent(window.pageYOffset)
    window.removeEventListener('scroll', _lineHeightScrollE)
    window.addEventListener('scroll', _lineHeightScrollE, { passive: true })

    const vw = document.documentElement.clientWidth
    const vh = document.documentElement.clientHeight
    setCSSVariable('vw', `${vw}px`)
    setCSSVariable('vh', `${vh}px`)

    return () => {
      window.removeEventListener('scroll', _lineHeightScrollE)
    }
  }, [])

  // SCROLL EVENTS STOP WHEN GETTING THERE
  useEffect(() => {
    if (!lineGrowthEnabled) { window.removeEventListener('scroll', _lineHeightScrollE) }
  }, [lineGrowthEnabled])

  // GETTING HEIGHTS AND SETTING CSS VARIABLE
  useEffect(() => {
    let maxHeight = sectionRef.current?.getBoundingClientRect().height || 0
    maxHeight += (window.innerHeight * 0.5) + 10

    setLineMaxHeight(maxHeight)
    setCSSVariable('services-line-max-height', `${maxHeight}px`)
    return () => {}
  }, [sectionRef, setLineMaxHeight])

  // SCROLL EVENT FULL PAGE SCROLL
  useEffect(() => {
    const fullPageScrollVal = serviceSectionHeight + (window.innerHeight * 1.4) - headerHeight
    if (scrollValue >= fullPageScrollVal && !logoPageScroll) {
      window.scrollTo({
        top: fullPageScrollVal + window.innerHeight * 1.1,
        behavior: 'smooth'
      })
      setLogoPageScroll(true)
    }
  }, [headerHeight, logoPageScroll, scrollValue, serviceSectionHeight])

  const LineHeightScrollEvent = (scrollValue: number) => {
    setScrollValue(scrollValue)
    setHeaderHeight(document.querySelector('#header')?.clientHeight || 0)
    setServiceSectionHeight(
      document.querySelector('#home_services')?.clientHeight || 0
    )

    const scrollStart = (window.innerHeight * 0.5)
    if (scrollValue >= scrollStart) {
      setPageScroll(scrollValue - scrollStart)
      setCSSVariable(
        'services-line-height',
        `${scrollValue - scrollStart + 10}px`
      )
    } else {
      setPageScroll(0)
      setCSSVariable('services-line-height', '0px')
    }
  }

  return (
    <section ref={sectionRef} className={styles.home_services} id='home_services'>
      <div className={styles.home_services__bullet} />
      <div className={styles.home_services__line} />
      {services.map((data, index) => (
        <ServiceItem
          item={data}
          key={index}
          inverted={index % 2 !== 0}
        />
      ))}
    </section>
  )
}

export default ServicesSection
