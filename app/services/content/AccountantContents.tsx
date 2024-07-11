import { FunctionComponent } from 'react'
import { Services } from '../../../types'
import styles from '../ServicesPage.module.scss'
import accountantStyles from './Accountant/AccountantContents.module.scss'
import PromoSlider from './Accountant/PromoSlider'
import Grid from './Accountant/Grid'
import { ServicesSection } from '../../home'
import allServices from '../../../assets/data/services.json'
import { TitleBoldLight } from './Software/TitleBoldLight'

interface AccountantContentsProps {
    service: Services.Service
}

const accountantServices = allServices.find((service) => service.id === '3')
if (accountantServices) {
  for (const accountantService of accountantServices?.items) {
    Object.assign(accountantService, { image: accountantService.images[0] })
  }
}

const AccountantContents: FunctionComponent<AccountantContentsProps> = (props) => {
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
        <h2 className={`${accountantStyles.promotional}`}>Promocionales</h2>
        <PromoSlider images={images} />
      </div>

      <section className={styles.area_page__items}>
        <Grid />
      </section>

      <div className='' style={{ marginBottom: '20px' }}>
        <TitleBoldLight title='¿Te preocupa el cumplimiento de las normas tributarias?' subtitle='Te brindamos soluciones en:' />
      </div>

      <div className='content-container' style={{ overflow: 'hidden' }}>
        <ServicesSection type='subservices' subservices={accountantServices?.items} />
      </div>
    </div>
  )
}

export default AccountantContents
