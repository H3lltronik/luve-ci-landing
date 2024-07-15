import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import IconButton from '../../common/Buttons/IconButton'
import styles from '../../Page.module.scss'
import messengerLogo from '../../../assets/messenger_logo.png'

type FloatingSocialsContactProps = {
    whatsappMsg?: string
}

export const FloatingSocialsContact = (props: FloatingSocialsContactProps) => {
  let whatsappMsg = encodeURIComponent(props.whatsappMsg || '')
  whatsappMsg = `?text=${whatsappMsg}`

  return (
    <>
      <Link href={`https://wa.me/523344515189${whatsappMsg}`} target='_blank' rel='noreferrer'>
        <IconButton className={styles.home_page__floating_whatsapp} icon='WhatsAppIcon2' ariaLabel='Whatsapp' />
      </Link>
      <Link href='https://m.me/107987504244709' target='_blank' rel='noreferrer'>
        <div className={`${styles.home_page__floating_messenger}`}>
          <Image src={messengerLogo.src} alt='Facebook messenger' width={40} height={40} />
        </div>
      </Link>
    </>
  )
}
