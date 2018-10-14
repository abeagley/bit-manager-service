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
  createdAt: DateTime!
  createdBy: User!
  id: ID!
  name: String!
  scope: BitScope!
  updatedAt: DateTime!
  version: String!
}

type BitConnection {
  pageInfo: PageInfo!
  edges: [BitEdge]!
  aggregate: AggregateBit!
}

input BitCreateInput {
  createdBy: UserCreateOneWithoutCreatedBitsInput!
  name: String!
  scope: BitScopeCreateOneWithoutBitsInput!
  version: String!
}

input BitCreateManyWithoutCreatedByInput {
  create: [BitCreateWithoutCreatedByInput!]
  connect: [BitWhereUniqueInput!]
}

input BitCreateManyWithoutScopeInput {
  create: [BitCreateWithoutScopeInput!]
  connect: [BitWhereUniqueInput!]
}

input BitCreateWithoutCreatedByInput {
  name: String!
  scope: BitScopeCreateOneWithoutBitsInput!
  version: String!
}

input BitCreateWithoutScopeInput {
  createdBy: UserCreateOneWithoutCreatedBitsInput!
  name: String!
  version: String!
}

type BitEdge {
  node: Bit!
  cursor: String!
}

enum BitOrderByInput {
  createdAt_ASC
  createdAt_DESC
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  updatedAt_ASC
  updatedAt_DESC
  version_ASC
  version_DESC
}

type BitPreviousValues {
  createdAt: DateTime!
  id: ID!
  name: String!
  updatedAt: DateTime!
  version: String!
}

type BitScope {
  bits(where: BitWhereInput, orderBy: BitOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Bit!]
  createdAt: DateTime!
  createdBy: User!
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
  createdBy: UserCreateOneWithoutCreatedScopesInput!
  isLocal: Boolean
  name: String!
  pathName: String!
  url: String
}

input BitScopeCreateManyWithoutCreatedByInput {
  create: [BitScopeCreateWithoutCreatedByInput!]
  connect: [BitScopeWhereUniqueInput!]
}

input BitScopeCreateOneWithoutBitsInput {
  create: BitScopeCreateWithoutBitsInput
  connect: BitScopeWhereUniqueInput
}

input BitScopeCreateWithoutBitsInput {
  createdBy: UserCreateOneWithoutCreatedScopesInput!
  isLocal: Boolean
  name: String!
  pathName: String!
  url: String
}

input BitScopeCreateWithoutCreatedByInput {
  bits: BitCreateManyWithoutScopeInput
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
  createdBy: UserUpdateOneRequiredWithoutCreatedScopesInput
  isLocal: Boolean
  name: String
  pathName: String
  url: String
}

input BitScopeUpdateManyWithoutCreatedByInput {
  create: [BitScopeCreateWithoutCreatedByInput!]
  delete: [BitScopeWhereUniqueInput!]
  connect: [BitScopeWhereUniqueInput!]
  disconnect: [BitScopeWhereUniqueInput!]
  update: [BitScopeUpdateWithWhereUniqueWithoutCreatedByInput!]
  upsert: [BitScopeUpsertWithWhereUniqueWithoutCreatedByInput!]
}

input BitScopeUpdateOneRequiredWithoutBitsInput {
  create: BitScopeCreateWithoutBitsInput
  update: BitScopeUpdateWithoutBitsDataInput
  upsert: BitScopeUpsertWithoutBitsInput
  connect: BitScopeWhereUniqueInput
}

input BitScopeUpdateWithoutBitsDataInput {
  createdBy: UserUpdateOneRequiredWithoutCreatedScopesInput
  isLocal: Boolean
  name: String
  pathName: String
  url: String
}

input BitScopeUpdateWithoutCreatedByDataInput {
  bits: BitUpdateManyWithoutScopeInput
  isLocal: Boolean
  name: String
  pathName: String
  url: String
}

input BitScopeUpdateWithWhereUniqueWithoutCreatedByInput {
  where: BitScopeWhereUniqueInput!
  data: BitScopeUpdateWithoutCreatedByDataInput!
}

input BitScopeUpsertWithoutBitsInput {
  update: BitScopeUpdateWithoutBitsDataInput!
  create: BitScopeCreateWithoutBitsInput!
}

input BitScopeUpsertWithWhereUniqueWithoutCreatedByInput {
  where: BitScopeWhereUniqueInput!
  update: BitScopeUpdateWithoutCreatedByDataInput!
  create: BitScopeCreateWithoutCreatedByInput!
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
  createdBy: UserWhereInput
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
  createdBy: UserUpdateOneRequiredWithoutCreatedBitsInput
  name: String
  scope: BitScopeUpdateOneRequiredWithoutBitsInput
  version: String
}

input BitUpdateManyWithoutCreatedByInput {
  create: [BitCreateWithoutCreatedByInput!]
  delete: [BitWhereUniqueInput!]
  connect: [BitWhereUniqueInput!]
  disconnect: [BitWhereUniqueInput!]
  update: [BitUpdateWithWhereUniqueWithoutCreatedByInput!]
  upsert: [BitUpsertWithWhereUniqueWithoutCreatedByInput!]
}

input BitUpdateManyWithoutScopeInput {
  create: [BitCreateWithoutScopeInput!]
  delete: [BitWhereUniqueInput!]
  connect: [BitWhereUniqueInput!]
  disconnect: [BitWhereUniqueInput!]
  update: [BitUpdateWithWhereUniqueWithoutScopeInput!]
  upsert: [BitUpsertWithWhereUniqueWithoutScopeInput!]
}

