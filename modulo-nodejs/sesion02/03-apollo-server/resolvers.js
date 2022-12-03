const logger = require("./logger");

let lastCourseId = 1002;
let lastModuleId = 2004;
let lastStudentId = 3002;

const courses = [
	{
		id: 1000,
		name: "Full Stack JavaScript",
		modules: [2000, 2001, 2002, 2003, 2004],
	},
	{
		id: 1001,
		name: "Full Stack Python",
		modules: [2000, 2001, 2002],
	},
	{
		id: 1002,
		name: "Full Stack Java",
		modules: [2000, 2001, 2002],
	},
];

const modules = [
	{
		id: 2000,
		name: "Frontend Fundamentals",
	},
	{
		id: 2001,
		name: "Programación con JavaScript",
	},
	{
		id: 2002,
		name: "Backend Fundamentals",
	},
	{
		id: 2003,
		name: "Backend con Node.js",
	},
	{
		id: 2004,
		name: "React",
	},
];

const students = [
	{
		id: 3000,
		name: "Alexandro",
		lastName: "Zamudio",
		age: 44,
	},
	{
		id: 3001,
		name: "Guadalupe",
		lastName: "Sagrero",
		age: 25,
	},
	{
		id: 3002,
		name: "Jaaziel",
		lastName: "Moreno",
		age: 32,
	},
];

module.exports = {
	Query: {
		// => getCourses: function () {}
		getCourses() {
			/*const result = [];

			for (const course of courses) {
				let $modules = [];

				for (const id of course.modules) {
					for (const module of modules) {
						if (id === module.id) {
							$modules.push(module);
							break;
						}
					}
				}

				result.push({ ...course, modules: $modules });
			}*/

			logger.info("Query GetCourses");
			return courses.map((c) => ({
				...c,
				modules: c.modules.map((id) => modules.find((m) => m.id === id)),
			}));
		},
		getStudents() {
			return students;
		},
	},
	Mutation: {
		createCourse(_, { name }) {
			const newCourse = { id: ++lastCourseId, name, modules: [] };
			courses.push(newCourse);
			return newCourse;
		},
		createModule(_, { name }) {
			const newModule = { id: ++lastModuleId, name };
			modules.push(newModule);
			return newModule;
		},
		createStudent(_, { input }) {
			const { name, lastName, age, gender } = input;
			const newStudent = { id: ++lastStudentId, name, lastName, age, gender };
			students.push(newStudent);
			return newStudent;
		},
	},
};
