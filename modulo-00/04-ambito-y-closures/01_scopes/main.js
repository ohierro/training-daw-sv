// Unidad: Ámbito y closures
// Ejecuta: abre index.html o node main.js
//
// Este fichero usa var A PROPÓSITO, para ver sus diferencias con let.
// 1. Antes de ejecutarlo, apunta qué valores crees que se imprimirán.
// 2. Ejecútalo y compara. Explica cada diferencia en un comentario.
// 3. Reescribe scopesConLet() usando sólo let y const y comprueba que el valor
//    de la variable exterior ya no se ve afectado por el bucle.

'use strict'

var x = 10
var test = 5

console.log('valor de x ' + x)

function shadow() {
    var x = 20 // una x nueva que tapa a la global dentro de la función

    console.log('valor de x ' + x)
    console.log('valor de test ' + test) // test no está aquí: se busca hacia fuera
}

shadow()
console.log('valor de x ' + x)

function scopes() {
    var i = 0

    for (let j = 0; j < 10; j++) {
        var i = j // var no respeta el bloque del for: es la MISMA i de arriba
        console.log('i ' + i)
    }

    console.log('i al salir del bucle ' + i)
}

scopes()

function scopesConLet() {
    // TODO: repite scopes() con let y const. ¿Cuánto vale i al salir del bucle?
}

scopesConLet()
