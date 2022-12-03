/*
  En GraphQL existen 3 categorías de tipos:

    Escalares:
      ID
      Int
      Float
      Boolean
      String
      Array ([])
      
    Enumerables:
      enum Talla {
        XS
        S
        M
        L
        XL
        XXL
      }

    Tipos creados por ustedes
*/

module.exports = `
  # enums
  enum Gender {
    MALE
    FEMALE
    NON_BINARY
  }

  # tipos
  type Module {
    id: ID!
    name: String!
  }

  type Student {
    id: ID!
    name: String!
    lastName: String!
    age: Int!
    gender: Gender
  }

  type Course {
    id: ID!
    name: ID!
    modules: [Module!]!
  }

  input NewStudent {
    name: String!
    lastName: String!
    age: Int!
    gender: Gender
  }

  # consultas
  type Query {
    getCourses: [Course!]!
    getStudents: [Student!]!
  }

  type Mutation {
    createCourse(name: String!): Course!
    createModule(name: String!): Module!
    createStudent(input: NewStudent!): Student!
  }
`;

/*
  type Persona {
    name: String
  }

  Persona
    { name: "Juan" }, null

  Persona!
    { name: "Pedro" }

  [Persona]
    [], [null], [{ name: "Jorge"}], null

  [Persona]!
    [], [null], [{ name: "Jorge"}]

  [Persona!]
    [], [{name: "Luis"}], null

  [Persona!]!
    [] [{name: "Oscar"}]
*/
