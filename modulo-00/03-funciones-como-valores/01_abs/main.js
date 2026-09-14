// Unidad: Funciones como valores
// Ejecuta: node main.js
//
// Implementa abs(), que devuelve el valor absoluto de un número, sin usar
// Math.abs(). Escríbela primero como declaración de función y después como
// función flecha guardada en una constante: los tests deben pasar con las dos.

const assert = require('node:assert/strict')

function abs(value) {
}

assert.strictEqual(abs(4), 4)
assert.strictEqual(abs(-4), 4)
assert.strictEqual(abs(0), 0)

console.log('Test OK')
