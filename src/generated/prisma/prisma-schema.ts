export const typeDefs = /* GraphQL */ `type AggregateBit {
  count: Int!
}

type AggregateBitScope {
  count: Int!
}

type AggregateSetting {
  count: Int!
}

type AggregateUser {
  count: Int!
}

type BatchPayload {
  count: Long!
}

type Bit {
  bindingPrefix: String
  box: String
  createdAt: DateTime!
  compiler: String
  dependencies: Json
  deprecated: Boolean
  devDependencies: Json
  devPackageDependencies: Json
  dists: Json
  docs: Json
  envsPackageDependencies: Json
  files: Json
  hasStorybook: Boolean
  id: ID!
  lang: String
  license: String
  log: Json
  mainFile: String
  name: String
  packageDependencies: Json
  peerPackageDependencies: Json
  scope: BitScope!
  specsResults: Json
  tester: String
  updatedAt: DateTime!
  version: String
}

type BitConnection {
  pageInfo: PageInfo!
  edges: [BitEdge]!
  aggregate: AggregateBit!
}

input BitCreateInput {
  bindingPrefix: String
  box: String
  compiler: String
  dependencies: Json
  deprecated: Boolean
  devDependencies: Json
  devPackageDependencies: Json
  dists: Json
  docs: Json
  envsPackageDependencies: Json
  files: Json
  hasStorybook: Boolean
  lang: String
  license: String
  log: Json
  mainFile: String
  name: String
  packageDependencies: Json
  peerPackageDependencies: Json
  scope: BitScopeCreateOneWithoutBitsInput!
  specsResults: Json
  tester: String
  version: String
}

input BitCreateManyWithoutScopeInput {
  create: [BitCreateWithoutScopeInput!]
  connect: [BitWhereUniqueInput!]
}

input BitCreateWithoutScopeInput {
  bindingPrefix: String
  box: String
  compiler: String
  dependencies: Json
  deprecated: Boolean
  devDependencies: Json
  devPackageDependencies: Json
  dists: Json
  docs: Json
  envsPackageDependencies: Json
  files: Json
  hasStorybook: Boolean
  lang: String
  license: String
  log: Json
  mainFile: String
  name: String
  packageDependencies: Json
  peerPackageDependencies: Json
  specsResults: Json
  tester: String
  version: String
}

type BitEdge {
  node: Bit!
  cursor: String!
}

enum BitOrderByInput {
  bindingPrefix_ASC
  bindingPrefix_DESC
  box_ASC
  box_DESC
  createdAt_ASC
  createdAt_DESC
  compiler_ASC
  compiler_DESC
  dependencies_ASC
  dependencies_DESC
  deprecated_ASC
  deprecated_DESC
  devDependencies_ASC
  devDependencies_DESC
  devPackageDependencies_ASC
  devPackageDependencies_DESC
  dists_ASC
  dists_DESC
  docs_ASC
  docs_DESC
  envsPackageDependencies_ASC
  envsPackageDependencies_DESC
  files_ASC
  files_DESC
  hasStorybook_ASC
  hasStorybook_DESC
  id_ASC
  id_DESC
  lang_ASC
  lang_DESC
  license_ASC
  license_DESC
  log_ASC
  log_DESC
  mainFile_ASC
  mainFile_DESC
  name_ASC
  name_DESC
  packageDependencies_ASC
  packageDependencies_DESC
  peerPackageDependencies_ASC
  peerPackageDependencies_DESC
  specsResults_ASC
  specsResults_DESC
  tester_ASC
  tester_DESC
  updatedAt_ASC
  updatedAt_DESC
  version_ASC
  version_DESC
}

type BitPreviousValues {
  bindingPrefix: String
  box: String
  createdAt: DateTime!
  compiler: String
  dependencies: Json
  deprecated: Boolean
  devDependencies: Json
  devPackageDependencies: Json
  dists: Json
  docs: Json
  envsPackageDependencies: Json
  files: Json
  hasStorybook: Boolean
  id: ID!
  lang: String
  license: String
  log: Json
  mainFile: String
  name: String
  packageDependencies: Json
  peerPackageDependencies: Json
  specsResults: Json
  tester: String
  updatedAt: DateTime!
  version: String
}

type BitScope {
  bits(where: BitWhereInput, orderBy: BitOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Bit!]
  createdAt: DateTime!
  description: String!
  id: ID!
  isLocal: Boolean!
  name: String!
  pathName: String!
  updatedAt: DateTime!
  url: String
}

type BitScopeConnection {
  pageInfo: PageInfo!
  edges: [BitScopeEdge]!
  aggregate: AggregateBitScope!
}

input BitScopeCreateInput {
  bits: BitCreateManyWithoutScopeInput
  description: String!
  isLocal: Boolean
  name: String!
  pathName: String!
  url: String
}

input BitScopeCreateOneWithoutBitsInput {
  create: BitScopeCreateWithoutBitsInput
  connect: BitScopeWhereUniqueInput
}

input BitScopeCreateWithoutBitsInput {
  description: String!
  isLocal: Boolean
  name: String!
  pathName: String!
  url: String
}

type BitScopeEdge {
  node: BitScope!
  cursor: String!
}

enum BitScopeOrderByInput {
  createdAt_ASC
  createdAt_DESC
  description_ASC
  description_DESC
  id_ASC
  id_DESC
  isLocal_ASC
  isLocal_DESC
  name_ASC
  name_DESC
  pathName_ASC
  pathName_DESC
  updatedAt_ASC
  updatedAt_DESC
  url_ASC
  url_DESC
}

type BitScopePreviousValues {
  createdAt: DateTime!
  description: String!
  id: ID!
  isLocal: Boolean!
  name: String!
  pathName: String!
  updatedAt: DateTime!
  url: String
}

type BitScopeSubscriptionPayload {
  mutation: MutationType!
  node: BitScope
  updatedFields: [String!]
  previousValues: BitScopePreviousValues
}

input BitScopeSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: BitScopeWhereInput
  AND: [BitScopeSubscriptionWhereInput!]
  OR: [BitScopeSubscriptionWhereInput!]
  NOT: [BitScopeSubscriptionWhereInput!]
}

input BitScopeUpdateInput {
  bits: BitUpdateManyWithoutScopeInput
  description: String
  isLocal: Boolean
  name: String
  pathName: String
  url: String
}

input BitScopeUpdateOneRequiredWithoutBitsInput {
  create: BitScopeCreateWithoutBitsInput
  update: BitScopeUpdateWithoutBitsDataInput
  upsert: BitScopeUpsertWithoutBitsInput
  connect: BitScopeWhereUniqueInput
}

input BitScopeUpdateWithoutBitsDataInput {
  description: String
  isLocal: Boolean
  name: String
  pathName: String
  url: String
}

input BitScopeUpsertWithoutBitsInput {
  update: BitScopeUpdateWithoutBitsDataInput!
  create: BitScopeCreateWithoutBitsInput!
}

input BitScopeWhereInput {
  bits_every: BitWhereInput
  bits_some: BitWhereInput
  bits_none: BitWhereInput
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  description: String
  description_not: String
  description_in: [String!]
  description_not_in: [String!]
  description_lt: String
  description_lte: String
  description_gt: String
  description_gte: String
  description_contains: String
  description_not_contains: String
  description_starts_with: String
  description_not_starts_with: String
  description_ends_with: String
  description_not_ends_with: String
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  isLocal: Boolean
  isLocal_not: Boolean
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  pathName: String
  pathName_not: String
  pathName_in: [String!]
  pathName_not_in: [String!]
  pathName_lt: String
  pathName_lte: String
  pathName_gt: String
  pathName_gte: String
  pathName_contains: String
  pathName_not_contains: String
  pathName_starts_with: String
  pathName_not_starts_with: String
  pathName_ends_with: String
  pathName_not_ends_with: String
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  url: String
  url_not: String
  url_in: [String!]
  url_not_in: [String!]
  url_lt: String
  url_lte: String
  url_gt: String
  url_gte: String
  url_contains: String
  url_not_contains: String
  url_starts_with: String
  url_not_starts_with: String
  url_ends_with: String
  url_not_ends_with: String
  AND: [BitScopeWhereInput!]
  OR: [BitScopeWhereInput!]
  NOT: [BitScopeWhereInput!]
}

input BitScopeWhereUniqueInput {
  id: ID
  name: String
  pathName: String
  url: String
}

type BitSubscriptionPayload {
  mutation: MutationType!
  node: Bit
  updatedFields: [String!]
  previousValues: BitPreviousValues
}

input BitSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: BitWhereInput
  AND: [BitSubscriptionWhereInput!]
  OR: [BitSubscriptionWhereInput!]
  NOT: [BitSubscriptionWhereInput!]
}

input BitUpdateInput {
  bindingPrefix: String
  box: String
  compiler: String
  dependencies: Json
  deprecated: Boolean
  devDependencies: Json
  devPackageDependencies: Json
  dists: Json
  docs: Json
  envsPackageDependencies: Json
  files: Json
  hasStorybook: Boolean
  lang: String
  license: String
  log: Json
  mainFile: String
  name: String
  packageDependencies: Json
  peerPackageDependencies: Json
  scope: BitScopeUpdateOneRequiredWithoutBitsInput
  specsResults: Json
  tester: String
  version: String
}

input BitUpdateManyWithoutScopeInput {
  create: [BitCreateWithoutScopeInput!]
  delete: [BitWhereUniqueInput!]
  connect: [BitWhereUniqueInput!]
  disconnect: [BitWhereUniqueInput!]
  update: [BitUpdateWithWhereUniqueWithoutScopeInput!]
  upsert: [BitUpsertWithWhereUniqueWithoutScopeInput!]
}

input BitUpdateWithoutScopeDataInput {
  bindingPrefix: String
  box: String
  compiler: String
  dependencies: Json
  deprecated: Boolean
  devDependencies: Json
  devPackageDependencies: Json
  dists: Json
  docs: Json
  envsPackageDependencies: Json
  files: Json
  hasStorybook: Boolean
  lang: String
  license: String
  log: Json
  mainFile: String
  name: String
  packageDependencies: Json
  peerPackageDependencies: Json
  specsResults: Json
  tester: String
  version: String
}

input BitUpdateWithWhereUniqueWithoutScopeInput {
  where: BitWhereUniqueInput!
  data: BitUpdateWithoutScopeDataInput!
}

input BitUpsertWithWhereUniqueWithoutScopeInput {
  where: BitWhereUniqueInput!
  update: BitUpdateWithoutScopeDataInput!
  create: BitCreateWithoutScopeInput!
}

input BitWhereInput {
  bindingPrefix: String
  bindingPrefix_not: String
  bindingPrefix_in: [String!]
  bindingPrefix_not_in: [String!]
  bindingPrefix_lt: String
  bindingPrefix_lte: String
  bindingPrefix_gt: String
  bindingPrefix_gte: String
  bindingPrefix_contains: String
  bindingPrefix_not_contains: String
  bindingPrefix_starts_with: String
  bindingPrefix_not_starts_with: String
  bindingPrefix_ends_with: String
  bindingPrefix_not_ends_with: String
  box: String
  box_not: String
  box_in: [String!]
  box_not_in: [String!]
  box_lt: String
  box_lte: String
  box_gt: String
  box_gte: String
  box_contains: String
  box_not_contains: String
  box_starts_with: String
  box_not_starts_with: String
  box_ends_with: String
  box_not_ends_with: String
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  compiler: String
  compiler_not: String
  compiler_in: [String!]
  compiler_not_in: [String!]
  compiler_lt: String
  compiler_lte: String
  compiler_gt: String
  compiler_gte: String
  compiler_contains: String
  compiler_not_contains: String
  compiler_starts_with: String
  compiler_not_starts_with: String
  compiler_ends_with: String
  compiler_not_ends_with: String
  deprecated: Boolean
  deprecated_not: Boolean
  hasStorybook: Boolean
  hasStorybook_not: Boolean
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  lang: String
  lang_not: String
  lang_in: [String!]
  lang_not_in: [String!]
  lang_lt: String
  lang_lte: String
  lang_gt: String
  lang_gte: String
  lang_contains: String
  lang_not_contains: String
  lang_starts_with: String
  lang_not_starts_with: String
  lang_ends_with: String
  lang_not_ends_with: String
  license: String
  license_not: String
  license_in: [String!]
  license_not_in: [String!]
  license_lt: String
  license_lte: String
  license_gt: String
  license_gte: String
  license_contains: String
  license_not_contains: String
  license_starts_with: String
  license_not_starts_with: String
  license_ends_with: String
  license_not_ends_with: String
  mainFile: String
  mainFile_not: String
  mainFile_in: [String!]
  mainFile_not_in: [String!]
  mainFile_lt: String
  mainFile_lte: String
  mainFile_gt: String
  mainFile_gte: String
  mainFile_contains: String
  mainFile_not_contains: String
  mainFile_starts_with: String
  mainFile_not_starts_with: String
  mainFile_ends_with: String
  mainFile_not_ends_with: String
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  scope: BitScopeWhereInput
  tester: String
  tester_not: String
  tester_in: [String!]
  tester_not_in: [String!]
  tester_lt: String
  tester_lte: String
  tester_gt: String
  tester_gte: String
  tester_contains: String
  tester_not_contains: String
  tester_starts_with: String
  tester_not_starts_with: String
  tester_ends_with: String
  tester_not_ends_with: String
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  version: String
  version_not: String
  version_in: [String!]
  version_not_in: [String!]
  version_lt: String
  version_lte: String
  version_gt: String
  version_gte: String
  version_contains: String
  version_not_contains: String
  version_starts_with: String
  version_not_starts_with: String
  version_ends_with: String
  version_not_ends_with: String
  AND: [BitWhereInput!]
  OR: [BitWhereInput!]
  NOT: [BitWhereInput!]
}

input BitWhereUniqueInput {
  id: ID
}

scalar DateTime

scalar Json

scalar Long

type Mutation {
  createBit(data: BitCreateInput!): Bit!
  updateBit(data: BitUpdateInput!, where: BitWhereUniqueInput!): Bit
  updateManyBits(data: BitUpdateInput!, where: BitWhereInput): BatchPayload!
  upsertBit(where: BitWhereUniqueInput!, create: BitCreateInput!, update: BitUpdateInput!): Bit!
  deleteBit(where: BitWhereUniqueInput!): Bit
  deleteManyBits(where: BitWhereInput): BatchPayload!
  createBitScope(data: BitScopeCreateInput!): BitScope!
  updateBitScope(data: BitScopeUpdateInput!, where: BitScopeWhereUniqueInput!): BitScope
  updateManyBitScopes(data: BitScopeUpdateInput!, where: BitScopeWhereInput): BatchPayload!
  upsertBitScope(where: BitScopeWhereUniqueInput!, create: BitScopeCreateInput!, update: BitScopeUpdateInput!): BitScope!
  deleteBitScope(where: BitScopeWhereUniqueInput!): BitScope
  deleteManyBitScopes(where: BitScopeWhereInput): BatchPayload!
  createSetting(data: SettingCreateInput!): Setting!
  updateSetting(data: SettingUpdateInput!, where: SettingWhereUniqueInput!): Setting
  updateManySettings(data: SettingUpdateInput!, where: SettingWhereInput): BatchPayload!
  upsertSetting(where: SettingWhereUniqueInput!, create: SettingCreateInput!, update: SettingUpdateInput!): Setting!
  deleteSetting(where: SettingWhereUniqueInput!): Setting
  deleteManySettings(where: SettingWhereInput): BatchPayload!
  createUser(data: UserCreateInput!): User!
  updateUser(data: UserUpdateInput!, where: UserWhereUniqueInput!): User
  updateManyUsers(data: UserUpdateInput!, where: UserWhereInput): BatchPayload!
  upsertUser(where: UserWhereUniqueInput!, create: UserCreateInput!, update: UserUpdateInput!): User!
  deleteUser(where: UserWhereUniqueInput!): User
  deleteManyUsers(where: UserWhereInput): BatchPayload!
}

enum MutationType {
  CREATED
  UPDATED
  DELETED
}

interface Node {
  id: ID!
}

type PageInfo {
  hasNextPage: Boolean!
  hasPreviousPage: Boolean!
  startCursor: String
  endCursor: String
}

type Query {
  bit(where: BitWhereUniqueInput!): Bit
  bits(where: BitWhereInput, orderBy: BitOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Bit]!
  bitsConnection(where: BitWhereInput, orderBy: BitOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): BitConnection!
  bitScope(where: BitScopeWhereUniqueInput!): BitScope
  bitScopes(where: BitScopeWhereInput, orderBy: BitScopeOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [BitScope]!
  bitScopesConnection(where: BitScopeWhereInput, orderBy: BitScopeOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): BitScopeConnection!
  setting(where: SettingWhereUniqueInput!): Setting
  settings(where: SettingWhereInput, orderBy: SettingOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Setting]!
  settingsConnection(where: SettingWhereInput, orderBy: SettingOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): SettingConnection!
  user(where: UserWhereUniqueInput!): User
  users(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User]!
  usersConnection(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): UserConnection!
  node(id: ID!): Node
}

type Setting {
  createdAt: DateTime!
  companyName: String!
  currentServerUser: String!
  id: ID!
  installed: Boolean!
  updatedAt: DateTime!
}

type SettingConnection {
  pageInfo: PageInfo!
  edges: [SettingEdge]!
  aggregate: AggregateSetting!
}

input SettingCreateInput {
  companyName: String!
  currentServerUser: String!
  installed: Boolean
}

type SettingEdge {
  node: Setting!
  cursor: String!
}

enum SettingOrderByInput {
  createdAt_ASC
  createdAt_DESC
  companyName_ASC
  companyName_DESC
  currentServerUser_ASC
  currentServerUser_DESC
  id_ASC
  id_DESC
  installed_ASC
  installed_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type SettingPreviousValues {
  createdAt: DateTime!
  companyName: String!
  currentServerUser: String!
  id: ID!
  installed: Boolean!
  updatedAt: DateTime!
}

type SettingSubscriptionPayload {
  mutation: MutationType!
  node: Setting
  updatedFields: [String!]
  previousValues: SettingPreviousValues
}

input SettingSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: SettingWhereInput
  AND: [SettingSubscriptionWhereInput!]
  OR: [SettingSubscriptionWhereInput!]
  NOT: [SettingSubscriptionWhereInput!]
}

input SettingUpdateInput {
  companyName: String
  currentServerUser: String
  installed: Boolean
}

input SettingWhereInput {
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  companyName: String
  companyName_not: String
  companyName_in: [String!]
  companyName_not_in: [String!]
  companyName_lt: String
  companyName_lte: String
  companyName_gt: String
  companyName_gte: String
  companyName_contains: String
  companyName_not_contains: String
  companyName_starts_with: String
  companyName_not_starts_with: String
  companyName_ends_with: String
  companyName_not_ends_with: String
  currentServerUser: String
  currentServerUser_not: String
  currentServerUser_in: [String!]
  currentServerUser_not_in: [String!]
  currentServerUser_lt: String
  currentServerUser_lte: String
  currentServerUser_gt: String
  currentServerUser_gte: String
  currentServerUser_contains: String
  currentServerUser_not_contains: String
  currentServerUser_starts_with: String
  currentServerUser_not_starts_with: String
  currentServerUser_ends_with: String
  currentServerUser_not_ends_with: String
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  installed: Boolean
  installed_not: Boolean
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  AND: [SettingWhereInput!]
  OR: [SettingWhereInput!]
  NOT: [SettingWhereInput!]
}

input SettingWhereUniqueInput {
  companyName: String
  currentServerUser: String
  id: ID
}

type Subscription {
  bit(where: BitSubscriptionWhereInput): BitSubscriptionPayload
  bitScope(where: BitScopeSubscriptionWhereInput): BitScopeSubscriptionPayload
  setting(where: SettingSubscriptionWhereInput): SettingSubscriptionPayload
  user(where: UserSubscriptionWhereInput): UserSubscriptionPayload
}

type User {
  createdAt: DateTime!
  credentials: String
  email: String!
  id: ID!
  name: String!
  password: String!
  role: UserRole!
  updatedAt: DateTime!
}

type UserConnection {
  pageInfo: PageInfo!
  edges: [UserEdge]!
  aggregate: AggregateUser!
}

input UserCreateInput {
  credentials: String
  email: String!
  name: String!
  password: String!
  role: UserRole
}

type UserEdge {
  node: User!
  cursor: String!
}

enum UserOrderByInput {
  createdAt_ASC
  createdAt_DESC
  credentials_ASC
  credentials_DESC
  email_ASC
  email_DESC
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  password_ASC
  password_DESC
  role_ASC
  role_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type UserPreviousValues {
  createdAt: DateTime!
  credentials: String
  email: String!
  id: ID!
  name: String!
  password: String!
  role: UserRole!
  updatedAt: DateTime!
}

enum UserRole {
  ADMIN
  USER
}

type UserSubscriptionPayload {
  mutation: MutationType!
  node: User
  updatedFields: [String!]
  previousValues: UserPreviousValues
}

input UserSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: UserWhereInput
  AND: [UserSubscriptionWhereInput!]
  OR: [UserSubscriptionWhereInput!]
  NOT: [UserSubscriptionWhereInput!]
}

input UserUpdateInput {
  credentials: String
  email: String
  name: String
  password: String
  role: UserRole
}

input UserWhereInput {
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  credentials: String
  credentials_not: String
  credentials_in: [String!]
  credentials_not_in: [String!]
  credentials_lt: String
  credentials_lte: String
  credentials_gt: String
  credentials_gte: String
  credentials_contains: String
  credentials_not_contains: String
  credentials_starts_with: String
  credentials_not_starts_with: String
  credentials_ends_with: String
  credentials_not_ends_with: String
  email: String
  email_not: String
  email_in: [String!]
  email_not_in: [String!]
  email_lt: String
  email_lte: String
  email_gt: String
  email_gte: String
  email_contains: String
  email_not_contains: String
  email_starts_with: String
  email_not_starts_with: String
  email_ends_with: String
  email_not_ends_with: String
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  password: String
  password_not: String
  password_in: [String!]
  password_not_in: [String!]
  password_lt: String
  password_lte: String
  password_gt: String
  password_gte: String
  password_contains: String
  password_not_contains: String
  password_starts_with: String
  password_not_starts_with: String
  password_ends_with: String
  password_not_ends_with: String
  role: UserRole
  role_not: UserRole
  role_in: [UserRole!]
  role_not_in: [UserRole!]
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  AND: [UserWhereInput!]
  OR: [UserWhereInput!]
  NOT: [UserWhereInput!]
}

input UserWhereUniqueInput {
  email: String
  id: ID
}
`