import React from 'react'
import styles from '../../Page.module.scss'
import avacoLogo from '../../../assets/logo/avaco.png'
import equilibrioLogo from '../../../assets/logo/equilibrio.png'
import h3Logo from '../../../assets/logo/h3.svg'

import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'

const LogosCarousel = () => {
  return (
    <Swiper spaceBetween={50} slidesPerView={3}>
      <SwiperSlide>
        <div className={styles.home_page__partners__img} style={{ backgroundImage: `url(${avacoLogo.src})` }} />
      </SwiperSlide>
      <SwiperSlide>
        <div className={styles.home_page__partners__img} style={{ backgroundImage: `url(${equilibrioLogo.src})` }} />
      </SwiperSlide>
      <SwiperSlide>
        <div className={styles.home_page__partners__img} style={{ backgroundImage: `url(${h3Logo.src})` }} />
      </SwiperSlide>
    </Swiper>
  )
}

export default LogosCarousel
