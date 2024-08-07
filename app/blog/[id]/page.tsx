import dayjs from 'dayjs'
import parse from 'html-react-parser'
import type { Metadata, ResolvingMetadata } from 'next'
import dynamic from 'next/dynamic'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import apolloClient from '../../../data/api/apollo-client'
import { GET_BLOG_ENTRY_BY_SLUG } from '../../../data/graphql/queries'
import { GetBlogEntryBySlugQuery } from '../../../data/graphql/types'
import { PrimaryButton } from '../../common/Buttons'
import { StructuredData } from '../../components/StructuredData'
import { BlogEntryCard } from '../BlogEntryCard'
import { BlogEntryCardMarquee } from '../BlogEntryCardMarquee'

const SocialsShare = dynamic(() => import('./SocialsShare').then((mod) => mod.SocialsShare))

type Props = {
  params: { id: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata (
  { params, searchParams }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const { data } = await apolloClient.query<GetBlogEntryBySlugQuery>({
    query: GET_BLOG_ENTRY_BY_SLUG,
    variables: { slug: params.id }
  })

  const blogData =
    data.findSlug?.__typename === 'BlogEntryEntityResponse'
      ? data.findSlug.data?.attributes
      : null

  return {
    title: `${blogData?.seo?.metaTitle ?? ''}`,
    description: blogData?.seo?.metaDescription ?? '',
    keywords: blogData?.seo?.keywords ?? '',
    robots: blogData?.seo?.metaRobots ?? '',
    authors: {
      name: blogData?.author?.data?.attributes?.name ?? ''
    },
    alternates: {
      canonical: blogData?.seo?.canonicalURL ?? ''
    },
    openGraph: {
      title: blogData?.seo?.metaTitle ?? '',
      description: blogData?.seo?.metaDescription ?? '',
      images: [
        {
          url: blogData?.seo?.metaImage?.data?.attributes?.url ?? '',
          width: 800,
          height: 600
        }
      ],
      siteName: 'Luve CI',
      type: 'article',
      url: blogData?.seo?.canonicalURL ?? ''
    }
  }
}

export async function generateViewport ({ params }: Props) {
  const { data } = await apolloClient.query<GetBlogEntryBySlugQuery>({
    query: GET_BLOG_ENTRY_BY_SLUG,
    variables: { slug: params.id }
  })

  const blogData =
    data.findSlug?.__typename === 'BlogEntryEntityResponse'
      ? data.findSlug.data?.attributes
      : null

  return blogData?.seo?.metaViewport ?? 'width=device-width, initial-scale=1'
}

export default async function BlogPage ({ params }: { params: { id: string } }) {
  if (!params.id) {
    return notFound()
  }

  const { data } = await apolloClient.query<GetBlogEntryBySlugQuery>({
    query: GET_BLOG_ENTRY_BY_SLUG,
    variables: { slug: params.id }
  })

  const blogData =
    data.findSlug?.__typename === 'BlogEntryEntityResponse'
      ? data.findSlug.data?.attributes
      : null

  if (!blogData) return notFound()

  return (
    <>
      <SocialsShare title={blogData.seo?.metaTitle ?? ''} description={blogData.seo?.metaDescription ?? ''} />
      <StructuredData data={blogData.seo?.structuredData} />
      <header className='content-container md:pt-5 px-10 flex justify-center items-center md:justify-start md:items-start'>
        <div className='inline-block mb-5'>
          <Link href='/blog' aria-label='Back button'>
            <PrimaryButton text='REGRESAR' />
          </Link>
        </div>
      </header>
      <main className='content-container grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-5 md:gap-10 px-0 md:px-10 pb-10'>
        <section className='overflow-y-auto max-h-[unset]'>
          <article>
            <div className='md:rounded-lg overflow-hidden relative h-[200px] md:h-[300px] lg:h-[545px]'>
              <Image
                src={blogData.cover_picture?.data?.attributes?.url ?? ''}
                fill
                alt={
                  blogData.cover_picture?.data?.attributes?.alternativeText ??
                  ''
                }
                className='object-cover w-full h-full'
                blurDataURL={
                  blogData.cover_picture?.data?.attributes?.formats.thumbnail
                    ?.url ?? ''
                }
              />
            </div>
            <div className='md:translate-y-[-50px] bg-white md:rounded-lg p-4 md:p-5 overflow-hidden md:mx-5 shadow-[0px_20px_20px_10px_#00000024]'>
              <header className='border-b-[1px] pb-2'>
                <div className='flex items-center gap-5'>
                  <strong className='text-xl md:text-2xl text-[#535353] uppercase whitespace-nowrap'>
                    {dayjs(blogData.date).format('MMMM D, YYYY')}
                  </strong>
                  <div className='md:h-[25px] w-[3px] bg-[#535353]' />
                  <BlogEntryCardMarquee
                    tags={
                      blogData.tags?.data.map((tag) => ({
                        id: tag.id ?? '',
                        name: tag.attributes?.name ?? 'Unknown Tag',
                        slug: tag.attributes?.slug ?? 'unknown-slug'
                      })) ?? []
                    }
                  />
                </div>
                <h1 className='text-2xl md:text-3xl text-black uppercase tracking-wider mt-3'>
                  {blogData.title}
                </h1>
              </header>
              <main className='ck-content my-10 px-1 md:px-10'>
                {blogData.content_t && parse(blogData.content_t)}
              </main>
              <footer className='border-t-[1px]'>
                <div className='flex flex-col justify-center items-center gap-3 mt-5'>
                  <div className='w-[50px] h-[50px] rounded-full overflow-hidden relative'>
                    <Image
                      src={
                        blogData.author?.data?.attributes?.avatar.data
                          ?.attributes?.url ?? 'default-author-image.jpg'
                      }
                      fill
                      alt={
                        blogData.author?.data?.attributes?.avatar.data
                          ?.attributes?.alternativeText ??
                        'Default Author Image'
                      }
                    />
                  </div>
                  <div>
                    <h3 className='text-2xl text-center mb-2'>
                      {blogData.author?.data?.attributes?.name}
                    </h3>
                    <p className='text-[#535353] text-sm text-center px-4 md:px-10'>
                      {blogData.author?.data?.attributes?.description}
                    </p>
                  </div>
                </div>
              </footer>
            </div>
          </article>
          {/* <nav className='flex items-center justify-center gap-5 mb-[2rem] -translate-y-1'>
            <div className='inline-block'>
              <PrimaryButton text='ANTERIOR' />
            </div>
            <div className='inline-block'>
              <PrimaryButton text='SIGUIENTE' />
            </div>
          </nav> */}
        </section>
        <aside className='w-full lg:w-[400px] flex-[0_0_400px]'>
          <h2 className='text-3xl text-right font-bold mb-2'>
            ENTRADAS RELACIONADAS
          </h2>
          <div className='flex flex-col gap-5'>
            {blogData.related_entries?.data.map((entry) => (
              <BlogEntryCard
                slug={entry.attributes?.slug ?? 'default-slug'}
                title={entry.attributes?.preview_title ?? 'Default Title'}
                description={
                  entry.attributes?.preview_description ?? 'Default Description'
                }
                imageUrl={
                  entry.attributes?.preview_picture.data?.attributes?.url ??
                  'default-image-url.jpg'
                }
                imageAlt={
                  entry.attributes?.preview_picture.data?.attributes
                    ?.alternativeText ?? 'Default Alt Text'
                }
                authorName={
                  entry.attributes?.author?.data?.attributes?.name ??
                  'Anonymous'
                }
                authorImageUrl={
                  entry.attributes?.author?.data?.attributes?.avatar.data
                    ?.attributes?.url ?? 'default-author-image.jpg'
                }
                publicationDate={dayjs(entry.attributes?.date).format(
                  'MMMM D, YYYY'
                )}
                tags={
                  entry.attributes?.tags?.data?.map((tag) => ({
                    id: tag.id ?? '',
                    name: tag.attributes?.name ?? 'Unknown Tag',
                    slug: tag.attributes?.slug ?? 'unknown-slug'
                  })) ?? []
                }
                hoverImages={
                  entry.attributes?.preview_hover_pictures?.data?.map(
                    (img) => img.attributes?.url ?? ''
                  ) ?? []
                }
                key={entry.id}
              />
            ))}
          </div>
        </aside>
      </main>
    </>
  )
}
