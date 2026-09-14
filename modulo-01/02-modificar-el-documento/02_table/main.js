// Unidad: Modificar el documento
// Abre index.html.
//
// Parte resuelta: cada vez que pulsas «Añadir» se crea una fila nueva con el
// siguiente usuario de la lista pendientes. Léela entera antes de ampliarla.
// (addEventListener se explica en la unidad siguiente; aquí basta con saber que
// la función que recibe se ejecuta en cada clic).
//
// Ampliación:
// 1. Guarda los usuarios mostrados en un array y escribe pintar(usuarios), que
//    regenere el <tbody> completo con replaceChildren, como en el caso
//    resuelto de la unidad.
// 2. Cuando no queden pendientes, desactiva el botón (boton.disabled = true).

const tbody = document.querySelector('#usuarios')
const boton = document.querySelector('#anadir')

const pendientes = [
    { id: 1, nombre: 'Ana', apellido: 'Ruiz' },
    { id: 2, nombre: 'Luis', apellido: '<b>Gil</b>' }, // se ve literal: textContent no interpreta HTML
    { id: 3, nombre: 'Eva', apellido: 'Sanz' },
]

function crearCelda(texto) {
    const td = document.createElement('td')
    td.textContent = texto
    return td
}

function crearFila(usuario) {
    const tr = document.createElement('tr')
    tr.dataset.id = usuario.id
    tr.append(
        crearCelda(usuario.id),
        crearCelda(usuario.nombre),
        crearCelda(usuario.apellido),
    )
    return tr
}

boton.addEventListener('click', () => {
    const usuario = pendientes.shift()
    if (!usuario) return

    tbody.append(crearFila(usuario))
})
