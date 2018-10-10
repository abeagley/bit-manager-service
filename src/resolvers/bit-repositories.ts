import { IContext } from '../context'
import { BitRepositoryNode, BitRepositoryWhereInput, BitRepositoryWhereUniqueInput } from '../generated/prisma'
import { IWhereArgs } from '../helpers/arg-types'

export default {
  Query: {
    async bitRepository (_root: any, args: IWhereArgs<BitRepositoryWhereUniqueInput>, ctx: IContext)
      : Promise<BitRepositoryNode | null> {
      const bitRepository = await ctx.db.bitRepository(args.where)
      return bitRepository
    },

    async bitRepositories (_root: any, args: IWhereArgs<BitRepositoryWhereInput>, ctx: IContext)
      : Promise<BitRepositoryNode[]> {
      const bitRepositories = await ctx.db.bitRepositories(args)
      return bitRepositories
    }
  }
}
