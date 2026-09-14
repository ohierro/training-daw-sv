// Unidad: async y await
// Ejecuta: node main.js
//
// cargarTitulosEnSerie() ya funciona, pero con 10 libros tarda unos 3 segundos
// porque espera cada consulta antes de lanzar la siguiente.
//
// 1. Escribe cargarTitulosEnParalelo(ids) con map + Promise.all. Debe devolver
//    los títulos en el MISMO orden que los ids, aunque las consultas terminen
//    en otro orden (cada una tarda un tiempo distinto).
// 2. Escribe cargarPrimeroDisponible(ids): devuelve el título del libro que
//    responda antes. ¿Qué método de Promise necesitas?
// 3. Escribe cargarDeDosEnDos(ids): procesa los ids en grupos de 2; dentro de
//    cada grupo, en paralelo; los grupos, uno detrás de otro. Así no se lanzan
//    todas las peticiones a la vez contra el servidor.

const assert = require('node:assert/strict')

// ---- «API» simulada: cada libro tarda entre 100 y 500 ms ----
const retraso = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

async function cargarLibro(id) {
    const ms = 100 + ((id * 137) % 5) * 100
    await retraso(ms)
    return { id, titulo: `Libro ${id}` }
}

// ---- Referencia ----
async function cargarTitulosEnSerie(ids) {
    const titulos = []
    for (const id of ids) {
        const libro = await cargarLibro(id)
        titulos.push(libro.titulo)
    }
    return titulos
}

// ---- Tu código ----
async function cargarTitulosEnParalelo(ids) {
}

async function cargarPrimeroDisponible(ids) {
}

async function cargarDeDosEnDos(ids) {
}

// ---- Tests (no los modifiques) ----
async function medir(nombre, fn) {
    const inicio = Date.now()
    const resultado = await fn()
    const ms = Date.now() - inicio
    console.log(`${nombre}: ${ms} ms`)
    return { resultado, ms }
}

async function tests() {
    const ids = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    const esperado = ids.map((id) => `Libro ${id}`)

    const serie = await medir('en serie', () => cargarTitulosEnSerie(ids))
    assert.deepStrictEqual(serie.resultado, esperado)

    const paralelo = await medir('en paralelo', () => cargarTitulosEnParalelo(ids))
    assert.deepStrictEqual(paralelo.resultado, esperado)
    assert.ok(paralelo.ms < 700, 'en paralelo debe tardar lo que la consulta más lenta')

    const primero = await medir('primero disponible', () => cargarPrimeroDisponible([3, 4, 5]))
    assert.strictEqual(primero.resultado, 'Libro 5')

    const dosEnDos = await medir('de dos en dos', () => cargarDeDosEnDos(ids))
    assert.deepStrictEqual(dosEnDos.resultado, esperado)
    assert.ok(dosEnDos.ms < serie.ms, 'de dos en dos debe ser más rápido que en serie')
    assert.ok(dosEnDos.ms > paralelo.ms, 'de dos en dos debe ser más lento que todo en paralelo')

    console.log('Test OK')
}

tests().catch((error) => {
    console.error('Test FALLIDO:', error.message)
    process.exitCode = 1
})
