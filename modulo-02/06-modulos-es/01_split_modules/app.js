// Unidad: Módulos ES
// Abre index.html con un servidor local (con doble clic los módulos no cargan).
//
// Esta aplicación funciona, pero todo está en un único script clásico.
// Divídela en módulos dentro de una carpeta js/:
//
//   js/api.js      export default pedirJSON · export cargarUsuarios
//   js/formato.js  export iniciales · export dominioEmail
//   js/ui.js       export pintarUsuarios · export mostrarEstado
//   js/main.js     punto de entrada: importa lo necesario y arranca
//
// 1. Cada módulo importa sólo lo que usa. formato.js no debe saber nada del DOM
//    y api.js no debe saber nada de la interfaz.
// 2. Cambia el <script> de index.html por uno de tipo módulo que cargue js/main.js
//    y borra app.js.
// 3. En main.js usa await en el nivel superior en lugar de una función async.
// 4. Comprueba en la consola que escribir URL_API o iniciales ya NO da acceso a
//    nada: cada módulo tiene su propio ámbito.
// 5. Quita la extensión .js de un import. ¿Qué error da el navegador?

const URL_API = 'https://jsonplaceholder.typicode.com'

// ---- acceso a datos ----
async function pedirJSON(url) {
    const response = await fetch(url)
    if (!response.ok) throw new Error(`Error ${response.status} al pedir ${url}`)
    return response.json()
}

function cargarUsuarios() {
    return pedirJSON(`${URL_API}/users`)
}

// ---- formato ----
function iniciales(nombre) {
    return nombre
        .split(' ')
        .map((parte) => parte[0])
        .join('')
        .toUpperCase()
}

function dominioEmail(email) {
    return email.split('@')[1]
}

// ---- interfaz ----
const estado = document.querySelector('#estado')
const lista = document.querySelector('#usuarios')

function mostrarEstado(texto, esError = false) {
    estado.textContent = texto
    estado.classList.toggle('error', esError)
}

function pintarUsuarios(usuarios) {
    lista.replaceChildren(
        ...usuarios.map((usuario) => {
            const li = document.createElement('li')
            const detalle = document.createElement('small')
            detalle.textContent = ` · ${dominioEmail(usuario.email)}`
            li.append(`${iniciales(usuario.name)} · ${usuario.name}`, detalle)
            return li
        }),
    )
}

// ---- arranque ----
async function iniciar() {
    mostrarEstado('Cargando usuarios...')
    try {
        const usuarios = await cargarUsuarios()
        pintarUsuarios(usuarios)
        mostrarEstado('')
    } catch (error) {
        console.error(error)
        mostrarEstado('No se pudieron cargar los usuarios.', true)
    }
}

iniciar()
