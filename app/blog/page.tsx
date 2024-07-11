import dayjs from 'dayjs'
import apolloClient from '../../data/api/apollo-client'
import { GET_BLOG_POSTS } from '../../data/graphql/queries'
import { GetBlogPostsQuery } from '../../data/graphql/types'
import { BlogEntryCard } from './BlogEntryCard'
import BlogHighlightedBanner from './BlogHighlightedBanner'
require('dayjs/locale/es')
dayjs.locale('es')

export default async function BlogsPage ({
  searchParams
}: {
  searchParams: { search: string; tags: string };
}) {
  const splittedTags = searchParams.tags?.split(',').filter(Boolean) ?? []

  const { data } = await apolloClient.query<GetBlogPostsQuery>({
    query: GET_BLOG_POSTS,
    variables: {
      title: searchParams.search,
      tagSlugs: splittedTags.length > 0 ? splittedTags : undefined
    }
  })

  return (
    <div className='mb-[5rem]'>
      <section className='mb-[5rem]'>
        {/* <BlogHighlightedBanner /> */}
      </section>

      <section className='content-container'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-[7rem] gap-y-[3rem] px-4'>
          {data.blogEntries?.data.map((entry) => (
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
                entry.attributes?.author?.data?.attributes?.name ?? 'Anonymous'
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
      </section>
    </div>
  )
}
