import { FunctionComponent } from 'react'
import { Services } from '../../../types'
import { GridSection } from '../../home'
import SubServiceItem from '../../home/ServicesSection/SubServiceItem'
import styles from '../ServicesPage.module.scss'
import * as Icons from '../../common/Icons'

const gridItems = [
  {
    title: 'Solicitar Informacion',
    description: 'Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum ',
    icon: <Icons.InfoIcon />
  },
  {
    title: 'Integracion de Expediente',
    description: 'Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum ',
    icon: <Icons.BoardTableIcon />
  },
  {
    title: 'Análisis y Propuesta',
    description: 'Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum ',
    icon: <Icons.GraphIcon />
  },
  {
    title: 'Formalización',
    description: 'Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum ',
    icon: <Icons.GroupIcon />
  }
]

interface FinantialContentsProps {
    service: Services.Service
    path?: string
}

const FinantialContents: FunctionComponent<FinantialContentsProps> = (props) => {
  const { service } = props
  const gridTitle = (<>Proc<span className='red'>e</span>so de Financiami<span className='red'>e</span>nto</>)

  return (
    <div className={styles.area_page}>
      <GridSection items={gridItems} title={gridTitle} />

      <section className={styles.area_page__items}>
        <h2 className={`${styles.underlined_title} ${styles.area_page__title}`}>Catalogo Financiero</h2>
        {/* <SubServiceItem item={service.items[0]} /> */}
        {
          service.items.map((item, index) => {
            return (
              <SubServiceItem item={item} key={index} inverted={index % 2 != 0} />
            )
          })
        }
      </section>
    </div>
  )
}

export default FinantialContents
