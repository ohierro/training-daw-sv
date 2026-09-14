// Unidad: Propagación y delegación de eventos
// Abre index.html.
//
// Parte resuelta: los datos viven en el array tareas y pintar() regenera la
// lista entera. Añadir tareas ya funciona.
//
// 1. Registra UN ÚNICO listener de click en #lista que:
//    - si el clic fue en un botón .completar, cambie hecha en la tarea
//      correspondiente y vuelva a pintar;
//    - si fue en un botón .borrar, elimine la tarea del array y vuelva a pintar.
//    Usa e.target.closest(...) y el data-id del <li>.
//    Recuerda: dataset.id es un texto; conviértelo con Number() antes de comparar.
//
// 2. Comprueba que los botones de las tareas nuevas también funcionan.
//    ¿Por qué funcionarían con delegación y no con un listener por botón,
//    si pintar() destruye y recrea todos los <li>?
//
// 3. Ampliación: haz doble clic (dblclick) sobre el texto de una tarea para
//    editarla con prompt(). Usa el mismo listener delegado u otro en #lista.

const lista = document.querySelector('#lista')
const formulario = document.querySelector('#nueva-tarea')

let tareas = [
    { id: 1, texto: 'Leer la unidad', hecha: true },
    { id: 2, texto: 'Hacer los ejercicios', hecha: false },
]
let siguienteId = 3

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

// TODO: listener delegado en lista

pintar()
