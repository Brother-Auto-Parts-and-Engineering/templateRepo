export const exampleTypeDef = `#graphql
  type Example {
    id: String!
    username: String!
    firstname: String!
    lastname: String!
  }

  type Query {
    example: [Example!]
  }
`