import { ApolloClient, HttpLink, InMemoryCache, ApolloLink } from '@apollo/client'
import { onError } from '@apollo/client/link/error'
import { setContext } from '@apollo/client/link/context'

const loggerLink = new ApolloLink((operation, forward) => {
  return forward(operation).map((response) => {
    return response
  })
})

const httpLink = new HttpLink({
  uri: process.env.NEXT_PUBLIC_STRAPI_GRAPHQL_URL,
  fetch: function (uri, options) {
    return fetch(uri, {
      ...options ?? {},
      headers: {
        ...options?.headers ?? {},
        Authorization: `Bearer ${process.env.AUTH_TOKEN}`
      },
      next: {
        revalidate: 3600 // 1 hour
      }
    })
  }
})

const authLink = setContext((_, { headers }) => {
  const token = process.env.NEXT_PUBLIC_STRAPI_API_TOKEN

  return {
    headers: {
      ...headers,
      Authorization: token ? `Bearer ${token}` : ''
    }
  }
})

const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors) {
    graphQLErrors.forEach(({ message, locations, path }) => {
      console.log(`[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`)
    })
  }
  if (networkError) {
    console.log(`[Network error]: ${networkError}`)
  }
})

const link = ApolloLink.from([loggerLink, authLink, errorLink, httpLink])

const cache = new InMemoryCache({
  typePolicies: ['Tag', 'BlogEntry', 'Author'].reduce(
    (acc, type) => ({ ...acc, [type]: { merge: true } }),
    {}
  )
})

const apolloClient = new ApolloClient({
  link,
  cache,
  defaultOptions: {
    query: {
      fetchPolicy: 'no-cache',
      errorPolicy: 'all'
    },
    watchQuery: {
      fetchPolicy: 'no-cache',
      errorPolicy: 'all'
    }
  }
})

export default apolloClient
