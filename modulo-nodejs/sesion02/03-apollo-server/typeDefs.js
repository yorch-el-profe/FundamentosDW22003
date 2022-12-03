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

  # consultas
  type Query {
    getCourses: [Course!]!
  }
`;
