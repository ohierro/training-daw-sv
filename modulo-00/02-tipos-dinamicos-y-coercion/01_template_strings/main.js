// Unidad: Tipos dinámicos y coerción
// Ejecuta: node main.js
//
// Completa hello() para que devuelva el saludo usando un template literal
// (acentos graves y ${...}), sin concatenar con +.

const assert = require('node:assert/strict')

function hello(name, lastname, years) {
}

assert.strictEqual(hello('John', 'Anderton', 35), 'Hola John Anderton, tienes 35 años de edad')
assert.strictEqual(hello('John', 'Foo', 47), 'Hola John Foo, tienes 47 años de edad')

console.log('Test OK')
