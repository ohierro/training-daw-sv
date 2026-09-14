# Código del curso · Desarrollo Web en Entorno Cliente

Ejercicios y proyectos de apoyo ordenados según el temario del curso. Cada
carpeta de unidad tiene el mismo nombre que su página en el sitio
(`/modulo-NN/<unidad>.html`), y cada unidad enlaza sus ejercicios desde la
sección «Para practicar» con la directiva `::codigo`.

Cada ejercicio trae el enunciado en los comentarios de su código. La columna
«Origen» indica si viene del repositorio anterior (`code/`) o es nuevo.

## Cómo se ejecutan

- **Carpetas con `index.html`**: se abren en el navegador, preferiblemente
  servidas con un servidor local (extensión *Live Server* o similar). Los
  scripts se cargan con `defer`, así que no hace falta `window.onload`.
- **Ficheros `.js` y `.mjs` sin HTML**: se ejecutan con Node, `node main.js`.
  Los que usan `node:assert` hacen de tests: si el ejercicio está bien
  resuelto, el script termina imprimiendo `Test OK`.
- **Proyectos Vue** (`modulo-04`, `modulo-05`): `npm install` y `npm run dev`.
  Los que consumen datos esperan una API en `http://localhost:3000`, que se
  levanta con `npx json-server db.json` desde la carpeta que contiene el
  `db.json`.

## Módulo 00 · JavaScript: el lenguaje

| Unidad | Ejercicio | Origen |
|---|---|---|
| 01 · El navegador como entorno | `01_including_script` · enlazar un script con `defer` | `UD1/01_including_script` |
| | `02_strict` · variable sin declarar y modo estricto | `UD1/02_strict` |
| 02 · Tipos dinámicos y coerción | `01_template_strings` · construir textos con template literals | `UD1/03_template_strings` |
| | `02_calculator` · operaciones y coerción de tipos | `UD1/04_calculator` |
| | `03_seconds_converter` · segundos a `h:m:s` | `UD1/10_seconds_converter` |
| 03 · Funciones como valores | `01_abs` · valor absoluto | `UD1/08_abs` |
| | `02_next_pairs` · pares anterior y siguiente | `UD1/09_next_pairs` |
| | `03_even_numbers` · números pares hasta 98 | `UD1/11_even_numbers` |
| | `04_ping_pong` · múltiplos de 5 y de 10 | `UD1/12_ping_pong` |
| | `05_multiplications` · tablas de multiplicar | `UD1/13_multiplications` |
| | `06_advanced_parameters` · parámetros por defecto y rest | `UD3/16_advanced` |
| | `07_custom_filter` · función que recibe una condición | `UD3/02_custom_filter` |
| | `08_arrow_custom_filter` · lo mismo con funciones flecha | `UD3/03_arrow_custom_filter` |
| 04 · Ámbito y closures | `01_scopes` · sombreado de variables y `var` frente a `let` | `UD3/01_scopes` |
| 05 · Objetos, arrays y referencias | `01_person` · crear un objeto y copiarlo con spread | `UD1/05_person` |
| | `02_destructuring_spread` · desestructuración y spread | `UD3/16_advanced` |
| 06 · Métodos de array | `01_math_array` · suma, máximo, mínimo y media | `UD1/06_math_array` |
| | `02_insert_if_not_exists` · insertar sin duplicar ni modificar | `UD1/07_insert_if_not_exists` |
| | `03_iterators` · `forEach`, `map`, `filter` y `reduce` con pilotos | `UD3/04_iterators` |

## Módulo 01 · JavaScript en el navegador: el DOM

| Unidad | Ejercicio | Origen |
|---|---|---|
| 01 · El árbol DOM | `01_dom` · página de blog para practicar selectores | `UD3/05_dom` |
| | `02_count_links` · contar y filtrar enlaces de la página | `UD3/06_modify_dom/exercise02` |
| 02 · Modificar el documento | `01_modify_dom` · cambiar textos, clases y crear elementos | `UD3/06_modify_dom/exercise01` |
| | `02_table` · añadir filas a una tabla desde datos | `UD3/06_modify_dom/table` |
| 03 · Eventos | `01_hide_contents` · botones que ocultan párrafos y contador en vivo | `UD3/07_events` |
| 04 · Propagación y delegación | `01_event_phases` · captura, burbuja, `target` y `currentTarget` | nuevo |
| | `02_task_delegation` · lista de tareas con un único listener | nuevo |
| 05 · Formularios y validación | `01_forms` · `FormData` y validación propia | `UD3/08_forms` |
| 06 · Almacenamiento en el navegador | `01_theme_preference` · preferencias y visitas en `localStorage` | nuevo |
| | `02_persistent_tasks` · lista de tareas que sobrevive a recargas | nuevo |

## Módulo 02 · JavaScript asíncrono y modular

| Unidad | Ejercicio | Origen |
|---|---|---|
| 01 · Clases y el valor de this | `01_rectangle` · clase con área y solapamiento | `UD3/13_poo_rectangulo` |
| | `02_figures` · herencia, `super` y campos privados | `UD3/14_poo_dibujos` |
| | `03_this` · `this` en un método y en un callback | `UD3/15_this` |
| | `04_lost_this` · función que pierde su `this` | `UD3/tmp/main.js` |
| 02 · El bucle de eventos | `01_predict_order` · predecir el orden de tareas y microtareas | nuevo |
| | `02_blocking_ui` · bloquear el hilo y procesar por trozos | nuevo |
| 03 · Promesas | `01_wait` · crear promesas con `setTimeout` y encadenarlas | nuevo |
| | `02_promise_all` · en serie, `Promise.all` y `Promise.allSettled` | nuevo |
| 04 · async y await | `01_refactor_then` · reescribir una cadena de `then` | nuevo |
| | `02_serial_vs_parallel` · en serie, en paralelo y por grupos | nuevo |
| 05 · Peticiones HTTP con fetch | `01_fetch` · lista de usuarios con estados de carga y error | `UD3/10_fetch` |
| 06 · Módulos ES | `01_split_modules` · dividir una aplicación en módulos | nuevo |
| | `02_module_once` · un módulo compartido se ejecuta una vez | nuevo |

## Módulos pendientes de publicar

Copiados tal cual; todavía no se han revisado contra el temario.

| Módulo | Proyecto | Origen |
|---|---|---|
| 03 · TypeScript | — | — |
| 04 · Vue.js: componentes y reactividad | `todo-list` · lista de tareas con componentes, props y eventos | `vue/todo-list` |
| 05 · Vue.js: aplicaciones | `router` · Vue Router con rutas con parámetros como `/posts/:id` (proyecto en `frontend/`, datos en `backend/db.json`) | `vue/router` |
| | `full-project` · router, Pinia y API REST (`db.json`) | `vue/full-project` |
| 06 · Nuxt | — | — |
