// Unidad: Clases y el valor de this
// Ejecuta: node main.js
//
// pokemonName() falla con «this.getPokeName is not a function» (o «Cannot read
// properties of undefined»).
// 1. Explica en un comentario qué vale this dentro de pokemonName y por qué.
// 2. Arréglalo sin modificar pokemonName, de tres formas:
//    a) pokemonName.call(pokemon)
//    b) const ligada = pokemonName.bind(pokemon); ligada()
//    c) añadiendo pokemonName como método del objeto pokemon
// 3. Reescribe pokemon como una clase Pokemon con constructor y métodos.
//    Comprueba que const suelto = pika.getPokeName; suelto() también falla,
//    y arréglalo con una flecha.

'use strict'

const pokemon = {
    firstname: 'Pika',
    lastname: 'Chu',
    getPokeName: function () {
        return `${this.firstname}${this.lastname}`
    },
}

const pokemonName = function () {
    console.log(`${this.getPokeName()}, ¡te elijo a ti!`)
}

pokemonName() // error: ¿por qué?
