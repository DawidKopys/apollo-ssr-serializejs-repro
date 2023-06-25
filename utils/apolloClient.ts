import { ApolloClient, InMemoryCache } from '@apollo/client/core'

function createApolloClient (nuxtApp: any) {
  const cache = new InMemoryCache()

  // Pass state from server side to client side
  if (process.client) {
    const state = JSON.parse(nuxtApp.payload.apolloState || '{}')
    if (state) {
      // If you have multiple clients, use `state.<client_id>`
      cache.restore(state.default)
    }
  }
  
  const apolloClient = new ApolloClient({
    uri: 'https://swapi-graphql.netlify.app/.netlify/functions/index',
    cache: cache,
    ...(process.server
      ? {
          // Set this on the server to optimize queries when SSR
          ssrMode: true
        }
      : {
          // This will temporary disable query force-fetching
          ssrForceFetchDelay: 100
        }
    )
  })

  return apolloClient
}

export { createApolloClient }
