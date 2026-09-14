// Unidad: Transformar colecciones con métodos de array
// Ejecuta: node main.js
//
// doCalculation(array) devuelve un objeto con la suma, el máximo, el mínimo y
// la media de un array de números.
// 1. Resuélvelo primero con un único bucle for...of.
// 2. Después, sin bucles: reduce() para la suma y Math.max(...array) /
//    Math.min(...array) para los extremos.

const assert = require('node:assert/strict')

function doCalculation(array) {
}

assert.deepStrictEqual(doCalculation([1, 2, 3, 4]), { sum: 10, max: 4, min: 1, avg: 2.5 })
assert.deepStrictEqual(doCalculation([5, 5, 5, 5]), { sum: 20, max: 5, min: 5, avg: 5 })
assert.deepStrictEqual(
    doCalculation([1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 4, 5, 5, 5]),
    { sum: 45, max: 5, min: 1, avg: 3 },
)

console.log('Test OK')
