import * as React from 'react'
import ServiceItem from './ServiceItem'
import styles from './ServicesSection.module.scss'
import image from '../../../assets/pexels-torsten-dettlaff-70912.jpg'

const ServicesSection = (props: any) => {
  return (
    <section className={styles.home_services}>
      <div className={styles.home_services__bullet} />
      <ServiceItem title='Test' description='Test' items={['1', '2']} image={image.src} />
      <ServiceItem title='Test' description='Test' items={['1', '2']} image={image.src} inverted />
      <ServiceItem title='Test' description='Test' items={['1', '2']} image={image.src} />
      <ServiceItem title='Test' description='Test' items={['1', '2']} image={image.src} inverted />

    </section>
  )
}

export default ServicesSection
