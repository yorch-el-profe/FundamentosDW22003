const { ApolloServer } = require("@apollo/server");
const { startStandaloneServer } = require("@apollo/server/standalone");
const logger = require("./util/logger");
const typeDefs = require("./apollo/typeDefs");
const resolvers = require("./apollo/resolvers");

const server = new ApolloServer({ typeDefs, resolvers });

startStandaloneServer(server, {
	listen: { port: 8080 },
}).then(function () {
	logger.debug("Servidor escuchando el puerto 8080 🚀");
});
