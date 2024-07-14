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
    const result = []
    const words = subtitle.split(' ')
    for (let i = 0; i < words.length; i++) {
      const word = words[i]
      if (word.length > 0) {
        result.push(
          <>
            <span className={word.length > 1 ? 'red' : ''}>{word[0]}</span>
            {word.slice(1)}
            &nbsp;
          </>
        )
      }
    }

    return result
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
        <div className={styles.red_dot} />
        <h1 style={{ flex: 1 }}>
          <span className={styles.header__subtitle}>{title}</span>
          <span className={styles.header__title}>
            {subtitleWordFirstLetterRed()}
          </span>
        </h1>
      </div>
      <div className={styles.header___overlay} />
      {props.children}
    </header>
  )
}
