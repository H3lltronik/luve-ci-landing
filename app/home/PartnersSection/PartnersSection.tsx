import Image from 'next/image'
import React from 'react'
import logoGif from '../../../assets/logo-anim.gif'
import styles from '../../Page.module.scss'
import avacoLogo from '../../../assets/logo/avaco.png'
import equilibrioLogo from '../../../assets/logo/equilibrio.png'
import h3Logo from '../../../assets/logo/h3.svg'

const PartnersSection = () => {
  return (
    <section className={styles.home_page__logo_anim}>
      <Image id='logo-anim' className={styles.home_page__logo_anim__image} src={logoGif.src} alt='Luve Logo' fill />
      <h2>En ascociacion con:</h2>
      <div className={`${styles.home_page__partners} content-container'`}>
        <div className={styles.home_page__partners__img} style={{ backgroundImage: `url(${avacoLogo.src})` }} />
        <div className={styles.home_page__partners__img} style={{ backgroundImage: `url(${equilibrioLogo.src})` }} />
        <div className={styles.home_page__partners__img} style={{ backgroundImage: `url(${h3Logo.src})` }} />
      </div>
    </section>
  )
}

export default PartnersSection
