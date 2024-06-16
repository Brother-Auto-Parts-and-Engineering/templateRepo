import { ApolloServer } from 'apollo-server-lambda'
import cors from 'cors'
import express from 'express'
import { graphqlUploadExpress } from 'graphql-upload'
import resolver from './resolvers'
import typeDef from './typeDefs'
const server = new ApolloServer({
  typeDefs: typeDef,
  resolvers: resolver
})
const app = express()
export const graphqlHandler = server.createHandler({
  expressAppFromMiddleware(middleware) {
    app.use(graphqlUploadExpress())
    app.use(middleware)
    app.use(cors())
    return app
  }
})