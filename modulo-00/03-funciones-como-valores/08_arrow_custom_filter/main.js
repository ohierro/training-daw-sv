// Unidad: Funciones como valores
// Ejecuta: node main.js
//
// El mismo ejercicio que 07_custom_filter, pero sin declarar las condiciones:
// pásalas directamente como funciones flecha en cada llamada.
// Después añade un test más: los números entre 5 y 20, ambos incluidos.

const assert = require('node:assert/strict')

function select(array, condition) {
}

const values = [1, 2, 3, 5, 7, 13, 17, 23, 29]

// TODO: sustituye cada null por una función flecha
// sólo pares
assert.deepStrictEqual(select(values, null), [2])

// mayores que 15
assert.deepStrictEqual(select(values, null), [17, 23, 29])

// menores de 10
assert.deepStrictEqual(select(values, null), [1, 2, 3, 5, 7])

console.log('Test OK')
