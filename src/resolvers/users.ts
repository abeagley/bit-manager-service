import * as bcrypt from 'bcrypt'
import * as jwt from 'jsonwebtoken'

import { IContext } from '../context'
import { UserCreateInput, UserNode, UserWhereInput, UserWhereUniqueInput } from '../generated/prisma'
import { ICreateArgs, IWhereArgs } from '../helpers/arg-types'

export interface ApiUserLoginInput {
  email: string
  password: string
}

export interface ApiUserLogin {
  profile: UserNode,
  token: string | null
}

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
      const input = args.data

      const existingUser = await ctx.db.$exists.user({ email: input.email })
      if (existingUser) {
        throw new Error('User already exists')
      }

      input.password = await bcrypt.hash(input.password, 12)

      const user = await ctx.db.createUser(input)
      return user
    },

    async login (_root: any, args: ICreateArgs<ApiUserLoginInput>, ctx: IContext, info: any): Promise<ApiUserLogin> {
      const input = args.data

      const existingUser = await ctx.db.user({ email: input.email })
      if (!existingUser) {
        throw new Error('Invalid credentials')
      }

      const match = await bcrypt.compare(input.password, existingUser.password)
      if (!match) {
        throw new Error('Invalid credentials')
      }

      delete existingUser.createdAt
      delete existingUser.credentials
      delete existingUser.password
      delete existingUser.updatedAt

      const token: any = await new Promise((resolve, reject) => {
        jwt.sign(existingUser, process.env.JWT_SECRET, (err, jwtToken) => {
          if (err) {
            return reject(err)
          }

          resolve(jwtToken)
        })
      })

      return {
        profile: existingUser,
        token
      }
    }
  }
}
