const express = require("express");
const app = express();
const logger = require("./logger");

app.get("*", function (request, response) {
	logger.debug("Atendiendo petición...");
	logger.info(request.url);
	response.send("Hello World");
});

app.listen(8080, function () {
	logger.info("Escuchando el puerto 8080");
	//console.log(new Date().toLocaleTimeString(), "|", "Escuchando puerto 8080");
});
