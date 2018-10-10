import { GraphQLServer } from 'graphql-yoga'

import { prisma } from './generated/prisma'
import resolvers from './resolvers'

const server = new GraphQLServer({
  context: (req) => ({ ...req, db: prisma }),
  resolverValidationOptions: {
    requireResolversForResolveType: false
  },
  resolvers,
  typeDefs: './src/schema/index.graphql'
})

server.start(
  {
    port: process.env.APP_PORT
  },
  () => console.log('Server is running on http://localhost:4000')
)
