// JS
//const { ApolloServer } = require("@apollo/server");
//const { startStandaloneServer } = require("@apollo/server/standalone");

// ES6 / TS
import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";

const typeDefs = `
  type Query {
    sum(a: Int!, b: Int!): Int!
  }
`;

// type SumParam = { a: number; b: number };

interface SumParam {
	a: number;
	b: number;
}

const resolvers = {
	Query: {
		sum(parent: unknown, data: SumParam): number {
			return data.a + data.b;
		},
	},
};

const server: ApolloServer = new ApolloServer({
	typeDefs,
	resolvers,
});

startStandaloneServer(server, {
	listen: { port: 8080 },
}).then(function (): void {
	console.log("Escuchando puerto 8080");
});
