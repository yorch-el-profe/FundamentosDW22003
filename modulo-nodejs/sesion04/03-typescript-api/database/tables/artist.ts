import { DataTypes } from "sequelize";

export const artistTable = {
	id: {
		type: DataTypes.BIGINT,
		autoIncrement: true,
		primaryKey: true,
	},
	name: {
		type: DataTypes.STRING,
		allowNull: false,
	},
};

// module.exports = {...}
