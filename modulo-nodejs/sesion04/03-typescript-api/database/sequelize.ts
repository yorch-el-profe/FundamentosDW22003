import { Sequelize } from "sequelize";
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
