import { Services, Header } from '../../types'
import fs from 'fs'
export const revalidate = 3600

const headerData: Header.Data = {
  links: [
    {
      label: 'Inicio',
      path: '/',
      type: 'link',
      priority: 1
    },
    {
      label: 'Nosotros',
      path: '/luve',
      type: 'link',
      priority: 2
    },
    {
      label: 'Blog',
      path: '/blog',
      type: 'link',
      priority: 4
    },
    {
      label: 'Contacto',
      path: '/contact',
      type: 'link',
      priority: 5
    }
  ]
}

export const getLinks = async (): Promise<Header.Data> => {
  const servicesItem = {
    label: 'Servicios',
    path: '/services',
    type: 'list',
    priority: 3,
    children: {}
  }

  const headerLinks = JSON.parse(JSON.stringify(headerData))
  const services: Services.Service[] = JSON.parse(fs.readFileSync('./assets/data/services.json', 'utf8'))

  servicesItem.children = services.map((service, index) => ({
    label: service.title,
    path: `/services/${service.id}/${service.slug}`,
    type: 'link',
    priority: index
  }))

  headerLinks.links.push(servicesItem)

  headerLinks.links.sort((a: Services.Service, b: Services.Service) => a.priority - b.priority)
  return headerLinks
}
