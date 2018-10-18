import { resolve as pathResolve } from 'path'

import { IContext } from '../context'
import {
  BitScopeNode,
  BitScopeWhereInput,
  BitScopeWhereUniqueInput
} from '../generated/prisma'
import { ICreateArgs, IWhereArgs } from '../helpers/arg-types'
import { makePathName } from '../helpers/make-path-name'

import { pathExists } from 'fs-extra'
import { initScope as bitScopeInit } from 'bit-bin/dist/api/scope'

const { BIT_HOME } = process.env

export interface BitScopeCreateInput {
  description: string
  isLocal: boolean
  name: string
  url?: string
}

export interface BitScopeNodeCount extends BitScopeNode {
  bitCount: number
}

export default {
  Query: {
    async bitScope (_root: any, args: IWhereArgs<BitScopeWhereUniqueInput>, ctx: IContext)
      : Promise<BitScopeNodeCount | null> {
      let bitScope = null

      try {
        bitScope = await ctx.db.bitScope(args.where)

        if (!bitScope) {
          throw new Error('Unable to find scope')
        }
      } catch (e) {
        console.error(e)
        throw new Error('Unable to find scope')
      }

      return bitScope
    },

    async bitScopes (_root: any, args: IWhereArgs<BitScopeWhereInput>, ctx: IContext)
      : Promise<BitScopeNodeCount[]> {
      let bitScopes = []

      try {
        bitScopes = await ctx.db.bitScopes(args)
      } catch (e) {
        console.error(e)
        throw new Error('Unable to create scope')
      }

      return bitScopes
    }
  },

  Mutation: {
    async createBitScope (_root: any, args: ICreateArgs<BitScopeCreateInput>, ctx: IContext)
      : Promise<BitScopeNodeCount | null> {
      const input = args.data

      let bitScopeWithCount: BitScopeNodeCount | null = null
      let bitPkgName: string

      try {
        bitPkgName = makePathName(input.name)
        const path = pathResolve(BIT_HOME, bitPkgName)
        const exists = await pathExists(path)

        if (exists) {
          throw new Error('Bit scope folder already exists')
        }

        const bitScope = await ctx.db.createBitScope({
          description: input.description,
          isLocal: input.isLocal,
          name: input.name,
          pathName: bitPkgName,
          url: input.url || null
        })

        bitScopeWithCount = {
          ...bitScope,
          bitCount: 0
        }

        await bitScopeInit(path, bitPkgName, null)
      } catch (e) {
        console.error(e)
        throw new Error('Unable to create scope')
        return null
      }

      return bitScopeWithCount
    }
  }
}
