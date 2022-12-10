const { DataTypes } = require("sequelize");

module.exports = {
	email: {
		type: DataTypes.STRING(80),
		allowNull: false,
		unique: true,
	},
	password: {
		type: DataTypes.STRING(50),
		allowNull: false,
	},
	role: {
		type: DataTypes.ENUM("user", "admin"),
		defaultValue: "user",
		allowNull: false,
	},
};
