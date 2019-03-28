module.exports = {
        typeDefs: /* GraphQL */ `type AggregateContributor {
  count: Int!
}

type AggregateFeedback {
  count: Int!
}

type BatchPayload {
  count: Long!
}

type Contributor {
  id: ID!
  email: String
  githubUsername: String!
  shopifyCustomerID: String
}

type ContributorConnection {
  pageInfo: PageInfo!
  edges: [ContributorEdge]!
  aggregate: AggregateContributor!
}

input ContributorCreateInput {
  email: String
  githubUsername: String!
  shopifyCustomerID: String
}

type ContributorEdge {
  node: Contributor!
  cursor: String!
}

enum ContributorOrderByInput {
  id_ASC
  id_DESC
  email_ASC
  email_DESC
  githubUsername_ASC
  githubUsername_DESC
  shopifyCustomerID_ASC
  shopifyCustomerID_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type ContributorPreviousValues {
  id: ID!
  email: String
  githubUsername: String!
  shopifyCustomerID: String
}

type ContributorSubscriptionPayload {
  mutation: MutationType!
  node: Contributor
  updatedFields: [String!]
  previousValues: ContributorPreviousValues
}

input ContributorSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: ContributorWhereInput
  AND: [ContributorSubscriptionWhereInput!]
  OR: [ContributorSubscriptionWhereInput!]
  NOT: [ContributorSubscriptionWhereInput!]
}

input ContributorUpdateInput {
  email: String
  githubUsername: String
  shopifyCustomerID: String
}

input ContributorUpdateManyMutationInput {
  email: String
  githubUsername: String
  shopifyCustomerID: String
}

input ContributorWhereInput {
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
  githubUsername: String
  githubUsername_not: String
  githubUsername_in: [String!]
  githubUsername_not_in: [String!]
  githubUsername_lt: String
  githubUsername_lte: String
  githubUsername_gt: String
  githubUsername_gte: String
  githubUsername_contains: String
  githubUsername_not_contains: String
  githubUsername_starts_with: String
  githubUsername_not_starts_with: String
  githubUsername_ends_with: String
  githubUsername_not_ends_with: String
  shopifyCustomerID: String
  shopifyCustomerID_not: String
  shopifyCustomerID_in: [String!]
  shopifyCustomerID_not_in: [String!]
  shopifyCustomerID_lt: String
  shopifyCustomerID_lte: String
  shopifyCustomerID_gt: String
  shopifyCustomerID_gte: String
  shopifyCustomerID_contains: String
  shopifyCustomerID_not_contains: String
  shopifyCustomerID_starts_with: String
  shopifyCustomerID_not_starts_with: String
  shopifyCustomerID_ends_with: String
  shopifyCustomerID_not_ends_with: String
  AND: [ContributorWhereInput!]
  OR: [ContributorWhereInput!]
  NOT: [ContributorWhereInput!]
}

input ContributorWhereUniqueInput {
  id: ID
  email: String
  githubUsername: String
  shopifyCustomerID: String
}

type Feedback {
  id: ID!
  rating: Int!
  comment: String
  originUrl: String!
}

type FeedbackConnection {
  pageInfo: PageInfo!
  edges: [FeedbackEdge]!
  aggregate: AggregateFeedback!
}

input FeedbackCreateInput {
  rating: Int!
  comment: String
  originUrl: String!
}

type FeedbackEdge {
  node: Feedback!
  cursor: String!
}

enum FeedbackOrderByInput {
  id_ASC
  id_DESC
  rating_ASC
  rating_DESC
  comment_ASC
  comment_DESC
  originUrl_ASC
  originUrl_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type FeedbackPreviousValues {
  id: ID!
  rating: Int!
  comment: String
  originUrl: String!
}

type FeedbackSubscriptionPayload {
  mutation: MutationType!
  node: Feedback
  updatedFields: [String!]
  previousValues: FeedbackPreviousValues
}

input FeedbackSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: FeedbackWhereInput
  AND: [FeedbackSubscriptionWhereInput!]
  OR: [FeedbackSubscriptionWhereInput!]
  NOT: [FeedbackSubscriptionWhereInput!]
}

input FeedbackUpdateInput {
  rating: Int
  comment: String
  originUrl: String
}

input FeedbackUpdateManyMutationInput {
  rating: Int
  comment: String
  originUrl: String
}

input FeedbackWhereInput {
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
  rating: Int
  rating_not: Int
  rating_in: [Int!]
  rating_not_in: [Int!]
  rating_lt: Int
  rating_lte: Int
  rating_gt: Int
  rating_gte: Int
  comment: String
  comment_not: String
  comment_in: [String!]
  comment_not_in: [String!]
  comment_lt: String
  comment_lte: String
  comment_gt: String
  comment_gte: String
  comment_contains: String
  comment_not_contains: String
  comment_starts_with: String
  comment_not_starts_with: String
  comment_ends_with: String
  comment_not_ends_with: String
  originUrl: String
  originUrl_not: String
  originUrl_in: [String!]
  originUrl_not_in: [String!]
  originUrl_lt: String
  originUrl_lte: String
  originUrl_gt: String
  originUrl_gte: String
  originUrl_contains: String
  originUrl_not_contains: String
  originUrl_starts_with: String
  originUrl_not_starts_with: String
  originUrl_ends_with: String
  originUrl_not_ends_with: String
  AND: [FeedbackWhereInput!]
  OR: [FeedbackWhereInput!]
  NOT: [FeedbackWhereInput!]
}

input FeedbackWhereUniqueInput {
  id: ID
}

scalar Long

type Mutation {
  createContributor(data: ContributorCreateInput!): Contributor!
  updateContributor(data: ContributorUpdateInput!, where: ContributorWhereUniqueInput!): Contributor
  updateManyContributors(data: ContributorUpdateManyMutationInput!, where: ContributorWhereInput): BatchPayload!
  upsertContributor(where: ContributorWhereUniqueInput!, create: ContributorCreateInput!, update: ContributorUpdateInput!): Contributor!
  deleteContributor(where: ContributorWhereUniqueInput!): Contributor
  deleteManyContributors(where: ContributorWhereInput): BatchPayload!
  createFeedback(data: FeedbackCreateInput!): Feedback!
  updateFeedback(data: FeedbackUpdateInput!, where: FeedbackWhereUniqueInput!): Feedback
  updateManyFeedbacks(data: FeedbackUpdateManyMutationInput!, where: FeedbackWhereInput): BatchPayload!
  upsertFeedback(where: FeedbackWhereUniqueInput!, create: FeedbackCreateInput!, update: FeedbackUpdateInput!): Feedback!
  deleteFeedback(where: FeedbackWhereUniqueInput!): Feedback
  deleteManyFeedbacks(where: FeedbackWhereInput): BatchPayload!
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
  contributor(where: ContributorWhereUniqueInput!): Contributor
  contributors(where: ContributorWhereInput, orderBy: ContributorOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Contributor]!
  contributorsConnection(where: ContributorWhereInput, orderBy: ContributorOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): ContributorConnection!
  feedback(where: FeedbackWhereUniqueInput!): Feedback
  feedbacks(where: FeedbackWhereInput, orderBy: FeedbackOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Feedback]!
  feedbacksConnection(where: FeedbackWhereInput, orderBy: FeedbackOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): FeedbackConnection!
  node(id: ID!): Node
}

type Subscription {
  contributor(where: ContributorSubscriptionWhereInput): ContributorSubscriptionPayload
  feedback(where: FeedbackSubscriptionWhereInput): FeedbackSubscriptionPayload
}
`
      }
    