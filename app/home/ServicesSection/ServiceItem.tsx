import React from 'react'
import styles from './ServicesSection.module.scss'
import { PrimaryButton } from '../../common/Buttons'
import Link from 'next/link'

type Service = {
  id: Number,
  slug: String,
  title: String,
  description: String,
  link: String,
  image: String,
  items: Array<String>,
  order: Number
}
type ServiceItemProps = {
  inverted?: Boolean,
  item: Service
}
const ServiceItem: React.FC<ServiceItemProps> = (props) => {
  const { item } = props
  return (
    <div className={`${styles.home_services__item} ${props.inverted ? styles['home_services__item--inverse'] : ''}`}>
      <div className={styles.home_services__item__image}>
        <img src={item.image} alt='' />
      </div>
      <div className={styles.home_services__item__content}>
        <h2 className={styles.home_services__item__title}>{item.title}</h2>
        <h3 className={styles.home_services__item__title}>{item.description}</h3>

        <ol>
          {item.items.map((item, index) => (
            <li key={index}><p>{item}</p></li>
          ))}
        </ol>

        <Link href={`/services/${item.id}/${item.slug}`}>
          <PrimaryButton className={styles.home_services__item__button} />
        </Link>
      </div>
    </div>
  )
}

export default ServiceItem
