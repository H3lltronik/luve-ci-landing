import Image from 'next/image'
import Link from 'next/link'
import NotFoundImage from '../../assets/not-found.svg'

export default function NotFound () {
  return (
    <main className='content-container'>
      <h1 className='text-center'>No se encontro el recurso 😕</h1>
      <div className='text-center'>
        <Link href='/'>Volver al inicio</Link>
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
