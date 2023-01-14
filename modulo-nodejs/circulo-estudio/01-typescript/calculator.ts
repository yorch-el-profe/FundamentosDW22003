export function sum(a: number, b: number): number {
	return a + b;
}

export function subs(a: number, b: number): number {
	return a - b;
}

export const PI: number = 3.1416;

/*
  Alternativa 1:
  module.exports = {
    sum,
    subs,
    PI
  }

  Alternativa 2:
  exports.sum = function ()...

  exports.subs = function ()...

  exports.PI = 3.1416
*/
