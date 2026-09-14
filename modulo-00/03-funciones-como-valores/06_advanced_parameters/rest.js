// Unidad: Funciones como valores
// Ejecuta: node rest.js
//
// El parámetro rest (...resto) agrupa en un array todos los argumentos que
// sobran. Explica por qué la llamada de abajo devuelve 9.
// Ampliación: escribe media(...notas), que devuelva la media de cualquier
// cantidad de números.

function f(x, y, ...resto) {
    return (x + y) * resto.length
}

console.log(`¿es 9? ${f(1, 2, 'hola', true, 7) === 9}`)
