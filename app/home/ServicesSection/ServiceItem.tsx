import React from 'react'
import styles from './ServicesSection.module.scss'
import { PrimaryButton } from '../../common/Buttons'
import Link from 'next/link'
import { Services } from '../../../types'

type ServiceItemProps = {
  inverted?: Boolean,
  slider?: Boolean,
  item: Services.Service
  actionButtonText?: string
}
const ServiceItem: React.FC<ServiceItemProps> = (props) => {
  const { item } = props
  return (
    <div className={`${styles.home_services__item} ${props.inverted ? styles['home_services__item--inverse'] : ''}`}>
      <div className={styles.home_services__item__image}>
        <div className='position_relative'>
          <img src={item.image.src} alt='' />
          <div className='luve_logo_watermark' />
        </div>
      </div>
      <div className={styles.home_services__item__wrapper}>
        <div className={styles.home_services__item__content}>
          <h2 className={styles.home_services__item__title}>{item.name}</h2>
          <p className={styles.home_services__item__text}>{item.body}</p>
        </div>

        <div className={styles.home_services__item__button}>
          <Link href={`/services/${item.id}/${item.slug}`}>
            <PrimaryButton text={`${props.actionButtonText || 'MAS INFORMACION'} `} />
          </Link>
        </div>

        <div className={styles.home_services__item__hr}>
          <hr />
        </div>
      </div>
    </div>
  )
}

export default ServiceItem
