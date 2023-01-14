// 1. Clases
class Person {
	name: string;
	lastName: string;

	constructor(name: string, lastName: string) {
		this.name = name;
		this.lastName = lastName;
	}

	sayHi(): string {
		return `Hi, my name is ${this.name}`;
	}
}

const juanito: Person = new Person("Juan", "Perez");
const roberto: Person = new Person("Roberto", "Ortega");

console.log(juanito.sayHi());
console.log(roberto.sayHi());

// 2. Interfaces (nuevo)
interface Product {
	id: number;
	name: string;
	price: number;
}

const gansito: Product = { id: 1, name: "Gansito", price: 15 };

// 3. Alias (utilizar lo menos posible)
type Dog = { name: string; breed: string };
const dinky: Dog = { name: "Dinky", breed: "Eléctrico" };

type Cat = { name: string; lifes: number };

const gatoConBotas: Cat = {
	name: "Gato con Botas",
	lifes: 1,
};

interface Bird {
	name: string;
	color: string;
}

const bird: Bird = { name: "Pajaro Loco", color: "Azul" };
