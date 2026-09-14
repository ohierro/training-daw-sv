// Unidad: Promesas
// Ejecuta: node main.js
//
// Las funciones de «API» simulan peticiones que tardan un segundo. No las
// modifiques.
//
// 1. cargarEncadenado(): carga usuario, notificaciones y cursos UNA DETRÁS DE
//    OTRA con then y devuelve una promesa que se cumple con
//    { usuario, notificaciones, cursos }.
// 2. cargarEnParalelo(): lo mismo con Promise.all.
// 3. cargarAunqueFalle(): usa Promise.allSettled con las tres cargas y
//    cargarOfertas(), que siempre falla. Devuelve un array con los valores de
//    las que se cumplieron y cuántas fallaron: { valores, fallidas }.
// 4. Ejecuta y compara los tiempos que se imprimen. ¿Por qué cargarEnParalelo
//    tarda un tercio?

const assert = require('node:assert/strict')

// ---- «API» simulada ----
const retraso = (ms, valor) => new Promise((resolve) => setTimeout(() => resolve(valor), ms))

const cargarUsuario = () => retraso(1000, { id: 7, nombre: 'Ana' })
const cargarNotificaciones = () => retraso(1000, ['Nueva nota', 'Tarea pendiente'])
const cargarCursos = () => retraso(1000, ['DWEC', 'DWES'])
const cargarOfertas = () =>
    new Promise((_, reject) => setTimeout(() => reject(new Error('servicio no disponible')), 500))

// ---- Tu código ----

function cargarEncadenado() {
}

function cargarEnParalelo() {
}

function cargarAunqueFalle() {
}

// ---- Tests (no los modifiques) ----

const esperado = {
    usuario: { id: 7, nombre: 'Ana' },
    notificaciones: ['Nueva nota', 'Tarea pendiente'],
    cursos: ['DWEC', 'DWES'],
}

function medir(nombre, fn) {
    const inicio = Date.now()
    return fn().then((resultado) => {
        const ms = Date.now() - inicio
        console.log(`${nombre}: ${ms} ms`)
        return { resultado, ms }
    })
}

medir('encadenado', cargarEncadenado)
    .then(({ resultado, ms }) => {
        assert.deepStrictEqual(resultado, esperado)
        assert.ok(ms >= 2900, 'cargarEncadenado debe hacer las cargas en serie')
        return medir('en paralelo', cargarEnParalelo)
    })
    .then(({ resultado, ms }) => {
        assert.deepStrictEqual(resultado, esperado)
        assert.ok(ms < 1500, 'cargarEnParalelo debe lanzar las tres cargas a la vez')
        return medir('aunque falle', cargarAunqueFalle)
    })
    .then(({ resultado }) => {
        assert.strictEqual(resultado.fallidas, 1)
        assert.strictEqual(resultado.valores.length, 3)
        console.log('Test OK')
    })
    .catch((error) => {
        console.error('Test FALLIDO:', error.message)
        process.exitCode = 1
    })
