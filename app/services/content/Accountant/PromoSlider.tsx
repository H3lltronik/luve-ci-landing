'use client'
import { FC } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper'
import NextImage from 'next/image'
import { Image } from '../../types'
import 'swiper/css'
import 'swiper/css/autoplay'
import 'swiper/css/pagination'

const imageSizes = `
(max-width: 768px) 100vw,
(max-width: 1200px) 50vw,
33vw`

interface PromoSliderProps {
  images: Image[];
  className?: string;
  itemsClass?: string;
}

const PromoSlider: FC<PromoSliderProps> = (props) => {
  const { images, className, itemsClass } = props
  return (
    <Swiper
      spaceBetween={50} slidesPerView={1} className={className} loop
      autoplay={{
        delay: 2000,
        disableOnInteraction: false
      }}
      pagination={{ clickable: true }}
      modules={[Autoplay, Pagination]}
    >
      {images.map((image, index) => (
        <SwiperSlide className={itemsClass} key={index}>
          <div className='position_relative'>
            <NextImage
              src={image.src}
              alt={image.alt}
              height={760}
              width={460}
              sizes={imageSizes}
              style={{ height: '100%', width: '100%' }}
            />
            <div className='luve_logo_watermark' />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  )
}

export default PromoSlider
