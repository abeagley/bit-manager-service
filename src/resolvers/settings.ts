import { IContext } from '../context'
import { SettingCreateInput, SettingNode } from '../generated/prisma'
import { ICreateArgs } from '../helpers/arg-types'

export default {
  Query: {
    async settings (_root: any, _args: any, ctx: IContext): Promise<SettingNode | null> {
      const settings = await ctx.db.settings({ where: { id_not: null } })
      return (settings.length > 0) ? settings[0] : null
    }
  },

  Mutation: {
    async createSettings (_root: any, args: ICreateArgs<SettingCreateInput>, ctx: IContext)
      : Promise<SettingNode | null> {
      const settings = await ctx.db.createSetting(args.data)
      return settings
    }
  }
}
