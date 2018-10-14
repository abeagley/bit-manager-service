import * as execSh from 'shell-exec'
import { resolve as pathResolve } from 'path'
import { appendFile, writeJSON } from 'fs-extra'

import { IContext } from '../context'
import { SettingNode } from '../generated/prisma'
import { ICreateArgs, IWhereArgs } from '../helpers/arg-types'

import UsersResolver from './users'
import setEnv from '../helpers/env'
import { stripSlashes } from '../helpers/strip-slashes'
import { getShellOptions } from '../helpers/shell-options'
import { EOL, homedir } from 'os'

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
  currentUser?: string
  gitVersion?: string
}

export default {
  Query: {
    async sanityCheck (_root: any, args: IWhereArgs<SanityCheckWhere>, ctx: IContext): Promise<SanityCheck | null> {
      const shellOpts = getShellOptions()
      let shell: any

      const sanity: SanityCheck = {
        bitVersion: '',
        currentUser: '',
        gitVersion: ''
      }

      try {
        shell = await execSh('whoami', shellOpts)
        sanity.currentUser = stripSlashes(shell.stdout)

        shell = await execSh('bit --version', shellOpts)
        sanity.bitVersion = stripSlashes(shell.stdout)

        shell = await execSh('git --version', shellOpts)
        sanity.gitVersion = stripSlashes(shell.stdout.replace('git version ', ''))
      } catch (e) {
        console.error(e)
        throw new Error('Unable to run sanity check')
      }

      console.log(sanity)

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

        await writeJSON(pathResolve('src', 'generated', 'env.json'), {
          BIT_PATH: pathResolve(homedir(), settings.baseBitPath)
        })

        // TODO: Super insecure and will need to be changed
        await appendFile(pathResolve(homedir(), '.ssh', 'authorized_keys'), `${input.credentials}${EOL}`)

        await setEnv()
      } catch (e) {
        return e
      }

      return settings
    }
  }
}
