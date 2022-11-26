const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const { buildSchema } = require("graphql");
const app = express();

// Tipos disponibles de GraphQL
// ID, Int, Float, Boolean, String, [T], ENUM
const schema = buildSchema(`
  type Product {
    id: ID
    name: String
    price: Float
  }
`);

// Integrar GraphQL con Express
app.use("/graphql", graphqlHTTP({}));

app.listen(8080, function () {
	console.log("Escuchando puerto 8080");
});
