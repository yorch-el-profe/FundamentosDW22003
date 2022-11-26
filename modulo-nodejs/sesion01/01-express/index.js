// 1. Importar Express
const express = require("express");

// 2. Crear una instancia de un servidor
const app = express();

// 3. Agregar los endpoints (rutas) disponibles en mi API
// HTTP Verbs / Methods
// GET, POST, PUT, DELETE, PATCH, OPTIONS, HEAD, etc...
app.get("/", function (request, response) {
	response.send("Hello World"); // Enviando al cliente "Hello World"
});

const products = [
	{ id: 100, name: "Coca Cola" },
	{ id: 101, name: "Gansito" },
	{ id: 102, name: "Ricaleta" },
];

app.get("/products", function (request, response) {
	response.json(products); // Enviando el arreglo de productos en forma de JSON
});

// 4. Escuchar un puerto
app.listen(8080, function () {
	console.log("Escuchando puerto 8080 😎");
});
