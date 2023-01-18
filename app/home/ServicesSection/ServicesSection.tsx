'use client'
import * as React from 'react'
import ServiceItem from './ServiceItem'
import styles from './ServicesSection.module.scss'
import image from '../../../assets/pexels-torsten-dettlaff-70912.jpg'
import { useEffect } from 'react'
import useLuveStore from '../../../store'
import { setCSSVariable } from '../../../utils'

let _onScroll: any = null
const ServicesSection = (props: any) => {
  const { setPageScroll, logoAnimElHeight, logoAnimElTop, setLineMaxHeight, lineGrowthEnabled } = useLuveStore()

  useEffect(() => {
    _onScroll = () => scrollEvent(window.pageYOffset)
    window.removeEventListener('scroll', _onScroll)
    window.addEventListener('scroll', _onScroll, { passive: true })
    return () => window.removeEventListener('scroll', _onScroll)
  }, [])

  useEffect(() => {
    console.log('lineGrowthEnabled', lineGrowthEnabled)
    if (!lineGrowthEnabled) {
      window.removeEventListener('scroll', _onScroll)
    }
  }, [lineGrowthEnabled])

  useEffect(() => {
    const objFromTop = logoAnimElTop
    const objHeight = logoAnimElHeight
    const logoFromTop = objFromTop - (window.innerHeight * 1.5)
    const maxHeight = logoFromTop + (objHeight / 3)

    setLineMaxHeight(maxHeight)
    setCSSVariable('services-line-max-height', `${maxHeight}px`)
    return () => { }
  }, [logoAnimElHeight, logoAnimElTop, setLineMaxHeight])

  const scrollEvent = (scrollValue: number) => {
    if (scrollValue >= window.innerHeight) {
      setPageScroll(scrollValue - window.innerHeight)
      setCSSVariable('services-line-height', `${(scrollValue - window.innerHeight) + 10}px`)
    } else {
      setPageScroll(0)
      setCSSVariable('services-line-height', '0px')
    }
  }

  return (
    <section className={styles.home_services}>
      <div className={styles.home_services__bullet} />
      <div id='test' className={styles.home_services__line} />
      <ServiceItem title='Test' description='Test' items={['1', '2']} image={image.src} />
      <ServiceItem title='Test' description='Test' items={['1', '2']} image={image.src} inverted />
      <ServiceItem title='Test' description='Test' items={['1', '2']} image={image.src} />
      <ServiceItem title='Test' description='Test' items={['1', '2']} image={image.src} inverted />

    </section>
  )
}

export default ServicesSection
