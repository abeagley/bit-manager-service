import { ICreateArgs } from '../helpers/arg-types'
import { IContext } from '../context'
import { join as pathJoin } from 'path'

import { loadScope } from 'bit-bin/dist/scope'
import { BitId } from 'bit-bin/dist/bit-id'

export interface BitExportHookCreateInput {
  bitName: string
  scopeName: string
}

export interface BitExportHook {
  id: string | null
}

const { BIT_HOME } = process.env

export default {
  Mutation: {
    async hookBitExportPre (_root: any, args: ICreateArgs<BitExportHookCreateInput>, ctx: IContext)
      : Promise<BitExportHook | null> {
      const input = args.data
      const exportHookData: BitExportHook = {
        id: null
      }

      try {
        const [ bitNamespace, bitName ] = input.bitName.split('/')

        const scope = await loadScope(pathJoin(BIT_HOME, input.scopeName))

        const piece = BitId.parse(`${input.scopeName}/${input.bitName}`)
        console.log(piece, scope)
        const bit = await scope.loadRemoteComponent(piece).then((comp) => comp.toString())

        console.log(bit)

        const exBit = await ctx.db.bits({
          where: {
            name: bitName,
            namespace: bitNamespace
          }
        })

        console.log(exBit)
      } catch (e) {
        throw new Error(e)
      }

      return exportHookData
    }
  }
}
