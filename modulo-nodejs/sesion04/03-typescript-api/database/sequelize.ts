import { Sequelize } from "sequelize";
import { logger } from "../util/logger";
const { MYSQL_USER, MYSQL_PASS, MYSQL_DB, MYSQL_HOST } = process.env;
import { Artist } from "./model/artist";
import { Song } from "./model/song";
import { artistTable } from "./tables/artist";
import { songTable } from "./tables/song";

const sequelize = new Sequelize(
	MYSQL_DB as string,
	MYSQL_USER as string,
	MYSQL_PASS,
	{
		host: MYSQL_HOST,
		dialect: "mysql",
		logging: (msg: String) => logger.debug(msg),
	}
);

Artist.init(artistTable, {
	tableName: "artists",
	sequelize,
});

Song.init(songTable, {
	tableName: "songs",
	sequelize,
});

Artist.belongsToMany(Song, { through: "artists_songs" });
Song.belongsToMany(Artist, { through: "artists_songs" });

export async function connect() {
	try {
		await sequelize.authenticate();
		await sequelize.sync();

		logger.info("Conectado a la base de datos");
	} catch (e: any) {
		logger.error("No se pudo conectar a la base de datos");
		logger.error(e.message);
	}
}
