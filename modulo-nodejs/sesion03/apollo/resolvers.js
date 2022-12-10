const { tables } = require("../database/sequelize");
const logger = require("../util/logger");

module.exports = {
	Query: {
		getCourses() {
			return tables.Course.findAll({ include: tables.Module });
		},
		getModules() {
			return tables.Module.findAll();
		},
	},
	Mutation: {
		createCourse(_, { name }) {
			logger.debug(`Creating course: ${name}`);
			return tables.Course.create({ name });
		},
		createModule(_, { name }) {
			logger.debug(`Creating module: ${name}`);
			return tables.Module.create({ name });
		},
		async assignModule(_, { courseId, moduleId }) {
			await tables.Module.update(
				{ courseId },
				{
					where: {
						id: moduleId,
					},
				}
			);

			return true;
		},
	},
};
