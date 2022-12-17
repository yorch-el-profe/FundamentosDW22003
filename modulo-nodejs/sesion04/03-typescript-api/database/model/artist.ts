import {
	CreationOptional,
	InferAttributes,
	InferCreationAttributes,
	Model,
	NonAttribute,
} from "sequelize";
import { Song } from "./song";

export class Artist extends Model<
	InferAttributes<Artist>,
	InferCreationAttributes<Artist>
> {
	declare id: CreationOptional<number>;
	declare name: string;

	declare Songs?: NonAttribute<Song[]>;
}
