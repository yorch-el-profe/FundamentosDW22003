require("dotenv").config();

const { ApolloServer } = require("@apollo/server");
const { startStandaloneServer } = require("@apollo/server/standalone");
const logger = require("./util/logger");
const typeDefs = require("./apollo/typeDefs");
const resolvers = require("./apollo/resolvers");
const sequelize = require("./database/sequelize");

sequelize.connect();

const server = new ApolloServer({ typeDefs, resolvers });

startStandaloneServer(server, {
	listen: { port: 8080 },
}).then(function () {
	logger.info("Servidor escuchando el puerto 8080 🚀");
});
