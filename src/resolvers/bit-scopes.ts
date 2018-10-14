import * as execSh from 'shell-exec'
import { resolve as pathResolve } from 'path'

import { IContext } from '../context'
import { BitScope, BitScopeNode, BitScopeWhereInput, BitScopeWhereUniqueInput } from '../generated/prisma'
import { ICreateArgs, IWhereArgs } from '../helpers/arg-types'
import getEnv from '../helpers/env'
import { makePathName } from '../helpers/make-path-name'
import { getShellOptions } from '../helpers/shell-options'

import { pathExists } from 'fs-extra'
import { initScope as bitInit } from 'bit-bin/dist/api/scope'

const { BIT_HOME } = process.env

export interface BitScopeCreateInput {
  isLocal: boolean
  name: string
  url?: string
}

export default {
  Query: {
    async bitScope (_root: any, args: IWhereArgs<BitScopeWhereUniqueInput>, ctx: IContext)
      : Promise<BitScopeNode | null> {
      const bitScope = await ctx.db.bitScope(args.where)
      return bitScope
    },

    async bitScopes (_root: any, args: IWhereArgs<BitScopeWhereInput>, ctx: IContext)
      : Promise<BitScopeNode[]> {
      try {
        const ENV = await getEnv()
        const shellOpts = getShellOptions(ENV.BIT_PATH, true)
        const shell = await execSh(`bit list`, shellOpts)
        console.log(shell.stdout)
      } catch (e) {
        console.error(e)
        throw new Error('Unable to create scope')
      }

      const bitScopes = await ctx.db.bitScopes(args)
      return bitScopes
    }
  },

  Mutation: {
    async createBitScope (_root: any, args: ICreateArgs<BitScopeCreateInput>, ctx: IContext)
      : Promise<BitScopeNode | null> {
      const input = args.data

      let bitScope: BitScope | null = null
      let bitPkgName: string

      try {
        bitPkgName = makePathName(input.name)
        const path = pathResolve(BIT_HOME, bitPkgName)
        const exists = await pathExists(path)

        if (exists) {
          throw new Error('Bit folder already exists')
        }

        await bitInit(path, bitPkgName, null)
      } catch (e) {
        console.error(e)
        throw new Error('Unable to create scope')
      }

      try {
        bitScope = ctx.db.createBitScope({
          createdBy: {
            connect: {
              email: 'abeagley@bastionweb.io'
            }
          },
          isLocal: input.isLocal,
          name: input.name,
          pathName: bitPkgName,
          url: input.url || null
        })
      } catch (e) {
        console.error(e)
        throw new Error('Unable to create scope')
      }

      return bitScope
    }
  }
}
