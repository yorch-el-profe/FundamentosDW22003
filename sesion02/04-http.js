const http = require("node:http");

const server = http.createServer(function (request, response) {
	// Nota: Esta función se ejecuta en cada request
	console.log("Petición");

	// Agrega el recurso "Hello World" en la respuesta
	response.write("Hello World");

	// Termina la petición
	response.end();
});

// Escuchar un puerto entre 1024 - 65550
server.listen(40);
