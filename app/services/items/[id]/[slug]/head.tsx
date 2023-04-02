import HeaderCommons from '../../../../common/HeaderCommons'
import services from '../../../../../assets/data/services.json'
import { Services } from '../../../../../types'

const loadItem = async (id: any): Promise<Services.Item | undefined> => {
  for (const service of services) {
    for (const item of service.items) {
      if (Number(item.id) === Number(id)) {
        return item
      }
    }
  }
}

export default async function Head (props: any) {
  const { params } = props
  const item = await loadItem(params.id)

  const title = `${item ? item.meta.title : 'Not found'}`
  const description = item ? item.meta.description : 'Not found'

  return (
    <>
      <title>{title}</title>
      <meta name='description' content={description} />
      <HeaderCommons />
    </>
  )
}
