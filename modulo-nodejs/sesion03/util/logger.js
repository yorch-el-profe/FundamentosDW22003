const { createLogger, transports, format } = require("winston");

const { Console, File } = transports;
const { combine, timestamp, prettyPrint, printf } = format;

module.exports = createLogger({
	format: combine(
		timestamp({
			format: "DD/MM/YY hh:mm:ss A",
		}),
		prettyPrint(),
		printf(
			({ timestamp, level, message }) => `[${timestamp}][${level}] - ${message}`
		)
	),
	transports: [
		new Console({ level: "debug" }),
		new File({
			level: "error",
			filename: "error.log",
		}),
		new File({
			level: "info",
			filename: "combined.log",
		}),
	],
});
