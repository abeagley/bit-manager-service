import { GraphQLServer } from 'graphql-yoga'

import { prisma } from './generated/prisma'
import resolvers from './resolvers'
import setEnv from './helpers/env'

const server = new GraphQLServer({
  context: (req) => ({ ...req, db: prisma }),
  resolverValidationOptions: {
    requireResolversForResolveType: false
  },
  resolvers,
  typeDefs: './src/schema/index.graphql'
})

const start = async () => {
  await setEnv() // load up our generated env file into memory if it exists on startup

  server.start(
    {
      port: process.env.APP_PORT
    },
    () => console.log('Server is running on http://localhost:4000')
  )
}

start()
