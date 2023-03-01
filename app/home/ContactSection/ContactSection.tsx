import React from 'react'
import { ContactForm } from '../../common/Forms'
import styles from '../../Page.module.scss'
import * as Icons from '../../common/Icons'
import Link from 'next/link'

const ContactSection = (props: any) => {
  return (
    <section className={styles.home_page__contact}>
      <div className={styles.home_page__contact__header}>
        <h2 className={styles.home_page__title}>COMIENZA HOY MISMO</h2>
        <h3 className={styles.home_page__subtitle}>Solicita tu cotizacion</h3>
      </div>

      <div className={styles.home_page__contact__content}>
        <div className={styles.home_page__contact__info}>
          <div className={styles.home_page__contact_circle} />
          <h2 className={styles.home_page__contact__title}>CONTACTANOS</h2>
          <h4 className={styles.home_page__contact__subtitle}>Nos contactaremos contigo.</h4>

          <div className={styles.home_page__contact__list}>
            <div className={styles.home_page__contact__list__item}>
              <Icons.PhoneIcon className={styles.home_page__contact__list__icon} />
              <strong className=''>
                <Link href='tel:523317354536'>+52 33 1735 4536</Link>
              </strong>
            </div>
            <div className={styles.home_page__contact__list__item}>
              <Icons.WhatsAppIcon className={styles.home_page__contact__list__icon} />
              <strong className=''>
                <Link href='https://wa.me/523314464774'>+52 33 1735 4536</Link>
              </strong>
            </div>
            <div className={styles.home_page__contact__list__item}>
              <Icons.ArrobaIcon className={styles.home_page__contact__list__icon} />
              <strong className=''>
                <Link href='mailto:hello@luve.com'>hello@luve.com</Link>
              </strong>
            </div>
          </div>

          <div className={styles.home_page__contact__map}>
            <iframe src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14927.672913581613!2d-103.34763907398695!3d20.713544891326215!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8428b0324420428d%3A0xe218a584caa8a4f7!2sOXXO%20GAS!5e0!3m2!1ses-419!2smx!4v1677644031648!5m2!1ses-419!2smx' allowFullScreen loading='lazy' referrerPolicy='no-referrer-when-downgrade' style={{ border: 0 }} />
          </div>
        </div>
        <div className=''>
          <ContactForm />
        </div>
      </div>
    </section>
  )
}

export default ContactSection
