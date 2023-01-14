const typeDefs: string = `
  type Query {
    getBreeds: [String!]!
    getRandomImage(breed: String!): String!
  }
`;

export default typeDefs;
