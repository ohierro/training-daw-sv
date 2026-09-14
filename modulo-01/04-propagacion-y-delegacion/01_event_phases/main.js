// Unidad: Propagación y delegación de eventos
// Abre index.html.
//
// Parte resuelta: cada caja escucha el clic en la fase de captura y en la de
// burbuja, y muestra target y currentTarget.
//
// 1. ANTES de hacer clic en «hija», escribe en un comentario el orden en que
//    crees que aparecerán los seis mensajes. Después compruébalo.
// 2. Haz clic justo sobre «(texto)». ¿Qué cambia en target? ¿Y en currentTarget?
// 3. Añade e.stopPropagation() en el listener de burbuja de #madre. ¿Qué
//    mensajes dejan de aparecer?
// 4. Cambia stopPropagation por preventDefault. ¿Cambia algo en los mensajes?
//    Explica la diferencia.

const cajas = document.querySelectorAll('#abuela, #madre, #hija')

for (const caja of cajas) {
    caja.addEventListener('click', (e) => {
        console.log(`captura · ${e.currentTarget.id} · target: ${e.target.id}`)
    }, { capture: true })

    caja.addEventListener('click', (e) => {
        console.log(`burbuja · ${e.currentTarget.id} · target: ${e.target.id}`)
    })
}
