import { merge } from 'lodash'

import BitScopesResolver from './bit-scopes'
import BitsResolver from './bits'
import InstallResolver from './install'
import SettingsResolver from './settings'
import UsersResolver from './users'

export default merge(
  BitScopesResolver,
  BitsResolver,
  InstallResolver,
  SettingsResolver,
  UsersResolver
)
