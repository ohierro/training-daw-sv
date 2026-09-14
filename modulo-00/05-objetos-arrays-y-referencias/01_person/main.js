// Unidad: Objetos, arrays y referencias
// Ejecuta: node main.js
//
// 1. createPerson() devuelve un objeto literal con las propiedades name,
//    lastname, years, gender y address. Usa la forma abreviada de propiedades
//    ({ name, lastname, ... }).
// 2. Completa birthday(), que devuelve una persona NUEVA con un año más, sin
//    modificar la original. Usa el operador spread.

const assert = require('node:assert/strict')

function createPerson(name, lastname, years, gender, address) {
}

function birthday(person) {
}

const person = createPerson('John', 'Foo', 35, 'male', 'Fake Street 123')
assert.strictEqual(person.name, 'John')
assert.strictEqual(person.lastname, 'Foo')
assert.strictEqual(person.years, 35)
assert.strictEqual(person.address, 'Fake Street 123')

const older = birthday(person)
assert.strictEqual(older.years, 36)
assert.strictEqual(person.years, 35, 'birthday() no debe modificar la persona original')
assert.notStrictEqual(older, person, 'birthday() debe devolver un objeto nuevo')

console.log('Test OK')
