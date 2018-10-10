import { IContext } from '../context'
import { BitNode, BitWhereInput, BitWhereUniqueInput } from '../generated/prisma'
import { IWhereArgs } from '../helpers/arg-types'

export default {
  Query: {
    async bit (_root: any, args: IWhereArgs<BitWhereUniqueInput>, ctx: IContext): Promise<BitNode | null> {
      const bit = await ctx.db.bit(args.where)
      return bit
    },

    async bits (_root: any, args: IWhereArgs<BitWhereInput>, ctx: IContext): Promise<BitNode[]> {
      const bits = await ctx.db.bits(args)
      return bits
    }
  }
}
