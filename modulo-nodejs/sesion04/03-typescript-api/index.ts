import { config } from "dotenv";
config();

import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { connect } from "./database/sequelize";
import { typeDefs } from "./graphql/typeDefs";
import { resolvers } from "./graphql/resolvers";
import { logger } from "./util/logger";

connect();

const server: ApolloServer = new ApolloServer({
	typeDefs,
	resolvers,
});

startStandaloneServer(server, {
	listen: { port: 8080 },
}).then(function () {
	logger.info("Servidor escuchando el puerto 8080");
});
