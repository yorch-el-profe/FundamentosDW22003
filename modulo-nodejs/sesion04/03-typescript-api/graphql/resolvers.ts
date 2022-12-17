import { GraphQLError } from "graphql";
import { Artist } from "../database/model/artist";
import { Song } from "../database/model/song";
import { AddSongArtist } from "../interfaces/add-song-artist";
import { NewArtist } from "../interfaces/new-artist";
import { NewSong } from "../interfaces/new-song";

export const resolvers = {
	Query: {
		async getArtists() {
			const x = await Artist.findAll({ include: [Song] });
			console.log(x);
			return Artist.findAll({ include: [Song] });
		},

		getSongs() {
			return Song.findAll({ include: [Artist] });
		},
	},
	Mutation: {
		createArtist(parent: unknown, data: NewArtist) {
			return Artist.create(data);
		},
		createSong(parent: unknown, data: NewSong) {
			return Song.create(data);
		},
		async addSongToArtist(parent: unknown, data: AddSongArtist) {
			const song = await Song.findByPk(data.songId);

			if (!song) {
				throw new GraphQLError("La canción no existe");
			}

			song.addArtist(data.artistId);
			await song.save();

			return true;
		},
	},
};
