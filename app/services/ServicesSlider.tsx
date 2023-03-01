'use client'
import { FC } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import NextImage from 'next/image'
import { Image } from '../../types'

const imageSizes = `
(max-width: 768px) 100vw,
(max-width: 1200px) 50vw,
33vw`

interface ServicesSliderProps {
  images: Image[];
  className?: string;
}

const ServicesSlider: FC<ServicesSliderProps> = (props) => {
  const { images, className } = props
  return (
    <Swiper spaceBetween={50} slidesPerView={1} className={className}>
      {images.map((image, index) => (
        <SwiperSlide key={index}>
          <div className=''>
            <NextImage
              src={image.src}
              alt={image.alt}
              height={760}
              width={460}
              sizes={imageSizes}
              style={{ height: '100%', width: '100%' }}
            />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  )
}

export default ServicesSlider
