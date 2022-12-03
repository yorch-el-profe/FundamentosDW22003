const { createLogger, transports, format } = require("winston");

module.exports = createLogger({
	format: format.combine(
		format.colorize(),
		format.timestamp({
			format: "DD/MM/YYYY hh:mm:ss A",
		}),
		format.printf(
			({ level, message, timestamp }) =>
				`[${level}] [${timestamp}] - ${message}`
		)
	),
	transports: [new transports.Console()],
});
