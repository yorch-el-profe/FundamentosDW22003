export const typeDefs: string = `
  type Song {
    id: ID!
    title: String!
    duration: Int!
    artists: [Artist]
  }

  type Artist {
    id: ID!
    name: String!
    Songs: [Song]
  }

  type Query {
    getArtists: [Artist!]!
    getSongs: [Song!]!
  }

  type Mutation {
    createArtist(name: String!): Artist!
    createSong(title: String!, duration: Int!): Song!
    addSongToArtist(songId: ID!, artistId: ID!): Boolean!
  }
`;
