function sum(a, b) {
	return a + b;
}

function subs(a, b) {
	return a - b;
}

function mult(a, b) {
	return a * b;
}

// Exportar: Definir qué se puede usar en otro archivo
// { "sum": sum, "subs": subs, "mult": mult }
module.exports = { sum, subs, mult };
