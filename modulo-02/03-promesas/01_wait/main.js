// Unidad: Promesas
// Ejecuta: node main.js
//
// 1. esperar(ms): devuelve una promesa que se cumple, sin valor, pasados ms
//    milisegundos. Usa new Promise y setTimeout.
// 2. esperarValor(ms, valor): igual, pero se cumple con valor.
// 3. fallarTras(ms, mensaje): devuelve una promesa que se RECHAZA pasados ms
//    milisegundos con new Error(mensaje).
// 4. cuentaAtras(): usando sólo then (sin async/await), imprime 3, 2, 1 y
//    «¡Ya!» con un segundo entre cada mensaje, y devuelve la promesa de la cadena.
//    Pista: cada then debe DEVOLVER la siguiente espera.

const assert = require('node:assert/strict')

function esperar(ms) {
}

function esperarValor(ms, valor) {
}

function fallarTras(ms, mensaje) {
}

function cuentaAtras() {
}

// ---- Tests (no los modifiques) ----

const inicio = Date.now()

esperar(300)
    .then((resultado) => {
        assert.strictEqual(resultado, undefined)
        assert.ok(Date.now() - inicio >= 290, 'esperar(300) debe tardar unos 300 ms')
        return esperarValor(100, 42)
    })
    .then((valor) => {
        assert.strictEqual(valor, 42)
        return fallarTras(100, 'algo salió mal')
    })
    .then(() => {
        assert.fail('fallarTras debería haber rechazado la promesa')
    })
    .catch((error) => {
        assert.strictEqual(error.message, 'algo salió mal')
        return cuentaAtras()
    })
    .then(() => {
        assert.ok(Date.now() - inicio >= 3400, 'la cuenta atrás debe tardar unos 3 segundos')
        console.log('Test OK')
    })
    .catch((error) => {
        console.error('Test FALLIDO:', error.message)
        process.exitCode = 1
    })
