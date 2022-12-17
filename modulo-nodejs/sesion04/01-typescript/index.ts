/*
  number
  string
  boolean
  null
  undefined
  object
  any = Cualquier cosa
  unknown = No se el tipo
  never = "void" (nada)

  tipo[], number[], string[]
*/

function sum(a: number, b: number): number {
	return a + b;
}

console.log(sum(1, 2)); // 3

//console.log(sum("34", "5")); // 345

//console.log(sum([], {})); //

// Creando tipos
function sayHi(person: Person): string {
	return `Hello my name is ${person.name}`;
}

// Manera #1 para crear un nuevo tipo (clases)
/*class Person {
	name: string;

	constructor(name: string) {
		this.name = name;
	}
}

const juanito: Person = new Person("Juan");

console.log(sayHi(juanito));*/

// Manera #2 (interfaces)
/*interface Person {
	name: string;
	age: number;
}

const pedrito: Person = { name: "Pedrito", age: 20 };

console.log(sayHi(pedrito));*/

// Manera #3 (alias = type)
type Person = { name: string };

const joaquin: Person = { name: "Joaquin" };

console.log(sayHi(joaquin));
