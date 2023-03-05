import styles from './Page.module.scss'
import ServicesSlider from '../../ServicesSlider'
import ServiceItem from '../../../home/ServicesSection/ServiceItem'
import { Image, Services } from '../../../../types'
import * as LottieIcons from './AnimatedIcons'
import services from '../../../../assets/data/services.json'
import ContactSection from '../../../home/ContactSection/ContactSection'

const loadService = async (id: string): Promise<Services.Service | undefined> => {
  // const promise = fetch(`${process.env.BASE_FETCH_URL}/data/services.json`, {
  //   next: {
  //     revalidate: 60
  //   }
  // })
  // const services: Services.Service[] = await promise.then((res) => res.json())
  const service = services.find((service) => Number(service.id) === Number(id))
  return service
}

export default async function ServicesPage (props: any) {
  const { params } = props
  const service = await loadService(params.id)
  console.log('service', service)
  if (!service) return (<div>Service not found</div>)

  return (
    <main className={styles.services_page}>
      <div className={`${styles.services_page__container} content-container`}>
        <ServiceItem item={service} actionButtonText='¡LO QUIERO!' slider />

        <div className={styles.services_page__content}>
          <div className={styles.services_page__content_row}>
            <h2 className={styles.underlined_title}>CARACTERISTICAS</h2>
            <div className={`${styles.services_page__content_grid} content-container`}>
              {
                service.features.map((feature, index) => (
                  <div className={styles.services_page__content_grid_item} key={index}>
                    <LottieIcons.LottieIcon icon={feature.icon.name} className={styles['lottie-icon']} />
                    <h3 dangerouslySetInnerHTML={{ __html: feature.title }} />
                  </div>
                ))
              }
            </div>
          </div>
        </div>

        <div className={styles.services_page__content}>
          <div className={styles.services_page__content_row}>
            <h2 className={styles.underlined_title}>REQUISITOS</h2>
            <div className={`${styles.services_page__content_grid} content-container`}>
              {
                service.requirements.map((requirement, index) => (
                  <div className={styles.services_page__content_grid_item} key={index}>
                    <LottieIcons.LottieIcon icon={requirement.icon.name} className={styles['lottie-icon']} />
                    <h3 dangerouslySetInnerHTML={{ __html: requirement.title }} />
                  </div>
                ))
              }
            </div>
          </div>
        </div>

      </div>

      <div className={`${styles.services_page__contact}`}>
        <div className='content-container'>
          <ContactSection />
        </div>
      </div>
    </main>
  )
}
