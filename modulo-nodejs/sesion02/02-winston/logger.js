const { createLogger, transports, format } = require("winston");

const logger = createLogger({
	format: format.combine(
		format.timestamp({
			format: "DD/MM/YYYY hh:mm:ss A",
		}),
		format.printf(
			({ level, message, timestamp }) =>
				`[${level}] [${timestamp}] - ${message}`
		)
	),
	transports: [
		// Winston envíe los logs a la consola
		new transports.Console({
			level: "debug", // aplica para: debug, info, warn y error
		}),

		// Winston envía los logs a un archivo
		new transports.File({
			level: "error", // aplica para: error
			filename: "./error.txt",
		}),

		new transports.File({
			level: "info", // aplica para: info, warn y error
			filename: "./combined.txt",
		}),
	],
});

module.exports = logger;

/*
  Niveles de Winston (en orden)

  error (0)
  warn (1) -> Advertencias
  info (2) -> Mensajes importantes
  debug (3) -> Mensajes casuales
*/
