import { homedir } from 'os'
import { SpawnOptions } from 'child_process'

export const getShellOptions = (cwd = homedir(), withShell = false): SpawnOptions => {
  return {
    cwd,
    env: {
      PATH: process.env.PATH
    },
    shell: null,
    stdio: null
  }
}
