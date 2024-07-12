import dayjs from 'dayjs'
import Link from 'next/link'
import apolloClient from '../../data/api/apollo-client'
import { GET_HIGHLIGHTED_BLOG } from '../../data/graphql/queries'
import { GetHighlightedBlogQuery } from '../../data/graphql/types'
import { PrimaryButton } from '../common/Buttons'
import Tag from './components/Tag/Tag'

const BlogHighlightedBanner = async () => {
  const { data } = await apolloClient.query<GetHighlightedBlogQuery>({
    query: GET_HIGHLIGHTED_BLOG
  })

  if (!data.blogEntryHighlighted?.data?.attributes?.enabled) {
    return null
  }

  return (
    <section className='w-full h-[400px] md:h-[300px] relative overflow-hidden'>
      <div
        className='w-full h-full absolute'
        style={{
          backgroundImage: `url(${
            data.blogEntryHighlighted?.data?.attributes?.image.data?.attributes
              ?.url ?? 'default-image-url.jpg'
          })`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
        role='img'
        aria-label='Highlighted banner background'
      >
        <div className='h-full w-[25%] left-0 top-0 absolute bg-gradient-to-r from-black to-transparent z-10' />
        <div className='h-full w-[25%] right-0 top-0 absolute bg-gradient-to-l from-black to-transparent z-10' />

        <div className='w-full h-full z-10 absolute flex'>
          <div className='max-w-[1530px] flex flex-col gap-3 my-auto w-full mx-auto px-[1rem] md:px-[5rem]'>
            <header className=''>
              <div className='flex items-center gap-1 md:gap-5 flex-col md:flex-row mb-5 md:mb-0'>
                <strong
                  className='text-2xl md:text-3xl uppercase'
                  style={{
                    color:
                      data.blogEntryHighlighted?.data?.attributes?.date_color ??
                      '#cccccc'
                  }}
                >
                  {dayjs(
                    data.blogEntryHighlighted?.data?.attributes?.date
                  ).format('MMMM D, YYYY') ?? 'Default Date'}
                </strong>
                <div
                  className='md:h-[30px] w-[5px] bg-[#cccccc]'
                  role='separator'
                  aria-label='Separator'
                  style={{
                    backgroundColor:
                      data.blogEntryHighlighted?.data?.attributes?.date_color ??
                      '#cccccc'
                  }}
                />
                <Tag
                  mode='normal'
                  type='normal'
                  text={
                    data.blogEntryHighlighted?.data?.attributes?.tag?.data
                      ?.attributes?.name ?? 'Default Tag'
                  }
                />
              </div>
              <h2
                className='font-bold underline w-auto md:w-[600px] tracking-wide uppercase text-center md:text-left'
                style={{
                  color:
                    data.blogEntryHighlighted?.data?.attributes?.title_color ??
                    '#ffffff'
                }}
              >
                {data.blogEntryHighlighted?.data?.attributes?.title ??
                  'Default Title'}
              </h2>
            </header>
            <p
              className='text-white line-clamp-4 text-center md:text-left'
              style={{
                color:
                  data.blogEntryHighlighted?.data?.attributes
                    ?.description_color ?? '#ffffff'
              }}
            >
              {data.blogEntryHighlighted?.data?.attributes?.description ??
                'Default Description'}
            </p>
            <div className='mx-auto md:mx-0'>
              <Link
                href={`/blog/${
                  data.blogEntryHighlighted?.data?.attributes?.blog_entry?.data
                    ?.attributes?.slug ?? 'default-slug'
                }`}
                aria-label='Read more button'
              >
                <div className='inline-block'>
                  <PrimaryButton text='Leer más' />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default BlogHighlightedBanner
