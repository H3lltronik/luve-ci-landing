import SubServiceItem from '../../../../home/ServicesSection/SubServiceItem'
import { Services } from '../../../../../types'
import services from '../../../../../assets/data/services.json'
import styles from '../../../ServicesPage.module.scss'
import * as LottieIcons from '../../../[id]/[slug]/AnimatedIcons'
import ContactSection from '../../../../home/ContactSection/ContactSection'

interface ItemPageProps {
}

const loadItem = async (id: any): Promise<Services.Item | undefined> => {
  // const service = services.find((service) => service.items.find((item) => item.id === id))
  for (const service of services) {
    for (const item of service.items) {
      if (Number(item.id) === Number(id)) {
        return item
      }
    }
  }
}

export default async function ItemPage (props: any) {
  const { params } = props
  const item = await loadItem(params.id)

  return (
    <main className={styles.services_page}>
      <div className={`${styles.services_page__container} content-container`}>
        <SubServiceItem item={item} actionButtonText='¡LO QUIERO!' slider />

        <div className={styles.services_page__content}>
          <div className={styles.services_page__content_row}>
            <h2 className={styles.underlined_title}>CARACTERISTICAS</h2>
            <div className={`${styles.services_page__content_grid} content-container`}>
              {
                item.features.map((feature, index) => (
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
                item.requirements.map((requirement, index) => (
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
