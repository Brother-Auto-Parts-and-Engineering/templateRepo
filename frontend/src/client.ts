import {
  ApolloClient,
  InMemoryCache,
  NormalizedCacheObject
} from '@apollo/client'
import { setContext } from '@apollo/client/link/context'
import createUploadLink from 'apollo-upload-client/createUploadLink.mjs'

const url = 'http://localhost:4000/graphql'

export function getClient(): ApolloClient<NormalizedCacheObject> {
  const httpLink = createUploadLink({
    uri: url
  })

  const authLink = setContext(async (_, { headers }) => {
    const token = localStorage.getItem('token')

    return {
      headers: {
        ...headers,
        authorization: token ? `Bearer ${token}` : ''
      }
    }
  })
  const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache({ addTypename: false })
  })
  return client
}