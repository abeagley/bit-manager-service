import { loadScope } from 'bit-bin/dist/scope'
import { resolve as pathResolve } from 'path'

const { BIT_HOME } = process.env

export const getScopeBitList = async (scopePathName: string): Promise<any[]> => {
  const path = pathResolve(BIT_HOME, scopePathName)
  const result = await loadScope(path).then((scope: any) => scope.listStage())
  return result
}
