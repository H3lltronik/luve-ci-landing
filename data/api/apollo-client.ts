import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client'

const cache = new InMemoryCache({
  typePolicies: ['Tag', 'BlogEntry', 'Author'].reduce(
    (acc, type) => ({ ...acc, [type]: { merge: true } }),
    {}
  )
})

const apolloClient = new ApolloClient({
  link: new HttpLink({
    uri: `${process.env.NEXT_PUBLIC_STRAPI_GRAPHQL_URL}`,
    headers: {
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_STRAPI_API_TOKEN}`
    }
  }),
  cache
})

export default apolloClient
