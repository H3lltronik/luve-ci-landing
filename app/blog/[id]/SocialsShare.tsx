'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import IconButton from '../../common/Buttons/IconButton'

type SocialsProps = {
  title: string;
};

const generateTwitterShareLink = (title: string, url: string) => {
  const text = `${title}`
  const encodedText = encodeURIComponent(text)
  const encodedUrl = encodeURIComponent(url)
  return `https://twitter.com/intent/tweet?text=${encodedText}&url=${encodedUrl}`
}

const generateFacebookShareLink = (url: string) => {
  const encodedUrl = encodeURIComponent(url)
  return `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`
}

const generateLinkedInShareLink = (url: string) => {
  const encodedUrl = encodeURIComponent(url)
  return `https://www.linkedin.com/shareArticle?url=${encodedUrl}`
}

const generateWhatsAppShareLink = (url: string) => {
  const encodedUrl = encodeURIComponent(url)
  const text = `¡Hola! Te comparto este artículo que me pareció interesante: ${encodedUrl}`
  const encodedText = encodeURIComponent(text)

  return `https://api.whatsapp.com/send?text=${encodedText}`
}

const generateThreadsShareLink = (title: string, url: string) => {
  const encodedUrl = encodeURIComponent(url)
  const text = `${title}%0A%0A${encodedUrl}`

  return `https://www.threads.net/intent/post?text=${text}`
}

export const SocialsShare = (props: SocialsProps) => {
  const pathname = usePathname()
  const currentUrl = `${process.env.NEXT_PUBLIC_SITE_URL}${pathname}`

  return (
    <div className='fixed bottom-0 md:bottom-1/2 right-0 md:translate-y-1/2 bg-[#e31937] h-[50px] w-full md:w-[50px] z-[5] flex flex-row md:flex-col items-center justify-center'>
      <span className='text-white text-sm md:hidden'>Compartir:</span>
      <Link
        target='_blank'
        href={generateTwitterShareLink(props.title, currentUrl)}
      >
        <IconButton
          icon='TwitterIcon'
          classNameBtn='!w-[50px] !h-[50px] !rounded-none hover:!bg-[#00acee] text-xl'
        />
      </Link>
      <Link href={generateFacebookShareLink(currentUrl)} target='_blank'>
        <IconButton
          icon='FacebookIcon'
          classNameBtn='!w-[50px] !h-[50px] !rounded-none hover:!bg-[#3b5998] text-xl'
        />
      </Link>
      <Link
        target='_blank'
        href={generateThreadsShareLink(props.title, currentUrl)}
      >
        <IconButton
          icon='ThreadsIcon'
          classNameBtn='!w-[50px] !h-[50px] !rounded-none hover:!bg-[#0077b5] text-xl'
        />
      </Link>
      <Link href={generateLinkedInShareLink(currentUrl)} target='_blank'>
        <IconButton
          icon='LinkedInIcon'
          classNameBtn='!w-[50px] !h-[50px] !rounded-none hover:!bg-[#0e76a8] text-xl'
        />
      </Link>
      <Link href={generateWhatsAppShareLink(currentUrl)} target='_blank'>
        <IconButton
          icon='WhatsAppIcon'
          classNameBtn='!w-[50px] !h-[50px] !rounded-none hover:!bg-[#25d366] text-2xl'
        />
      </Link>
    </div>
  )
}
