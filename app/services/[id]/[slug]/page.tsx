import styles from '../../ServicesPage.module.scss'
import services from '../../../../assets/data/services.json'
import ContactSection from '../../../home/ContactSection/ContactSection'
import { Services } from '../../../../types'

import FinantialContents from '../../content/FinantialContents'
import AccountantContents from '../../content/AccountantContents'
import SoftwareContent from '../../content/Software/SoftwareContent'
import InnerPageHeader from '../../../common/InnerPageHeader/InnerPageHeader'
import type { Metadata, ResolvingMetadata } from 'next'
import { notFound } from 'next/navigation'

const loadService = async (id: string): Promise<Services.Service | undefined> => {
  const service = services.find((service) => service.id === id)
  return service
}

// export default async function Head ({ params } : any) {
//   const service = await loadService(params.id)
//   const title = `${service ? service.meta.title : 'Not found'}`
//   const description = service ? service.meta.description : 'Not found'

//   return (
//     <>
//       <title>{title}</title>

//       <meta name='description' content={description} />
//       <HeaderCommons />
//     </>
//   )
// }

type Props = {
  params: { id: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata (
  { params, searchParams }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const service = await loadService(params.id)

  return {
    title: service ? service.meta.title : 'Not found',
    description: service ? service.meta.description : 'Not found',
    keywords: service ? service.meta.keywords : 'Not found'
  }
}

export default async function ServicesPage (props: any) {
  const { params } = props
  const service = await loadService(params.id)
  if (!service) return notFound()

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
