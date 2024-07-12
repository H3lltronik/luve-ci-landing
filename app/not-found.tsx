import { Metadata, ResolvingMetadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import NotFoundImage from '../assets/not-found.svg'

type Props = {
  params: { id: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata (
  { params, searchParams }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  return {
    title: 'Luve - No se encontro el recurso 😕',
    description: 'No se encontro el recurso 😕'
  }
}

export default function NotFound () {
  return (
    <main className='content-container'>
      <h1 className='text-center mt-[200px]'>No se encontro el recurso 😕</h1>
      <div className='text-center'>
        <Link href='/' className='text-[#0070f3]'>Volver al inicio</Link>
      </div>
      <Image
        src={NotFoundImage}
        alt='Not Found'
        width={NotFoundImage.width}
        height={NotFoundImage.height}
      />
    </main>
  )
}
