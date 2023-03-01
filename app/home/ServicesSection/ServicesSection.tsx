'use client'
import * as React from 'react'
import ServiceItem from './ServiceItem'
import styles from './ServicesSection.module.scss'
import { useEffect, useState } from 'react'
import useLuveStore from '../../../store'
import { setCSSVariable } from '../../../utils'
import homeData from '../../../data/home.json'

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

  // SCROLL EVENTS
  useEffect(() => {
    _lineHeightScrollE = () => LineHeightScrollEvent(window.pageYOffset)
    window.removeEventListener('scroll', _lineHeightScrollE)
    window.addEventListener('scroll', _lineHeightScrollE, { passive: true })

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
    const objFromTop = logoAnimElTop
    const objHeight = logoAnimElHeight
    const logoFromTop = objFromTop - window.innerHeight * 2.45
    const maxHeight = logoFromTop + objHeight / 3

    setLineMaxHeight(maxHeight)
    setCSSVariable('services-line-max-height', `${maxHeight}px`)
    return () => {}
  }, [logoAnimElHeight, logoAnimElTop, setLineMaxHeight])

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
  }, [headerHeight, scrollValue, serviceSectionHeight])

  const LineHeightScrollEvent = (scrollValue: number) => {
    setScrollValue(scrollValue)
    setHeaderHeight(document.querySelector('#header')?.clientHeight || 0)
    setServiceSectionHeight(
      document.querySelector('#home_services')?.clientHeight || 0
    )

    const scrollStart = (window.innerHeight * 1.7)
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
    <section className={styles.home_services} id='home_services'>
      <div className={styles.home_services__bullet} />
      <div className={styles.home_services__line} />
      {homeData.services.map((data, index) => (
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
