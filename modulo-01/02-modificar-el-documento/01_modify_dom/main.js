// Unidad: Modificar el documento
// Abre index.html. El script se carga con defer, así que el DOM ya está
// completo cuando se ejecuta: no hace falta window.onload.

// 1. Cambia el texto del <h1> por 'Cambiado desde JavaScript'.
const titulo = document.querySelector('h1')
// TODO: usa textContent (no innerHTML: aquí no hay HTML que interpretar)

// 2. Añade la clase 'resaltado' al primer párrafo de cada entrada (p.primero).

// 3. Oculta la segunda entrada añadiéndole la clase 'oculto'. No uses style.

// 4. Crea un nuevo <li class="item">Elemento 4</li> con createElement y añádelo
//    al final del menú.

// 5. Crea una tercera entrada completa (<article> con <h2> y <p>) a partir de este
//    objeto y añádela al final de <main>. Pon su id en data-id.
const nuevaEntrada = { id: 3, titulo: 'Tercera entrada', texto: 'Contenido creado desde JavaScript.' }

// 6. Elimina el primer elemento del menú con remove().
