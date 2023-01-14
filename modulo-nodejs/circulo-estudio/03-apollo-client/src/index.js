import { ApolloClient, InMemoryCache, gql } from "@apollo/client/core";

const client = new ApolloClient({
	uri: "http://localhost:8080",
	cache: new InMemoryCache(),
});

const button = document.getElementById("get-image");

button.addEventListener("click", function () {
	const select = document.getElementById("breeds");

	client
		.query({
			query: gql`
				query ($breed: String!) {
					getRandomImage(breed: $breed)
				}
			`,
			variables: {
				breed: select.value,
			},
		})
		.then((response) => {
			const { getRandomImage } = response.data;
			updateImage(getRandomImage);
		});
});

/**
 * Función que consulta con GraphQL la lista
 * de todas las razas
 */
function getBreeds() {
	client
		.query({
			query: gql`
				query {
					getBreeds
				}
			`,
		})
		.then((response) => {
			const { getBreeds } = response.data;
			renderBreeds(getBreeds);
		});
}

/**
 * Función renderiza la lista de las razas
 * en un <select> en el UI
 * @param {*} breeds
 */
function renderBreeds(breeds) {
	const select = document.getElementById("breeds");

	for (const breed of breeds) {
		const option = document.createElement("option"); // <option></option>
		option.innerText = breed; // <option>Chihuahua</option>
		option.value = breed; // <option value="chihuahua">Chihuahua</option>
		select.appendChild(option);
	}
}

/**
 * Función que actualiza la imagen
 */
function updateImage(url) {
	const img = document.getElementById("random-image");
	img.src = url;
}

getBreeds();
