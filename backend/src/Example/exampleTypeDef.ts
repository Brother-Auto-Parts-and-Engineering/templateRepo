export const exampleTypeDef = `#graphql
  type Example {
    id: ID!
    name: String!
    age: Int!
  }

  type Query {
    example: [Example!]
  }
`