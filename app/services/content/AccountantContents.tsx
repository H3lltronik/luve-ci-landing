import { FunctionComponent } from 'react'
import { Services } from '../../../types'
import { GridSection } from '../../home'
import SubServiceItem from '../../home/ServicesSection/SubServiceItem'
import styles from '../ServicesPage.module.scss'
import * as Icons from '../../common/Icons'
import PromoSlider from './Accountant/PromoSlider'

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
    description: <p>Registros contables con declaraciones de personas fisicas y morales de manera mensual o bimestral para los diferentes tipos de regimen</p>,
    icon: <Icons.BoardTableIcon />
  },
  {
    title: 'Nóminas',
    description: <p>Nominas con timbrado semanal, quincenal o mensual.</p>,
    icon: <Icons.GraphIcon />
  },
  {
    title: 'Declaraciones Anuales',
    description: (
      <>
        <ul>
          <li>Asalariados</li>
          <li>Servicios profesionales por honorarios</li>
          <li>Renta de inmuebles</li>
          <li>Actividades empresariales</li>
          <li>RESICO</li>
          <li>RIF</li>
        </ul>
      </>
    ),
    icon: <Icons.GroupIcon />
  },
  {
    title: 'Facturacion Electronica ',
    description: <p>Facturas de ingresos y egresos mensuales para el correcto registro contable-fiscal</p>,
    icon: <Icons.GroupIcon />
  },
  {
    title: 'Tramites Electronicos S.A.T',
    description: (
      <>
        <ul>
          <li>Inscrpción y validación de RFC</li>
          <li>Tramite de e-firma</li>
          <li>Tramite de sellos digitales</li>
          <li>Devolución de IVA</li>
          <li>Avisos de actualización</li>
          <li>Constancias de Situación Fiscal</li>
        </ul>
      </>
    ),
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
  const images = [
    {
      src: '/images/promocionales/Contablidad.png',
      alt: 'image 1'
    },
    {
      src: '/images/promocionales/Declaracion anual.png',
      alt: 'image 2'
    }
  ]

  return (
    <div className={styles.area_page}>

      <div>
        <h2 className={styles.area_page__title}>Promocionales</h2>
        <PromoSlider images={images} />
      </div>

      <section className={styles.area_page__items}>
        <GridSection items={gridItems} title={grid1Title} button />
      </section>
    </div>
  )
}

export default AccountantContents
