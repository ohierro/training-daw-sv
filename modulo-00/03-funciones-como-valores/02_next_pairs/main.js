// Unidad: Funciones como valores
// Ejecuta: node main.js
//
// nextPairs(n) devuelve un array con el número par anterior y el número par
// siguiente a n. Si n ya es par, no cuenta: se devuelven los pares que lo rodean.

const assert = require('node:assert/strict')

function nextPairs(value) {
}

assert.deepStrictEqual(nextPairs(3), [2, 4])
assert.deepStrictEqual(nextPairs(4), [2, 6])

console.log('Test OK')
