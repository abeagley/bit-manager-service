import * as execSh from 'exec-sh'

import { IContext } from '../context'
import { SettingNode } from '../generated/prisma'
import { ICreateArgs, IWhereArgs } from '../helpers/arg-types'

import UsersResolver from './users'
import { homedir } from 'os'
import { stripSlashes } from '../helpers/strip-slashes'

export interface InstallCreateInput {
  bitPath: string
  companyName: string
  credentials: string
  email: string
  password: string
}

export interface SanityCheckWhere {
  bitPath: string
}

export interface SanityCheck {
  bitVersion?: string
  gitVersion?: string
}

export default {
  Query: {
    async sanityCheck (_root: any, args: IWhereArgs<SanityCheckWhere>, ctx: IContext): Promise<SanityCheck | null> {
      let shell: any
      const sanity: SanityCheck = {
        bitVersion: '',
        gitVersion: ''
      }

      try {
        shell = await execSh.promise('bit --version', { cwd: homedir(), stdio: null })
        sanity.bitVersion = stripSlashes(shell.stdout)

        shell = await execSh.promise('git --version', { cwd: homedir(), stdio: null })
        sanity.gitVersion = stripSlashes(shell.stdout.replace('git version ', ''))
      } catch (e) {
        console.error(e.stderr)
        console.error(e.stdout)
      }

      return sanity
    }
  },

  Mutation: {
    async install (_root: any, args: ICreateArgs<InstallCreateInput>, ctx: IContext): Promise<SettingNode | null> {
      const input = args.data

      const existingSettings = await ctx.db.settings()

      if (existingSettings.length > 0) {
        throw new Error('BitManager has already been initialized')
      }

      let settings: SettingNode

      try {
        settings = await ctx.db.createSetting({
          baseBitPath: input.bitPath,
          companyName: input.companyName,
          installed: true
        })

        await UsersResolver.Mutation.createUser(
          _root,
          {
            data: {
              credentials: Buffer.from(input.credentials).toString('base64'),
              email: input.email,
              name: 'Admin',
              password: input.password,
              role: 'ADMIN'
            }
          },
          ctx
        )
      } catch (e) {
        return e
      }

      return settings
    }
  }
}
