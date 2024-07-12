import Image from 'next/image'
import Link from 'next/link'
import * as React from 'react'
import IconButton from '../Buttons/IconButton'
import styles from './Footer.module.scss'

const Footer = (props: any) => {
  let whatsappMsg = encodeURIComponent('¡Hola Luve! Estoy en tu sitio web, quisiera recibir mas información.')
  whatsappMsg = `?text=${whatsappMsg}`

  return (
    <footer className={styles.footer}>
      <div className={`${styles.footer__container} content-container`}>
        <div className={styles.footer__logo__wrapper}>
          <div className={styles.footer__logo}>
            <Image src='/logos/logo_luve.svg' alt='Luve logo' width={90} height={70} />
          </div>
          <div className={styles.footer__logo__icons}>
            <Link href='https://www.facebook.com/LuveGF' target='_blank' rel='noreferrer' aria-label='Facebook'>
              <IconButton icon='FacebookIcon' ariaLabel='Facebook' />
            </Link>
            <Link href={`https://wa.me/523344515189${whatsappMsg}`} target='_blank' rel='noreferrer' aria-label='Whatsapp'>
              <IconButton className={styles.footer__whatsapp} icon='WhatsAppIcon' ariaLabel='Whatsapp' />
            </Link>

            <Link href='https://www.linkedin.com/in/luve-ci-a0a56826b/' target='_blank' rel='noreferrer' aria-label='Linked'>
              <IconButton className='' icon='LinkedInIcon' ariaLabel='Linked' />
            </Link>
          </div>
        </div>
        <div className={styles.footer__links}>
          <Link href=''>Terminos y condiciones</Link>
          <span> | </span>
          <Link href=''>Aviso de privacidad</Link>
        </div>

        <div className={styles.footer__logo}>
          <Image src='/logos/h3.svg' alt='Luve logo' width={120} height={50} />
        </div>
      </div>
    </footer>
  )
}

export default Footer
