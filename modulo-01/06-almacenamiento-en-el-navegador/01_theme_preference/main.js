// Unidad: Almacenamiento en el navegador
// Abre index.html. Para ver lo guardado: herramientas de desarrollo >
// Aplicación (Chrome) o Almacenamiento (Firefox) > Local Storage.
//
// 1. Contador de visitas: lee 'visitas' de localStorage, súmale 1, guárdalo y
//    muéstralo en #visitas. Ojo: getItem devuelve texto o null.
//
// 2. Preferencias: guarda UN solo objeto { oscuro, grande } con la clave
//    'preferencias:v1'. Al cambiar cualquier casilla:
//    - aplica las clases 'oscuro' y 'grande' al <body>;
//    - guarda el objeto con JSON.stringify.
//
// 3. Al cargar, lee las preferencias con JSON.parse y marca las casillas.
//    Si no hay nada guardado o el JSON está roto, usa { oscuro: false, grande: false }.
//    Pruébalo escribiendo a mano un valor no válido en el panel de Local Storage.
//
// 4. «Restablecer» borra las preferencias (removeItem) pero no las visitas.
//
// 5. Cambia localStorage por sessionStorage. Cierra la pestaña y vuelve a abrir
//    la página. ¿Qué diferencia observas?

const CLAVE_PREFERENCIAS = 'preferencias:v1'
const PREFERENCIAS_POR_DEFECTO = { oscuro: false, grande: false }

const casillaOscuro = document.querySelector('#oscuro')
const casillaGrande = document.querySelector('#grande')

function cargarPreferencias() {
    // TODO: leer, parsear con try/catch y devolver el objeto (o el valor por defecto)
    return { ...PREFERENCIAS_POR_DEFECTO }
}

function guardarPreferencias(preferencias) {
    // TODO
}

function aplicarPreferencias(preferencias) {
    document.body.classList.toggle('oscuro', preferencias.oscuro)
    document.body.classList.toggle('grande', preferencias.grande)
    casillaOscuro.checked = preferencias.oscuro
    casillaGrande.checked = preferencias.grande
}

aplicarPreferencias(cargarPreferencias())
