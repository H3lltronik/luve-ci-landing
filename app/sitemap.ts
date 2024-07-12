import { MetadataRoute } from 'next'
import { Services } from '../types'
import fs from 'fs'
import { GET_BLOG_POSTS } from '../data/graphql/queries'
import apolloClient from '../data/api/apollo-client'
import { GetBlogPostsQuery } from '../data/graphql/types'

export default async function sitemap (): Promise<MetadataRoute.Sitemap> {
  const services: Services.Service[] = JSON.parse(
    fs.readFileSync('./assets/data/services.json', 'utf8')
  )

  const servicesUrls = services.map((service) => ({
    url: `${process.env.NEXT_PUBLIC_SITE_URL}/services/${service.id}/${service.slug}`,
    lastModified: new Date().toISOString(),
    priority: 0.8
  }))

  const { data: blogPosts } = await apolloClient.query<GetBlogPostsQuery>({
    query: GET_BLOG_POSTS
  })

  const blogUrls = blogPosts.blogEntries?.data.map((entry) => ({
    url: `${process.env.NEXT_PUBLIC_SITE_URL}/blog/${entry.attributes?.slug}`,
    lastModified: new Date().toISOString(),
    priority: 0.8
  })) ?? []

  return [
    {
      url: `${process.env.NEXT_PUBLIC_SITE_URL}/`,
      lastModified: new Date().toISOString(),
      priority: 1
    },
    {
      url: `${process.env.NEXT_PUBLIC_SITE_URL}/luve`,
      lastModified: new Date().toISOString(),
      priority: 1
    },
    {
      url: `${process.env.NEXT_PUBLIC_SITE_URL}/blog`,
      lastModified: new Date().toISOString(),
      priority: 1
    },
    {
      url: `${process.env.NEXT_PUBLIC_SITE_URL}/contact`,
      lastModified: new Date().toISOString(),
      priority: 1
    },
    ...servicesUrls,
    ...blogUrls
  ]
}
