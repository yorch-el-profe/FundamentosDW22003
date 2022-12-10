module.exports = `
  type Module {
    id: ID!
    name: String!
  }

  type Course {
    id: ID!
    name: String!
    modules: [Module!]!
  }

  type Query {
    getCourses: [Course!]!
    getModules: [Module!]!
  }

  type Mutation {
    createModule(name: String!): Module!
  }
`;
