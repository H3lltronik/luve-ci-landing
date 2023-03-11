import { FunctionComponent } from 'react'
import { Services } from '../../../../../types'
import { GridSection } from '../../../../home'
import SubServiceItem from '../../../../home/ServicesSection/SubServiceItem'
import styles from '../../../ServicesPage.module.scss'

interface FinantialContentsProps {
    service: Services.Service
}

const FinantialContents: FunctionComponent<FinantialContentsProps> = (props) => {
  const { service } = props

  return (
    <div className={styles.area_page}>
      <GridSection />

      <section className={styles.area_page__items}>
        <h2 className={`${styles.underlined_title} ${styles.area_page__title}`}>Catalogo Financiero</h2>
        <SubServiceItem item={service.items[0]} />
      </section>
    </div>
  )
}

export default FinantialContents
