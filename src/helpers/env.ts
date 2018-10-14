import { pathExists, readJSON } from 'fs-extra'
import { resolve as pathResolve } from 'path'
import { homedir } from 'os'

let ENV = null

export interface ENV {
  BIT_PATH: string
}

// TODO: Stub for now. Extendable later
export default async (): Promise<ENV> => {
  if (ENV !== null) {
    return ENV
  }

  const path = pathResolve('src', 'generated', 'env.json')
  const result = await pathExists(path)

  if (!result) {
    return {
      BIT_PATH: homedir()
    }
  }

  ENV = await readJSON(path)
  return ENV
}
