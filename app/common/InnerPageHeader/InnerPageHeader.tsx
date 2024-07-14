import Image from 'next/image'
import React from 'react'
import styles from './InnerPageHeader.module.scss'

type InnerPageHeaderProps = {
  image: { src: string; alt: string };
  title: string;
  subtitle: string;
  children?: React.ReactNode;
};

export default function InnerPageHeader (props: InnerPageHeaderProps) {
  const { image, subtitle, title } = props

  const subtitleWordFirstLetterRed = () => {
    return subtitle.split(' ').map((word, index) => (
      <React.Fragment key={index}>
        <span className='inline'>
          <span className='text-red-600'>{word[0]}</span>
          {word.slice(1)}
        </span>{' '}
      </React.Fragment>
    ))
  }

  return (
    <header className={`${styles.header} mb-[2rem] md:mb-[4rem]`}>
      <Image
        src={image.src}
        alt={image.alt}
        className='absolute inset-0 w-full h-full object-cover z-[-1]'
        fill
        loading='eager'
        style={{ objectFit: 'cover' }}
      />

      <div className={styles.header__container}>
        <div className='flex-1 flex justify-end items-center'>
          <div className={styles.red_dot} />
        </div>
        <div className='flex-[2]'>
          <h1>
            <span className={styles.header__subtitle}>{title}</span>
            <span className={styles.header__title}>
              {subtitleWordFirstLetterRed()}
            </span>
          </h1>
        </div>
      </div>
      <div className={styles.header___overlay} />
      {props.children}
    </header>
  )
}
