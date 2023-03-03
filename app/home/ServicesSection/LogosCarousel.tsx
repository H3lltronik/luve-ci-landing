import React from 'react'
// import styles from '../../Page.module.scss'
import homeData from '../../../data/home.json'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper'
import 'swiper/css'
import 'swiper/css/pagination'
import Image from 'next/image'

const breakpoints = {
  0: {
    slidesPerView: 1
  },
  768: {
    slidesPerView: 2
  },
  1200: {
    slidesPerView: 3
  }
}
const LogosCarousel = () => {
  return (
    <Swiper
      modules={[Pagination]} pagination={{ clickable: true }} loop
      spaceBetween={50} slidesPerView='auto' autoplay breakpoints={breakpoints}
    >
      {
        homeData.logos.map((logo, index) => (
          <SwiperSlide key={index}>
            <Image src={logo.src} width={150} height={150} alt={logo.alt} />
          </SwiperSlide>
        ))
      }
    </Swiper>
  )
}

export default LogosCarousel
