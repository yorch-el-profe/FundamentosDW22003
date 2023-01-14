// const axios = require('axios');
import axios, { AxiosResponse } from "axios";
import { BreedList } from "./interfaces/breed-list";
import { DogResponse } from "./interfaces/dog-response";
import { RandomImageInput } from "./interfaces/random-image-input";

const Query = {
	async getBreeds(): Promise<string[]> {
		const response: AxiosResponse = await axios.get(
			"https://dog.ceo/api/breeds/list/all"
		);
		const data: DogResponse<BreedList> = response.data;
		return Object.keys(data.message);
	},

	async getRandomImage(
		parent: unknown,
		{ breed }: RandomImageInput
	): Promise<string> {
		const response: AxiosResponse = await axios.get(
			`https://dog.ceo/api/breed/${breed}/images/random`
		);
		const data: DogResponse<string> = response.data;
		return data.message;
	},
};

export default { Query };
