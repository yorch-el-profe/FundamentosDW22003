const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const { buildSchema } = require("graphql");
const app = express();

// Tipos disponibles de GraphQL
// ID, Int, Float, Boolean, String, [T], ENUM
const schema = buildSchema(`
  # Definición de los tipos disponibles
  type Product {
    id: ID
    name: String
    price: Float
  }

  # Definición de las consultas disponibles
  type Query {
    getAll: [Product]
    getById(id: ID): Product
    getByName(name: String): [Product]
  }
`);

const products = [
	{
		id: 1000,
		name: "Xbox Series X",
		price: 15000,
	},
	{
		id: 1001,
		name: "Nintendo Switch OLED",
		price: 8000,
	},
	{
		id: 1002,
		name: "Playstation 5",
		price: 18000,
	},
	{
		id: 1003,
		name: "iPhone 14",
		price: 40000,
	},
];

const resolvers = {
	getAll() {
		return products;
	},
	getById({ id }) {
		return products.find((p) => p.id === id);
	},
	getByName({ name }) {
		return products.filter((p) =>
			p.name.toLowerCase().includes(name.toLowerCase())
		);
	},
};

// Integrar GraphQL con Express
app.use(
	"/graphql",
	graphqlHTTP({
		schema, // schema: schema,
		rootValue: resolvers,
		graphiql: true,
	})
);

app.listen(8080, function () {
	console.log("Escuchando puerto 8080 😱");
});
