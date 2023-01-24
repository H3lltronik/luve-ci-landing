import React from 'react'
import styles from '../../Page.module.scss'
import homeData from '../../../data/home.json'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'

const LogosCarousel = () => {
  return (
    <Swiper spaceBetween={50} slidesPerView={3}>
      {
        homeData.logos.map((logo, index) => (
          <SwiperSlide key={index}>
            <div className={styles.home_page__partners__img} style={{ backgroundImage: `url(${logo.src})` }} />
          </SwiperSlide>
        ))
      }
    </Swiper>
  )
}

export default LogosCarousel
