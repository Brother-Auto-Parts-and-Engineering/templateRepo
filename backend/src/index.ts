import { ApolloServer } from 'apollo-server-express';
import cors from 'cors';
import express from 'express';
import { graphqlUploadExpress } from 'graphql-upload';
import { createServer } from 'http';
import resolvers from './resolvers';
import typeDefs from './typeDefs';


const PORT = 4000
const app = express()
const httpServer = createServer(app)

async function main() {
  const server = new ApolloServer({
    typeDefs: typeDefs,
    resolvers: resolvers,
  })

  await server.start()
  app.use(graphqlUploadExpress())
  app.use(cors())
  server.applyMiddleware({ app })
  httpServer.listen(PORT, () => {
    console.log(
      `🚀 Query endpoint ready at http://localhost:${PORT}${server.graphqlPath}`
    )
  })
}
main()