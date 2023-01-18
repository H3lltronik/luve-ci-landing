import React from 'react'
import { ContactForm } from '../../common/Forms'
import styles from '../../Page.module.scss'

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
          <h4 className={styles.home_page__contact__subtitle}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h4>
          <p className={styles.home_page__contact__text}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris.
          </p>

          <div className={styles.home_page__contact__list}>
            <div className={styles.home_page__contact__list__item}>
              <div className='' />
              <div className=''>+52 33 1735 4536</div>
            </div>
            <div className={styles.home_page__contact__list__item}>
              <div className='' />
              <div className=''>+52 33 1735 4536</div>
            </div>
            <div className={styles.home_page__contact__list__item}>
              <div className='' />
              <div className=''>hello@luve.com</div>
            </div>
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
