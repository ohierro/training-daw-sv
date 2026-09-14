// Unidad: Almacenamiento en el navegador
// Abre index.html.
//
// Es la lista de tareas del ejercicio de delegación, ya resuelta. Ahora las
// tareas deben sobrevivir a una recarga.
//
// 1. Implementa cargarTareas() y guardarTareas() con la clave 'tareas:v1'.
//    cargarTareas() debe devolver [] si no hay nada guardado o si el JSON está roto.
// 2. Llama a guardarTareas() después de CADA cambio en el array (añadir,
//    completar, borrar, borrar completadas). Pista: si lo haces dentro de una
//    única función actualizar(nuevasTareas) que guarde y pinte, no se te
//    olvidará ninguno.
// 3. siguienteId también debe continuar tras recargar: calcúlalo a partir de
//    las tareas cargadas (el id más alto + 1).
// 4. Abre la página en dos pestañas. Añade una tarea en una y recarga la otra.
//    Ampliación: escucha el evento 'storage' en window para que la otra pestaña
//    se actualice sola.

const CLAVE = 'tareas:v1'

const lista = document.querySelector('#lista')
const formulario = document.querySelector('#nueva-tarea')
const botonBorrarHechas = document.querySelector('#borrar-hechas')

function cargarTareas() {
    // TODO
    return []
}

function guardarTareas(tareas) {
    // TODO
}

let tareas = cargarTareas()
let siguienteId = 1 // TODO: calcular a partir de tareas

function crearBoton(clase, texto) {
    const boton = document.createElement('button')
    boton.type = 'button'
    boton.className = clase
    boton.textContent = texto
    return boton
}

function crearItem(tarea) {
    const li = document.createElement('li')
    li.dataset.id = tarea.id
    li.classList.toggle('hecha', tarea.hecha)

    const texto = document.createElement('span')
    texto.className = 'texto'
    texto.textContent = tarea.texto

    li.append(
        texto,
        crearBoton('completar', tarea.hecha ? 'Desmarcar' : 'Completar'),
        crearBoton('borrar', 'Borrar'),
    )
    return li
}

function pintar() {
    lista.replaceChildren(...tareas.map(crearItem))
}

formulario.addEventListener('submit', (e) => {
    e.preventDefault()
    const texto = formulario.elements.texto.value.trim()
    if (!texto) return

    tareas = [...tareas, { id: siguienteId++, texto, hecha: false }]
    formulario.reset()
    pintar()
})

lista.addEventListener('click', (e) => {
    const item = e.target.closest('li')
    if (!item) return
    const id = Number(item.dataset.id)

    if (e.target.closest('.completar')) {
        tareas = tareas.map((t) => (t.id === id ? { ...t, hecha: !t.hecha } : t))
    } else if (e.target.closest('.borrar')) {
        tareas = tareas.filter((t) => t.id !== id)
    } else {
        return
    }
    pintar()
})

botonBorrarHechas.addEventListener('click', () => {
    tareas = tareas.filter((t) => !t.hecha)
    pintar()
})

pintar()
