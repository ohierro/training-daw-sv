// Unidad: Transformar colecciones con métodos de array
// Ejecuta: node main.js
//
// insertIfNotExists(array, item, atStart) devuelve un array NUEVO que contiene
// item, al principio si atStart es true o al final si es false. Si item ya
// estaba, devuelve una copia sin cambios.
// No modifiques el array recibido: nada de push() ni unshift() sobre él.
// Pista: includes() y el operador spread.

const assert = require('node:assert/strict')

function insertIfNotExists(array, item, atStart) {
    return array
}

const fruits = ['pera', 'manzana']

let result = insertIfNotExists(fruits, 'pera', false)
assert.deepStrictEqual(result, ['pera', 'manzana'])

result = insertIfNotExists(result, 'melón', false)
assert.deepStrictEqual(result, ['pera', 'manzana', 'melón'])

result = insertIfNotExists(result, 'melocotón', true)
assert.deepStrictEqual(result, ['melocotón', 'pera', 'manzana', 'melón'])

assert.deepStrictEqual(fruits, ['pera', 'manzana'], 'el array original no debe cambiar')

console.log('Test OK')
