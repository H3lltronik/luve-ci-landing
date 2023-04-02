import HeaderCommons from '../../../common/HeaderCommons'
import services from '../../../../assets/data/services.json'
import { Services } from '../../../../types'

const loadService = async (id: string): Promise<Services.Service | undefined> => {
  const service = services.find((service) => service.id === id)
  return service
}

export default async function Head ({ params } : any) {
  const service = await loadService(params.id)
  const title = `${service ? service.meta.title : 'Not found'}`
  const description = service ? service.meta.description : 'Not found'

  return (
    <>
      <title>{title}</title>

      <meta name='description' content={description} />
      <HeaderCommons />
    </>
  )
}
