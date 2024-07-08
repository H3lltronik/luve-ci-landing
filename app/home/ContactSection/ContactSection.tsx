import Link from 'next/link'
import React from 'react'
import messengerLogo from '../../../assets/messenger_logo.png'
import IconButton from '../../common/Buttons/IconButton'
import { ContactForm } from '../../common/Forms'
import * as Icons from '../../common/Icons'
import styles from '../../Page.module.scss'

type ContactSectionProps = {
  className?: string
  whatsappMsg?: string
}
const ContactSection: React.FC<ContactSectionProps> = (props) => {
  let whatsappMsg = encodeURIComponent(props.whatsappMsg || '')
  whatsappMsg = `?text=${whatsappMsg}`

  return (
    <section id='contact' className={`${styles.home_page__contact} ${props.className}`}>
      <div data-aos='fade-in' className={styles.home_page__contact__header}>
        <h2 className={styles.home_page__title}>COMIENZA HOY MISMO</h2>
        <h3 className={styles.home_page__subtitle}>Solicita tu cotizacion</h3>
      </div>

      <div className={styles.home_page__contact__content}>
        <div data-aos='fade-in' className={styles.home_page__contact__info}>
          <div className={styles.home_page__contact_circle} />
          <h2 className={styles.home_page__contact__title}>CONTACTANOS</h2>
          <h4 className={styles.home_page__contact__subtitle}>Nos contactaremos contigo.</h4>

          <div className={styles.home_page__contact__list}>
            <div className={styles.home_page__contact__list__item}>
              <Icons.PhoneIcon className={styles.home_page__contact__list__icon} />
              <strong className=''>
                <Link href='tel:523333624042'>+52 33 3362 4042</Link>
              </strong>
            </div>
            <div className={styles.home_page__contact__list__item}>
              <Icons.WhatsAppIcon className={styles.home_page__contact__list__icon} />
              <strong className=''>
                <Link href='https://wa.me/523344515189&text=¡Hola%20Luve!%20👋👋%0AEstoy%20en%20tu%20sitio%20web%2C%20quisiera%20recibir%20mas%20informacion.'>+52 33 4451 5189</Link>
              </strong>
            </div>
            <div className={styles.home_page__contact__list__item}>
              <Icons.ArrobaIcon className={styles.home_page__contact__list__icon} />
              <strong className=''>
                <Link href='mailto:contacto@luve.com'>contacto@luve.com</Link>
              </strong>
            </div>
          </div>

          <div className={styles.home_page__contact__map}>
            <iframe src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d784.533366781623!2d-103.3816750948716!3d20.71466470412939!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8428afca156ac4a1%3A0xb1afa32dd0e9b17f!2sJacarandas%2C%2045160%20Zapopan%2C%20Jal.!5e0!3m2!1ses-419!2smx!4v1679720076602!5m2!1ses-419!2smx' allowFullScreen loading='lazy' referrerPolicy='no-referrer-when-downgrade' style={{ border: 0 }} />
          </div>
        </div>
        <div data-aos='fade-in' className=''>
          <ContactForm />
        </div>
      </div>

      <Link href={`https://wa.me/523344515189${whatsappMsg}`} target='_blank' rel='noreferrer'>
        <IconButton className={styles.home_page__floating_whatsapp} icon='WhatsAppIcon2' />
      </Link>
      <Link href='https://m.me/107987504244709' target='_blank' rel='noreferrer'>
        <div className={`${styles.home_page__floating_messenger}`}>
          <img src={messengerLogo.src} alt="" />
        </div>
      </Link>
    </section>
  )
}

export default ContactSection
