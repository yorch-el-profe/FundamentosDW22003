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

module.exports = {
	Query: {
		getCourses() {
			// => getCourses: function () {}
			return courses.map((c) => ({
				...c,
				modules: c.modules.map((id) => modules.find((m) => m.id === id)),
			}));
		},
	},
};
