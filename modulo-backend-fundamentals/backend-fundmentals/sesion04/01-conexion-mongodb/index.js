// Lee el archivo ".env" y agrega las variables de entorno al proceso
require("dotenv").config();

const mongoose = require("mongoose");

// 1. Realizar la conexión con la base de datos
mongoose
	.connect(process.env.MONGO_URI)
	.then(function () {
		console.log("Conectado a la base de datos");
		process.exit(0); // Termina con éxito
	})
	.catch(function () {
		console.log("No se pudo establecer conexion con la base de datos");
		process.exit(1); // Termina con un error
	});
