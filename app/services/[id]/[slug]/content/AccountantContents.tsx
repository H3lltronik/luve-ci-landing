import { FunctionComponent } from 'react'
import { Services } from '../../../../../types'
import { GridSection } from '../../../../home'
import SubServiceItem from '../../../../home/ServicesSection/SubServiceItem'
import styles from '../../../ServicesPage.module.scss'
import * as Icons from '../../../../common/Icons'

const gridItems = [
  {
    title: 'Asesorias',
    description: (
      <>
        <ul>
          <li>Contables</li>
          <li>Fiscales</li>
          <li>Administrativos</li>
        </ul>
      </>
    ),
    icon: <Icons.InfoIcon />
  },
  {
    title: 'Contabilidades',
    description: 'Contabilidades personas fisicas y morales de manera mensual para los diferentes tipos de regimen',
    icon: <Icons.BoardTableIcon />
  },
  {
    title: 'Nóminas',
    description: 'Nominas con timbrado semanal, quincenal o mensual.',
    icon: <Icons.GraphIcon />
  },
  {
    title: 'Declaraciones Anuales',
    description: '',
    icon: <Icons.GroupIcon />
  },
  {
    title: 'Facturacion Electronica ',
    description: '',
    icon: <Icons.GroupIcon />
  },
  {
    title: 'Tramites Electronicos S.A.T',
    description: '',
    icon: <Icons.GroupIcon />
  }
]

interface AccountantContentsProps {
    service: Services.Service
}

const AccountantContents: FunctionComponent<AccountantContentsProps> = (props) => {
  const { service } = props
  const grid1Title = (<>Servicios Individuales</>)
  const grid2Title = (<>Paquetes Contables</>)

  return (
    <div className={styles.area_page}>

      <section className={styles.area_page__items}>
        {/* <h2 className={`${styles.underlined_title} ${styles.area_page__title}`}>Catalogo Financiero</h2> */}
        <GridSection items={gridItems} title={grid1Title} button />
      </section>

      <section className={styles.area_page__items}>
        {/* <h2 className={`${styles.underlined_title} ${styles.area_page__title}`}>Catalogo Financiero</h2> */}
        <GridSection items={gridItems} title={grid2Title} button />
      </section>
    </div>
  )
}

export default AccountantContents
