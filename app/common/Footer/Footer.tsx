import Image from 'next/image'
import Link from 'next/link'
import * as React from 'react'
import IconButton from '../Buttons/IconButton'
import styles from './Footer.module.scss'

const Footer = (props: any) => {
  return (
    <footer className={styles.footer}>
      <div className={`${styles.footer__container} content-container`}>
        <div className={styles.footer__logo__wrapper}>
          <div className={styles.footer__logo}>
            <Image src='/logos/logo_luve.svg' alt='Luve logo' width={90} height={70} />
          </div>
          <div className={styles.footer__logo__icons}>
            <IconButton icon='RightArrowIcon' />
            <IconButton icon='RightArrowIcon' />
            <IconButton icon='RightArrowIcon' />
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
