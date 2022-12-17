import { DataTypes } from "sequelize";

export const songTable = {
	id: {
		type: DataTypes.BIGINT,
		autoIncrement: true,
		primaryKey: true,
	},
	title: {
		type: DataTypes.STRING,
		allowNull: false,
	},
	duration: {
		type: DataTypes.TINYINT,
		allowNull: false,
		validate: {
			min: 0,
		},
	},
};
