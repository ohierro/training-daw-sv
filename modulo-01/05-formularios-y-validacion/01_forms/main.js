// Unidad: Formularios y validación en cliente
// Abre index.html.

const formulario = document.querySelector('#formulario')
const resultado = document.querySelector('#resultado')

// Parte resuelta: mostrar cuándo cambia la respuesta de los botones de opción.
// Un único listener en el <fieldset> recibe el change de los tres radios.
formulario.querySelector('fieldset').addEventListener('change', (e) => {
    console.log(`respuesta cambiada a: ${e.target.value}`)
})

// 1. Al enviar el formulario, evita que la página se recargue y muestra en
//    #resultado los datos como JSON:
//    JSON.stringify(Object.fromEntries(new FormData(formulario)), null, 2)
//    ¿Qué valor tiene una casilla marcada? ¿Y una sin marcar?

// 2. Deja vacío el nombre y pulsa Enviar. ¿Se ejecuta tu listener de submit?
//    Explica por qué en un comentario.

// 3. Regla propia: si se elige «No» en la pregunta, la descripción pasa a ser
//    obligatoria y debe tener al menos 10 caracteres. Usa setCustomValidity en
//    el campo descripcion y vuelve a comprobarlo en el evento input de la
//    descripción y en el change del fieldset.

// 4. Muestra debajo de la descripción cuántos caracteres quedan (de 200).
