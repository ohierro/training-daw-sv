// Unidad: Módulos ES
// Ejecuta: node main.mjs   (la extensión .mjs indica a Node que es un módulo ES)
//
// a.mjs y b.mjs importan los dos contador.mjs.
//
// 1. ANTES de ejecutarlo, escribe en un comentario:
//    - cuántas veces aparecerá «contador.mjs se está ejecutando»;
//    - qué valores mostrarán las tres últimas líneas.
// 2. Ejecútalo y explica las diferencias con tu predicción.
// 3. Descomenta la línea de cuenta = 100. ¿Qué error da y por qué no se puede
//    reasignar una importación desde fuera de su módulo?
// 4. Intenta importar secreto desde contador.mjs. ¿Qué ocurre?
// 5. Convierte incrementar en la exportación por defecto de contador.mjs y
//    ajusta los import de a.mjs y b.mjs.

import { sumarDesdeA } from './a.mjs'
import { sumarDesdeB, leerCuentaDesdeB } from './b.mjs'
import { cuenta } from './contador.mjs'

sumarDesdeA()
sumarDesdeB()
sumarDesdeA()

// cuenta = 100

console.log(`main.mjs: cuenta = ${cuenta}`)
console.log(`b.mjs ve cuenta = ${leerCuentaDesdeB()}`)
console.log('¿Es la misma cuenta para todos?', cuenta === leerCuentaDesdeB())
