import styles from '../../ServicesPage.module.scss'
import luvePageStyles from '../../../luve/LuvePage.module.scss'
import services from '../../../../assets/data/services.json'
import ContactSection from '../../../home/ContactSection/ContactSection'
import { Services } from '../../../../types'

import FinantialContents from '../../content/FinantialContents'
import AccountantContents from '../../content/AccountantContents'
import SoftwareContent from '../../content/Software/SoftwareContent'

const loadService = async (id: string): Promise<Services.Service | undefined> => {
  const service = services.find((service) => service.id === id)
  return service
}

export default async function ServicesPage (props: any) {
  const { params } = props
  const service = await loadService(params.id)
  if (!service) return (<div style={{ marginTop: '200px' }}>Service not found</div>)

  return (
    <main className={styles.services_page}>
      <header className={luvePageStyles.luve_page__header} style={{ backgroundImage: `url(${service.image.src})` }}>
        <h1>
          <span className={luvePageStyles.luve_page__header__subtitle}>Luve</span>
          <span className={`${luvePageStyles.luve_page__header__title} luve_red`}>{service.title}</span>
        </h1>
        <div className={luvePageStyles.luve_page__header___overlay} />
      </header>

      {
        service.id === '1' && (
          <FinantialContents service={service} />
        )
      }
      {
        service.id === '2' && (
          <SoftwareContent />
        )
      }
      {
        service.id === '3' && (
          <AccountantContents service={service} />
        )
      }

      <div className={`${styles.services_page__contact}`}>
        <div className='content-container'>
          <ContactSection />
        </div>
      </div>
    </main>
  )
}
