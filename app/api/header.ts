import { Services, Header } from '../../types'
import fs from 'fs'
export const revalidate = 3600

const headerData: Header.Data = {
  links: [
    {
      label: 'Inicio',
      path: '/',
      type: 'link',
      order: 1
    },
    {
      label: 'Nosotros',
      path: '/luve',
      type: 'link',
      order: 2
    },
    {
      label: 'Contacto',
      path: '/contact',
      type: 'link',
      order: 4
    }
  ]
}

export const getLinks = async (): Promise<Header.Data> => {
  const servicesItem = {
    label: 'Servicios',
    path: '/services',
    type: 'list',
    order: 3,
    children: {}
  }

  const headerLinks = JSON.parse(JSON.stringify(headerData))
  const services: Services.Service[] = JSON.parse(fs.readFileSync('./assets/data/services.json', 'utf8'))

  servicesItem.children = services.map((service, index) => ({
    label: service.title,
    path: `/services/${service.id}`,
    type: 'link',
    order: index
  }))

  headerLinks.links.push(servicesItem)

  headerLinks.links.sort((a: Services.Service, b: Services.Service) => a.order - b.order)
  return headerLinks
}
