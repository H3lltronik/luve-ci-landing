import apolloClient from '../../data/api/apollo-client'
import { GET_ALL_TAGS } from '../../data/graphql/queries'
import { GetAllTagsQuery } from '../../data/graphql/types'
import BlogsFiltersModal from './BlogsFiltersModal'

export const BlogsFilters = async () => {
  const { data } = await apolloClient.query<GetAllTagsQuery>({
    query: GET_ALL_TAGS
  })

  return (
    <section className='content-container'>
      <header className='py-10 flex gap-5 justify-center items-center'>
        <BlogsFiltersModal
          tags={
            data.tags?.data.map((tag) => ({
              id: tag.id ?? '',
              name: tag.attributes?.name ?? 'Unknown Tag',
              slug: tag.attributes?.slug ?? 'unknown-slug'
            })) ?? []
          }
        />
      </header>
    </section>
  )
}
