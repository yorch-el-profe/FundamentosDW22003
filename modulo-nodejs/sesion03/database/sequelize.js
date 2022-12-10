const { Sequelize } = require("sequelize");
const logger = require("../util/logger");
const courseTable = require("./model/course");
const moduleTable = require("./model/module");
const { MYSQL_USER, MYSQL_PASS, MYSQL_HOST, MYSQL_DB } = process.env;

const sequelize = new Sequelize(MYSQL_DB, MYSQL_USER, MYSQL_PASS, {
	host: MYSQL_HOST,
	dialect: "mysql",
	logging: (message) => logger.debug(message),
});

const Course = sequelize.define("courses", courseTable);
const Module = sequelize.define("modules", moduleTable);

Course.hasMany(Module);
Module.belongsTo(Course);

async function connect() {
	try {
		await sequelize.authenticate();
		await sequelize.sync();
	} catch (e) {
		logger.error("No se puede establecer conexión con la base de datos");
		logger.error(e.message);
	}
}

module.exports = {
	connect,
	tables: {
		Course,
		Module,
	},
};
