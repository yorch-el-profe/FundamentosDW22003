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

  enum UserRole {
    user
    admin
  }

  type User {
    id: ID!
    email: String!
    password: String!
    role: UserRole! 
  }

  input AssignModule {
    courseId: ID!
    moduleId: ID!
  }

  input NewUser {
    email: String!
    password: String!
    role: UserRole!
  }

  input Credential {
    email: String!
    password: String!
  }

  type Query {
    getCourses: [Course!]!
    getModules: [Module!]!
  }

  type Mutation {
    createCourse(name: String!): Course!
    createModule(name: String!): Module!
    assignModule(input: AssignModule): Boolean
    createUser(input: NewUser): User!
    authenticate(input: Credential): String!
  }
`;
