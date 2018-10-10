export const typeDefs = /* GraphQL */ `type AggregateBit {
  count: Int!
}

type AggregateBitRepository {
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
  createdBy: User!
  id: ID!
  name: String!
  repository: BitRepository!
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
  repository: BitRepositoryCreateOneWithoutBitsInput!
  version: String!
}

input BitCreateManyWithoutCreatedByInput {
  create: [BitCreateWithoutCreatedByInput!]
  connect: [BitWhereUniqueInput!]
}

input BitCreateManyWithoutRepositoryInput {
  create: [BitCreateWithoutRepositoryInput!]
  connect: [BitWhereUniqueInput!]
}

input BitCreateWithoutCreatedByInput {
  name: String!
  repository: BitRepositoryCreateOneWithoutBitsInput!
  version: String!
}

input BitCreateWithoutRepositoryInput {
  createdBy: UserCreateOneWithoutCreatedBitsInput!
  name: String!
  version: String!
}

type BitEdge {
  node: Bit!
  cursor: String!
}

enum BitOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  version_ASC
  version_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type BitPreviousValues {
  id: ID!
  name: String!
  version: String!
}

type BitRepository {
  bits(where: BitWhereInput, orderBy: BitOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Bit!]
  createdBy: User!
  id: ID!
  isLocal: Boolean!
  name: String!
  url: String!
}

type BitRepositoryConnection {
  pageInfo: PageInfo!
  edges: [BitRepositoryEdge]!
  aggregate: AggregateBitRepository!
}

input BitRepositoryCreateInput {
  bits: BitCreateManyWithoutRepositoryInput
  createdBy: UserCreateOneWithoutCreatedRepositoriesInput!
  isLocal: Boolean
  name: String!
  url: String!
}

input BitRepositoryCreateManyWithoutCreatedByInput {
  create: [BitRepositoryCreateWithoutCreatedByInput!]
  connect: [BitRepositoryWhereUniqueInput!]
}

input BitRepositoryCreateOneWithoutBitsInput {
  create: BitRepositoryCreateWithoutBitsInput
  connect: BitRepositoryWhereUniqueInput
}

input BitRepositoryCreateWithoutBitsInput {
  createdBy: UserCreateOneWithoutCreatedRepositoriesInput!
  isLocal: Boolean
  name: String!
  url: String!
}

input BitRepositoryCreateWithoutCreatedByInput {
  bits: BitCreateManyWithoutRepositoryInput
  isLocal: Boolean
  name: String!
  url: String!
}

type BitRepositoryEdge {
  node: BitRepository!
  cursor: String!
}

enum BitRepositoryOrderByInput {
  id_ASC
  id_DESC
  isLocal_ASC
  isLocal_DESC
  name_ASC
  name_DESC
  url_ASC
  url_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type BitRepositoryPreviousValues {
  id: ID!
  isLocal: Boolean!
  name: String!
  url: String!
}

type BitRepositorySubscriptionPayload {
  mutation: MutationType!
  node: BitRepository
  updatedFields: [String!]
  previousValues: BitRepositoryPreviousValues
}

input BitRepositorySubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: BitRepositoryWhereInput
  AND: [BitRepositorySubscriptionWhereInput!]
  OR: [BitRepositorySubscriptionWhereInput!]
  NOT: [BitRepositorySubscriptionWhereInput!]
}

input BitRepositoryUpdateInput {
  bits: BitUpdateManyWithoutRepositoryInput
  createdBy: UserUpdateOneRequiredWithoutCreatedRepositoriesInput
  isLocal: Boolean
  name: String
  url: String
}

input BitRepositoryUpdateManyWithoutCreatedByInput {
  create: [BitRepositoryCreateWithoutCreatedByInput!]
  delete: [BitRepositoryWhereUniqueInput!]
  connect: [BitRepositoryWhereUniqueInput!]
  disconnect: [BitRepositoryWhereUniqueInput!]
  update: [BitRepositoryUpdateWithWhereUniqueWithoutCreatedByInput!]
  upsert: [BitRepositoryUpsertWithWhereUniqueWithoutCreatedByInput!]
}

input BitRepositoryUpdateOneRequiredWithoutBitsInput {
  create: BitRepositoryCreateWithoutBitsInput
  update: BitRepositoryUpdateWithoutBitsDataInput
  upsert: BitRepositoryUpsertWithoutBitsInput
  connect: BitRepositoryWhereUniqueInput
}

input BitRepositoryUpdateWithoutBitsDataInput {
  createdBy: UserUpdateOneRequiredWithoutCreatedRepositoriesInput
  isLocal: Boolean
  name: String
  url: String
}

input BitRepositoryUpdateWithoutCreatedByDataInput {
  bits: BitUpdateManyWithoutRepositoryInput
  isLocal: Boolean
  name: String
  url: String
}

input BitRepositoryUpdateWithWhereUniqueWithoutCreatedByInput {
  where: BitRepositoryWhereUniqueInput!
  data: BitRepositoryUpdateWithoutCreatedByDataInput!
}

input BitRepositoryUpsertWithoutBitsInput {
  update: BitRepositoryUpdateWithoutBitsDataInput!
  create: BitRepositoryCreateWithoutBitsInput!
}

input BitRepositoryUpsertWithWhereUniqueWithoutCreatedByInput {
  where: BitRepositoryWhereUniqueInput!
  update: BitRepositoryUpdateWithoutCreatedByDataInput!
  create: BitRepositoryCreateWithoutCreatedByInput!
}

input BitRepositoryWhereInput {
  bits_every: BitWhereInput
  bits_some: BitWhereInput
  bits_none: BitWhereInput
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
  AND: [BitRepositoryWhereInput!]
  OR: [BitRepositoryWhereInput!]
  NOT: [BitRepositoryWhereInput!]
}

input BitRepositoryWhereUniqueInput {
  id: ID
  name: String
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
  repository: BitRepositoryUpdateOneRequiredWithoutBitsInput
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

input BitUpdateManyWithoutRepositoryInput {
  create: [BitCreateWithoutRepositoryInput!]
  delete: [BitWhereUniqueInput!]
  connect: [BitWhereUniqueInput!]
  disconnect: [BitWhereUniqueInput!]
  update: [BitUpdateWithWhereUniqueWithoutRepositoryInput!]
  upsert: [BitUpsertWithWhereUniqueWithoutRepositoryInput!]
}

input BitUpdateWithoutCreatedByDataInput {
  name: String
  repository: BitRepositoryUpdateOneRequiredWithoutBitsInput
  version: String
}

input BitUpdateWithoutRepositoryDataInput {
  createdBy: UserUpdateOneRequiredWithoutCreatedBitsInput
  name: String
  version: String
}

input BitUpdateWithWhereUniqueWithoutCreatedByInput {
  where: BitWhereUniqueInput!
  data: BitUpdateWithoutCreatedByDataInput!
}

input BitUpdateWithWhereUniqueWithoutRepositoryInput {
  where: BitWhereUniqueInput!
  data: BitUpdateWithoutRepositoryDataInput!
}

input BitUpsertWithWhereUniqueWithoutCreatedByInput {
  where: BitWhereUniqueInput!
  update: BitUpdateWithoutCreatedByDataInput!
  create: BitCreateWithoutCreatedByInput!
}

input BitUpsertWithWhereUniqueWithoutRepositoryInput {
  where: BitWhereUniqueInput!
  update: BitUpdateWithoutRepositoryDataInput!
  create: BitCreateWithoutRepositoryInput!
}

input BitWhereInput {
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
  repository: BitRepositoryWhereInput
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

scalar Long

type Mutation {
  createBit(data: BitCreateInput!): Bit!
  updateBit(data: BitUpdateInput!, where: BitWhereUniqueInput!): Bit
  updateManyBits(data: BitUpdateInput!, where: BitWhereInput): BatchPayload!
  upsertBit(where: BitWhereUniqueInput!, create: BitCreateInput!, update: BitUpdateInput!): Bit!
  deleteBit(where: BitWhereUniqueInput!): Bit
  deleteManyBits(where: BitWhereInput): BatchPayload!
  createBitRepository(data: BitRepositoryCreateInput!): BitRepository!
  updateBitRepository(data: BitRepositoryUpdateInput!, where: BitRepositoryWhereUniqueInput!): BitRepository
  updateManyBitRepositories(data: BitRepositoryUpdateInput!, where: BitRepositoryWhereInput): BatchPayload!
  upsertBitRepository(where: BitRepositoryWhereUniqueInput!, create: BitRepositoryCreateInput!, update: BitRepositoryUpdateInput!): BitRepository!
  deleteBitRepository(where: BitRepositoryWhereUniqueInput!): BitRepository
  deleteManyBitRepositories(where: BitRepositoryWhereInput): BatchPayload!
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
  bitRepository(where: BitRepositoryWhereUniqueInput!): BitRepository
  bitRepositories(where: BitRepositoryWhereInput, orderBy: BitRepositoryOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [BitRepository]!
  bitRepositoriesConnection(where: BitRepositoryWhereInput, orderBy: BitRepositoryOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): BitRepositoryConnection!
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
  companyName: String!
  id: ID!
  installed: Boolean!
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
  companyName_ASC
  companyName_DESC
  id_ASC
  id_DESC
  installed_ASC
  installed_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type SettingPreviousValues {
  baseBitPath: String!
  companyName: String!
  id: ID!
  installed: Boolean!
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
  bitRepository(where: BitRepositorySubscriptionWhereInput): BitRepositorySubscriptionPayload
  setting(where: SettingSubscriptionWhereInput): SettingSubscriptionPayload
  user(where: UserSubscriptionWhereInput): UserSubscriptionPayload
}

type User {
  createdBits(where: BitWhereInput, orderBy: BitOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Bit!]
  createdRepositories(where: BitRepositoryWhereInput, orderBy: BitRepositoryOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [BitRepository!]
  credentials: String
  email: String!
  name: String!
  password: String!
  role: UserRole!
}

type UserConnection {
  pageInfo: PageInfo!
  edges: [UserEdge]!
  aggregate: AggregateUser!
}

input UserCreateInput {
  createdBits: BitCreateManyWithoutCreatedByInput
  createdRepositories: BitRepositoryCreateManyWithoutCreatedByInput
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

input UserCreateOneWithoutCreatedRepositoriesInput {
  create: UserCreateWithoutCreatedRepositoriesInput
  connect: UserWhereUniqueInput
}

input UserCreateWithoutCreatedBitsInput {
  createdRepositories: BitRepositoryCreateManyWithoutCreatedByInput
  credentials: String
  email: String!
  name: String!
  password: String!
  role: UserRole
}

input UserCreateWithoutCreatedRepositoriesInput {
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
  credentials_ASC
  credentials_DESC
  email_ASC
  email_DESC
  name_ASC
  name_DESC
  password_ASC
  password_DESC
  role_ASC
  role_DESC
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type UserPreviousValues {
  credentials: String
  email: String!
  name: String!
  password: String!
  role: UserRole!
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
  createdRepositories: BitRepositoryUpdateManyWithoutCreatedByInput
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

input UserUpdateOneRequiredWithoutCreatedRepositoriesInput {
  create: UserCreateWithoutCreatedRepositoriesInput
  update: UserUpdateWithoutCreatedRepositoriesDataInput
  upsert: UserUpsertWithoutCreatedRepositoriesInput
  connect: UserWhereUniqueInput
}

input UserUpdateWithoutCreatedBitsDataInput {
  createdRepositories: BitRepositoryUpdateManyWithoutCreatedByInput
  credentials: String
  email: String
  name: String
  password: String
  role: UserRole
}

input UserUpdateWithoutCreatedRepositoriesDataInput {
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

input UserUpsertWithoutCreatedRepositoriesInput {
  update: UserUpdateWithoutCreatedRepositoriesDataInput!
  create: UserCreateWithoutCreatedRepositoriesInput!
}

input UserWhereInput {
  createdBits_every: BitWhereInput
  createdBits_some: BitWhereInput
  createdBits_none: BitWhereInput
  createdRepositories_every: BitRepositoryWhereInput
  createdRepositories_some: BitRepositoryWhereInput
  createdRepositories_none: BitRepositoryWhereInput
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
  AND: [UserWhereInput!]
  OR: [UserWhereInput!]
  NOT: [UserWhereInput!]
}

input UserWhereUniqueInput {
  email: String
}
`