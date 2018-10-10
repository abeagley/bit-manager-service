import { IContext } from '../context'
import { UserCreateInput, UserNode, UserWhereInput, UserWhereUniqueInput } from '../generated/prisma'
import { ICreateArgs, IWhereArgs } from '../helpers/arg-types'

export default {
  Query: {
    async user (_root: any, args: IWhereArgs<UserWhereUniqueInput>, ctx: IContext): Promise<UserNode | null> {
      const user = await ctx.db.user(args.where)
      return user
    },

    async users (_root: any, args: IWhereArgs<UserWhereInput>, ctx: IContext): Promise<UserNode[]> {
      const users = await ctx.db.users(args)
      return users
    }
  },

  Mutation: {
    async createUser (_root: any, args: ICreateArgs<UserCreateInput>, ctx: IContext): Promise<UserNode | null> {
      const user = await ctx.db.createUser(args.data)
      return user
    }
  }
}
