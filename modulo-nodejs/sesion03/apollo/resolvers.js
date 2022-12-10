const { tables } = require("../database/sequelize");
const logger = require("../util/logger");
const md5 = require("md5");
const { GraphQLError } = require("graphql");
const jwt = require("jsonwebtoken");

function verifyToken(resolver) {
	return function (parent, args, context) {
		try {
			jwt.verify(context.token, process.env.JWT_SECRET);
			resolver(parent, args, context);
		} catch (e) {
			throw new GraphQLError("El usuario no tiene acceso a este recurso");
		}
	};
}

module.exports = {
	Query: {
		getCourses() {
			return tables.Course.findAll({ include: tables.Module });
		},
		getModules: verifyToken(function () {
			return tables.Module.findAll();
		}),
	},
	Mutation: {
		createCourse: verifyToken(function (_, { name }) {
			logger.debug(`Creating course: ${name}`);
			return tables.Course.create({ name });
		}),
		createModule: verifyToken(function (_, { name }) {
			logger.debug(`Creating module: ${name}`);
			return tables.Module.create({ name });
		}),
		assignModule: verifyToken(async function (_, { input }) {
			const { courseId, moduleId } = input;

			await tables.Module.update(
				{ courseId },
				{
					where: {
						id: moduleId,
					},
				}
			);

			return true;
		}),
		createUser: verifyToken(function (_, { input }) {
			const { email, password, role } = input;
			return tables.User.create({ email, password: md5(password), role });
		}),
		async authenticate(_, { input }) {
			const { email, password } = input;
			const user = await tables.User.findOne({
				where: {
					email,
					password: md5(password),
				},
			});

			if (!user) {
				throw new GraphQLError("Correo o contraseña incorrectos");
			}

			return jwt.sign({ id: user.id, role: user.role }, process.env.JWT_SECRET);
		},
	},
};
