import { loadScope } from 'bit-bin/dist/scope'
import { BitId } from 'bit-bin/dist/bit-id'
import { join as pathJoin } from 'path'

import { IContext } from '../context'
import { BitNode, BitWhereInput } from '../generated/prisma'
import { IWhereArgs } from '../helpers/arg-types'

export interface BitWhereUniqueInput {
  box: string
  name: string
  scopeName: string
}

const { BIT_HOME } = process.env

export default {
  Query: {
    async bit (_root: any, args: IWhereArgs<BitWhereUniqueInput>, ctx: IContext): Promise<BitNode | null> {
      const input = args.where
      let bit: BitNode | null = null

      try {
        const scope = await loadScope(pathJoin(BIT_HOME, input.scopeName))
        const bitCompId = BitId.parse(`${input.scopeName}/${input.box}/${input.name}`)

        bit = await scope.loadRemoteComponent(bitCompId).then((comp) => comp)

        if (!bit) {
          throw new Error('Unable to find bit')
        }

        let hasStorybook = false

        bit.files = bit.files.map((file) => {
          hasStorybook = (hasStorybook)
            ? true
            : (file.path.indexOf('.story.') !== -1)
          return { ...file, _contents: new Buffer(file._contents).toString() }
        })

        bit.hasStorybook = hasStorybook
      } catch (e) {
        throw e
      }

      return bit
    },

    async bits (_root: any, args: IWhereArgs<BitWhereInput>, ctx: IContext): Promise<BitNode[]> {
      const input = args.where
      let bits: BitNode[] = []

      try {
        const scope = await loadScope(pathJoin(BIT_HOME, input.scope.pathName))
        bits = await scope.listStage()
      } catch (e) {
        throw e
      }

      return bits
    }
  }
}
