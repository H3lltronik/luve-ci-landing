'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'
import React, { useState } from 'react'
import { Autoplay } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/swiper-bundle.css'

type BlogCardImagesProps = {
  imageUrl: string;
  imageAlt: string;
  hoverImages?: string[];
};

const BlogCardImages: React.FC<BlogCardImagesProps> = ({
  imageUrl,
  imageAlt,
  hoverImages
}) => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      className='rounded-lg overflow-hidden h-full w-full relative'
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div
        className='absolute inset-0'
        initial={{ opacity: 1 }}
        animate={{ opacity: isHovered ? 0 : 1 }}
        transition={{ duration: 0.5 }}
      >
        <Image src={imageUrl} alt={imageAlt} fill className='object-cover' />
      </motion.div>
      {hoverImages && hoverImages.length > 0 && (
        <motion.div
          className='absolute inset-0'
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.5 }}
        >
          <Swiper
            className='h-full w-full'
            spaceBetween={0}
            slidesPerView={1}
            loop
            autoplay={{ delay: 2000 }}
            modules={[Autoplay]}
          >
            {hoverImages.map((img, index) => (
              <SwiperSlide key={index} className='h-full w-full relative'>
                <Image
                  src={img}
                  alt={`${imageAlt} ${index + 1}`}
                  fill
                  className='object-cover'
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      )}
    </div>
  )
}

export default BlogCardImages
