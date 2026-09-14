// Unidad: El bucle de eventos
// Ejecuta: node main.js
//
// Cada escenario anota en un array el orden en que se ejecuta cada parte.
// SIN ejecutar el código, rellena el array esperado de cada escenario.
// Después ejecuta el script: los tests comprueban tus predicciones.
//
// Si fallas alguno, dibuja la pila, la cola de microtareas y la cola de tareas
// paso a paso hasta entender por qué.

const assert = require('node:assert/strict')

function escenario1() {
    const orden = []
    orden.push('A')
    setTimeout(() => orden.push('B'), 0)
    orden.push('C')
    return orden
}

function escenario2() {
    const orden = []
    setTimeout(() => orden.push('timeout'), 0)
    Promise.resolve().then(() => orden.push('then'))
    orden.push('síncrono')
    return orden
}

function escenario3() {
    const orden = []
    setTimeout(() => {
        orden.push('T1')
        Promise.resolve().then(() => orden.push('M dentro de T1'))
    }, 0)
    setTimeout(() => orden.push('T2'), 0)
    Promise.resolve()
        .then(() => orden.push('M1'))
        .then(() => orden.push('M2'))
    orden.push('S')
    return orden
}

function escenario4() {
    const orden = []
    setTimeout(() => orden.push('100 ms'), 100)
    setTimeout(() => orden.push('0 ms'), 0)
    const inicio = Date.now()
    while (Date.now() - inicio < 200) {
        // bucle síncrono que ocupa la pila 200 ms
    }
    orden.push('fin del bucle')
    return orden
}

// TODO: rellena cada array con tu predicción
const esperado1 = []
const esperado2 = []
const esperado3 = []
const esperado4 = []

const resultados = [escenario1(), escenario2(), escenario3(), escenario4()]

// Esperamos a que terminen todas las tareas pendientes antes de comprobar
setTimeout(() => {
    assert.deepStrictEqual(resultados[0], esperado1, 'escenario 1')
    assert.deepStrictEqual(resultados[1], esperado2, 'escenario 2')
    assert.deepStrictEqual(resultados[2], esperado3, 'escenario 3')
    assert.deepStrictEqual(resultados[3], esperado4, 'escenario 4')
    console.log('Test OK')
}, 500)
