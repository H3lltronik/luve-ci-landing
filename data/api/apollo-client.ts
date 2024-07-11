import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";

const cache = new InMemoryCache({
  typePolicies: {
    BlogEntry: {
      fields: {
        attributes: {
          merge(existing = {}, incoming) {
            return { ...existing, ...incoming };
          },
        },
      },
    },
    Tag: {
      keyFields: ["slug"],
      fields: {
        attributes: {
          merge(existing, incoming) {
            return { ...existing, ...incoming };
          },
        },
      },
    },
  },
});

const apolloClient = new ApolloClient({
  link: new HttpLink({
    uri: "http://localhost:1337/graphql",
    headers: {
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_STRAPI_API_TOKEN}`,
    },
  }),
  cache,
});

export default apolloClient;
