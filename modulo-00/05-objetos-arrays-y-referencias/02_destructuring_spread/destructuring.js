// Unidad: Objetos, arrays y referencias
// Ejecuta: node destructuring.js
//
// 1. Ejecútalo y explica por qué la línea de data no muestra el objeto.
//    Cámbiala para que lo muestre (pista: JSON.stringify o console.log con
//    varios argumentos).
// 2. Extrae score y position directamente en la primera desestructuración,
//    sin pasar por la variable data.

function multiple() {
    return ['John', 39, { score: 5560, position: 8 }]
}

const [name, years, data] = multiple()
const { score, position } = data

console.log(`name ${name}`)
console.log(`years ${years}`)
console.log(`data ${data}`)

console.log(`score ${score}`)
console.log(`position ${position}`)
