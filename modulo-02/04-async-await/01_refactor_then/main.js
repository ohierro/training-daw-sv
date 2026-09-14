// Unidad: async y await
// Ejecuta: node main.js
//
// mostrarResumenConThen() ya funciona: encadena tres pasos asíncronos con then.
//
// 1. Escribe mostrarResumen(idUsuario) con async/await, que haga exactamente lo
//    mismo y devuelva el mismo texto. Sin ningún then.
// 2. Si el usuario no existe, cargarUsuario rechaza. Captura el error con
//    try/catch y devuelve 'Usuario no encontrado'.
// 3. Pase lo que pase, al terminar debe quedar registrado 'fin' en el array
//    registro (finally).
// 4. Pregunta: ¿qué devuelve mostrarResumen(1) si lo llamas SIN await?
//    Compruébalo con console.log y explícalo.

const assert = require('node:assert/strict')

// ---- «API» simulada ----
const retraso = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

const usuarios = { 1: { id: 1, nombre: 'Ana' } }
const pedidos = { 1: [{ id: 10, total: 25 }, { id: 11, total: 40 }] }

async function cargarUsuario(id) {
    await retraso(100)
    if (!usuarios[id]) throw new Error(`No existe el usuario ${id}`)
    return usuarios[id]
}

async function cargarPedidos(usuario) {
    await retraso(100)
    return pedidos[usuario.id] ?? []
}

async function calcularTotal(lista) {
    await retraso(100)
    return lista.reduce((suma, pedido) => suma + pedido.total, 0)
}

const registro = []

// ---- Versión con then (referencia) ----
function mostrarResumenConThen(idUsuario) {
    let nombre
    return cargarUsuario(idUsuario)
        .then((usuario) => {
            nombre = usuario.nombre
            return cargarPedidos(usuario)
        })
        .then((lista) => calcularTotal(lista))
        .then((total) => `${nombre} ha gastado ${total} €`)
        .catch(() => 'Usuario no encontrado')
        .finally(() => registro.push('fin'))
}

// ---- Tu versión con async/await ----
async function mostrarResumen(idUsuario) {
}

// ---- Tests (no los modifiques) ----
async function tests() {
    assert.strictEqual(await mostrarResumenConThen(1), 'Ana ha gastado 65 €')
    registro.length = 0

    assert.strictEqual(await mostrarResumen(1), 'Ana ha gastado 65 €')
    assert.strictEqual(await mostrarResumen(99), 'Usuario no encontrado')
    assert.deepStrictEqual(registro, ['fin', 'fin'])
    assert.ok(!mostrarResumen.toString().includes('.then('), 'mostrarResumen no debe usar then')

    console.log('Test OK')
}

tests().catch((error) => {
    console.error('Test FALLIDO:', error.message)
    process.exitCode = 1
})
