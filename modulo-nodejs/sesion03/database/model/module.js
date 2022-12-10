const { DataTypes } = require("sequelize");

module.exports = {
	name: {
		type: DataTypes.STRING(100),
		allowNull: false,
	},
};
