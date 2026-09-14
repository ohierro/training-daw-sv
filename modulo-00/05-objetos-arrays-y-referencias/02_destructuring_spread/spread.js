// Unidad: Objetos, arrays y referencias
// Ejecuta: node spread.js
//
// 1. Ejecútalo y comprueba que first no cambia al crear second y third.
// 2. Crea copy = first (sin spread), haz copy.push('otro') y mira first.
//    ¿Qué ha pasado? Arréglalo usando spread.
// 3. Con objetos: a partir de const user = { name: 'Ana', tags: ['admin'] },
//    crea una copia con spread y añade una etiqueta a copia.tags.
//    ¿Cambia user.tags? ¿Qué tendrías que hacer para que no cambie?

const first = ['one', 'two', 'three']
const second = [...first, 'four', 'five']
const third = ['zero', ...second]

console.log(first)
console.log(second)
console.log(third)
