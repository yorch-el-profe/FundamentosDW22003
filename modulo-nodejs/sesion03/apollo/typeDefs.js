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
    createCourse(name: String!): Course!
    createModule(name: String!): Module!
    assignModule(courseId: ID!, moduleId: ID!): Boolean
  }
`;
