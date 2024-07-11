import type { Metadata } from 'next'
import { HomePageSection } from './HomePageSection'

export async function generateMetadata (): Promise<Metadata> {
  return {
    title: 'Luve Consultoría Integral',
    description: 'Consultoría en tecnología, desarrollo y programación.',
    keywords: 'luve, tecnologia, desarrollo, financiero, programacion, consultoria, integral, impuestos, contabilidad',
    robots: 'index, follow',
    authors: {
      name: 'Luve CI'
    },
    other: {
      'og:title': 'Luve Consultoría Integral',
      'og:description': 'Consultoría integral, legal, financiera, tecnologica y contable.',
      'og:image': 'https://s3.us-east-1.amazonaws.com/luve-blog-cms/logo_luve_3d9dbda1f9.svg',
      'og:site_name': 'Luve CI',
      'og:type': 'website',
      'og:url': 'https://luveci.com'
    }
  }
}

export default function HomePage (options: any) {
  return (
    <HomePageSection />
  )
}
