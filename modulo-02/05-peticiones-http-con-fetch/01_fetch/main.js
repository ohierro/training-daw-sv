// Unidad: Peticiones HTTP con fetch
// Abre index.html con un servidor local (Live Server o similar).
//
// La API pública https://jsonplaceholder.typicode.com devuelve datos de prueba
// en JSON y permite peticiones desde cualquier origen (CORS).
//
// Parte resuelta: la petición y la comprobación de response.ok. Abre la
// pestaña Red de las herramientas de desarrollo y localiza la petición.
//
// 1. Pinta en #usuarios un <li> por usuario con «nombre · email», usando
//    createElement y textContent.
// 2. Muestra en #estado «Cargando...» mientras dura la petición, y vacíalo al
//    terminar, tanto si va bien como si falla (finally).
// 3. Cambia la URL por /users-no-existe. ¿Se ejecuta el catch? ¿Por qué sí,
//    si fetch no rechaza con un 404?
// 4. Desconecta la red en las herramientas de desarrollo (Offline) y recarga.
//    ¿Qué error llega ahora al catch?

const URL_USUARIOS = 'https://jsonplaceholder.typicode.com/users'

async function pedirJSON(url) {
    const response = await fetch(url)
    if (!response.ok) {
        throw new Error(`Error ${response.status} al pedir ${url}`)
    }
    return response.json()
}

async function cargarUsuarios() {
    try {
        const usuarios = await pedirJSON(URL_USUARIOS)
        console.log(usuarios)
        // TODO: pintar la lista
    } catch (error) {
        console.error(error)
        // TODO: mostrar un mensaje comprensible en #estado con la clase error
    }
}

cargarUsuarios()
