import { createApolloClient } from '~/utils/apolloClient.ts'
import { provideApolloClient, ApolloClients } from '@vue/apollo-composable'

export default defineNuxtPlugin((nuxt) => {
  const apolloClient = createApolloClient(nuxt)

  nuxt.vueApp.provide(ApolloClients, { default: apolloClient })
  ApolloComposable.provideApolloClient(apolloClient)
})
