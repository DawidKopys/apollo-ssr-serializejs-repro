import { serializeStates } from '@vue/apollo-ssr'
import { createApolloClient } from '~/utils/apolloClient.ts'
import { provideApolloClient, ApolloClients } from '@vue/apollo-composable'

export default defineNuxtPlugin((nuxt) => {
  const apolloClient = createApolloClient(nuxt)

  nuxt.vueApp.provide(ApolloClients, { default: apolloClient })
  provideApolloClient(apolloClient)

  nuxt.hook('app:rendered', () => {
    nuxt.payload.apolloState = serializeStates({ default: apolloClient })
  })
})
