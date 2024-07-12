import { Metadata, ResolvingMetadata } from 'next'
import React from 'react'
import ContactSection from '../home/ContactSection/ContactSection'

type Props = {
  params: { id: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata (
  { params, searchParams }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  return {
    title: 'Contacto',
    description: 'Contacta con nosotros',
    keywords: 'contacto, luve, luve ci, luve contact, luve contacto'
  }
}

export default function ContactPage () {
  return (
    <main>
      <ContactSection />
    </main>
  )
}
