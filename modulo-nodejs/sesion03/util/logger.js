const { createLogger, transports, format } = require("winston");

const { Console, File } = transports;
const { combine, timestamp, prettyPrint, printf, colorize } = format;

const customFormat = combine(
	timestamp({
		format: "DD/MM/YY hh:mm:ss A",
	}),
	prettyPrint(),
	printf(
		({ timestamp, level, message }) => `[${timestamp}][${level}] - ${message}`
	)
);

module.exports = createLogger({
	format: customFormat,
	transports: [
		new Console({ level: "debug", format: combine(colorize(), customFormat) }),
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
