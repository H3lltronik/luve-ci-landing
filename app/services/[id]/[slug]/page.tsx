import styles from '../../ServicesPage.module.scss'
import luvePageStyles from '../../../luve/LuvePage.module.scss'
import services from '../../../../assets/data/services.json'
import ContactSection from '../../../home/ContactSection/ContactSection'
import { Services } from '../../../../types'

import FinantialContents from '../../content/FinantialContents'
import AccountantContents from '../../content/AccountantContents'
import SoftwareContent from '../../content/Software/SoftwareContent'
import InnerPageHeader from '../../../common/InnerPageHeader/InnerPageHeader'

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
      <InnerPageHeader image={{ src: service.image.src, alt: '' }} title='Luve' subtitle={service.title} />

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