input BitUpdateWithoutCreatedByDataInput {
  name: String
  scope: BitScopeUpdateOneRequiredWithoutBitsInput
  version: String
}

input BitUpdateWithoutScopeDataInput {
  createdBy: UserUpdateOneRequiredWithoutCreatedBitsInput
  name: String
  version: String
}

input BitUpdateWithWhereUniqueWithoutCreatedByInput {
  where: BitWhereUniqueInput!
  data: BitUpdateWithoutCreatedByDataInput!
}

input BitUpdateWithWhereUniqueWithoutScopeInput {
  where: BitWhereUniqueInput!
  data: BitUpdateWithoutScopeDataInput!
}

input BitUpsertWithWhereUniqueWithoutCreatedByInput {
  where: BitWhereUniqueInput!
  update: BitUpdateWithoutCreatedByDataInput!
  create: BitCreateWithoutCreatedByInput!
}

input BitUpsertWithWhereUniqueWithoutScopeInput {
  where: BitWhereUniqueInput!
  update: BitUpdateWithoutScopeDataInput!
  create: BitCreateWithoutScopeInput!
}

input BitWhereInput {
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  createdBy: UserWhereInput
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
  scope: BitScopeWhereInput
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
  baseBitPath: String!
  createdAt: DateTime!
  companyName: String!
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
  baseBitPath: String!
  companyName: String!
  installed: Boolean
}

type SettingEdge {
  node: Setting!
  cursor: String!
}

enum SettingOrderByInput {
  baseBitPath_ASC
  baseBitPath_DESC
  createdAt_ASC
  createdAt_DESC
  companyName_ASC
  companyName_DESC
  id_ASC
  id_DESC
  installed_ASC
  installed_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type SettingPreviousValues {
  baseBitPath: String!
  createdAt: DateTime!
  companyName: String!
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
  baseBitPath: String
  companyName: String
  installed: Boolean
}

input SettingWhereInput {
  baseBitPath: String
  baseBitPath_not: String
  baseBitPath_in: [String!]
  baseBitPath_not_in: [String!]
  baseBitPath_lt: String
  baseBitPath_lte: String
  baseBitPath_gt: String
  baseBitPath_gte: String
  baseBitPath_contains: String
  baseBitPath_not_contains: String
  baseBitPath_starts_with: String
  baseBitPath_not_starts_with: String
  baseBitPath_ends_with: String
  baseBitPath_not_ends_with: String
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
  baseBitPath: String
  companyName: String
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
  createdBits(where: BitWhereInput, orderBy: BitOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Bit!]
  createdScopes(where: BitScopeWhereInput, orderBy: BitScopeOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [BitScope!]
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
  createdBits: BitCreateManyWithoutCreatedByInput
  createdScopes: BitScopeCreateManyWithoutCreatedByInput
  credentials: String
  email: String!
  name: String!
  password: String!
  role: UserRole
}

input UserCreateOneWithoutCreatedBitsInput {
  create: UserCreateWithoutCreatedBitsInput
  connect: UserWhereUniqueInput
}

input UserCreateOneWithoutCreatedScopesInput {
  create: UserCreateWithoutCreatedScopesInput
  connect: UserWhereUniqueInput
}

input UserCreateWithoutCreatedBitsInput {
  createdScopes: BitScopeCreateManyWithoutCreatedByInput
  credentials: String
  email: String!
  name: String!
  password: String!
  role: UserRole
}

input UserCreateWithoutCreatedScopesInput {
  createdBits: BitCreateManyWithoutCreatedByInput
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
  createdBits: BitUpdateManyWithoutCreatedByInput
  createdScopes: BitScopeUpdateManyWithoutCreatedByInput
  credentials: String
  email: String
  name: String
  password: String
  role: UserRole
}

input UserUpdateOneRequiredWithoutCreatedBitsInput {
  create: UserCreateWithoutCreatedBitsInput
  update: UserUpdateWithoutCreatedBitsDataInput
  upsert: UserUpsertWithoutCreatedBitsInput
  connect: UserWhereUniqueInput
}

input UserUpdateOneRequiredWithoutCreatedScopesInput {
  create: UserCreateWithoutCreatedScopesInput
  update: UserUpdateWithoutCreatedScopesDataInput
  upsert: UserUpsertWithoutCreatedScopesInput
  connect: UserWhereUniqueInput
}

input UserUpdateWithoutCreatedBitsDataInput {
  createdScopes: BitScopeUpdateManyWithoutCreatedByInput
  credentials: String
  email: String
  name: String
  password: String
  role: UserRole
}

input UserUpdateWithoutCreatedScopesDataInput {
  createdBits: BitUpdateManyWithoutCreatedByInput
  credentials: String
  email: String
  name: String
  password: String
  role: UserRole
}

input UserUpsertWithoutCreatedBitsInput {
  update: UserUpdateWithoutCreatedBitsDataInput!
  create: UserCreateWithoutCreatedBitsInput!
}

input UserUpsertWithoutCreatedScopesInput {
  update: UserUpdateWithoutCreatedScopesDataInput!
  create: UserCreateWithoutCreatedScopesInput!
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
  createdBits_every: BitWhereInput
  createdBits_some: BitWhereInput
  createdBits_none: BitWhereInput
  createdScopes_every: BitScopeWhereInput
  createdScopes_some: BitScopeWhereInput
  createdScopes_none: BitScopeWhereInput
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