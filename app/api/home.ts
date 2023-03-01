import { Services } from '../../types'
import fs from 'fs'
export const revalidate = 3600

export const getServices = async (): Promise<Services.Service[]> => {
  const services: Services.Service[] = JSON.parse(fs.readFileSync('./assets/data/services.json', 'utf8'))
  return services
}
