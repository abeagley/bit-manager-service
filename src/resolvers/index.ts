import { merge } from 'lodash'

import BitRepositoriesResolver from './bit-repositories'
import BitsResolver from './bits'
import SettingsResolver from './settings'
import UsersResolver from './users'

export default merge(
  BitRepositoriesResolver,
  BitsResolver,
  SettingsResolver,
  UsersResolver
)
