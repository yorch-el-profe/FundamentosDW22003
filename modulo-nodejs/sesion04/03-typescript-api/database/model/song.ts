import {
	CreationOptional,
	HasManyAddAssociationMixin,
	InferAttributes,
	InferCreationAttributes,
	Model,
	NonAttribute,
} from "sequelize";
import { Artist } from "./artist";

export class Song extends Model<
	InferAttributes<Song>,
	InferCreationAttributes<Song>
> {
	declare id: CreationOptional<number>;
	declare title: string;
	declare duration: number;

	declare artists?: NonAttribute<Artist[]>;

	declare addArtist: HasManyAddAssociationMixin<Artist, number>;
}
