// Unidad: Funciones como valores
// Ejecuta: node default_parameters.js
//
// Antes de ejecutarlo, escribe en un comentario qué imprimirá cada llamada.
// Después comprueba tu predicción. ¿Por qué a vale undefined en la llamada sin argumentos?

function defaultParameters(a, b = 3, c = 4) {
    console.log(`a = ${a}`)
    console.log(`b = ${b}`)
    console.log(`c = ${c}`)
}

defaultParameters(1, 2, 3)
defaultParameters(1, 2)
defaultParameters(1)
defaultParameters()
defaultParameters(1, undefined, 5) // ¿qué valor toma b aquí?
