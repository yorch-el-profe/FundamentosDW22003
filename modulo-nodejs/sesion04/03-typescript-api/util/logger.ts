import { createLogger, transports, format, Logger } from "winston";

const { Console } = transports;
const { colorize, prettyPrint, timestamp, printf, combine } = format;

export const logger: Logger = createLogger({
	format: combine(
		colorize(),
		timestamp(),
		prettyPrint(),
		printf(
			({ timestamp, message, level }) => `[${timestamp}][${level}] - ${message}`
		)
	),
	transports: [new Console()],
});
