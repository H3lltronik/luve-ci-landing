import React from 'react'
import styles from './ServicesSection.module.scss'
import { PrimaryButton } from '../../common/Buttons'

type ServiceItemProps = {
  inverted?: Boolean,
  image: string,
  title: string,
  description: string,
  items: string[]
}
const ServiceItem: React.FC<ServiceItemProps> = (props) => {
  return (
    <div className={`${styles.home_services__item} ${props.inverted ? styles['home_services__item--inverse'] : ''}`}>
      <div className={styles.home_services__item__image}>
        <img src={props.image} alt='' />
      </div>
      <div className={styles.home_services__item__content}>
        <h2 className={styles.home_services__item__title}>{props.title}</h2>
        <h3 className={styles.home_services__item__title}>{props.description}</h3>

        <ol>
          {props.items.map((item, index) => (
            <li key={index}><p>{item}</p></li>
          ))}
        </ol>

        <PrimaryButton className={styles.home_services__item__button} />
      </div>
    </div>
  )
}

export default ServiceItem
