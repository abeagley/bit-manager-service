import { merge } from 'lodash'

import BitRepositoriesResolver from './bit-repositories'
import BitsResolver from './bits'
import InstallResolver from './install'
import SettingsResolver from './settings'
import UsersResolver from './users'

export default merge(
  BitRepositoriesResolver,
  BitsResolver,
  InstallResolver,
  SettingsResolver,
  UsersResolver
)
