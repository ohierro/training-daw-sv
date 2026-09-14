// Unidad: El navegador como entorno de ejecución
// Ejecuta: node main.js
//
// Este script asigna un valor a una variable que nunca se ha declarado.
// 1. Ejecútalo tal cual: funciona y crea una variable global sin avisar.
// 2. Añade 'use strict' en la primera línea y vuelve a ejecutarlo. ¿Qué error da?
// 3. Corrígelo declarando la variable con const o let, según corresponda.
//
// Recuerda: los módulos (<script type="module">) activan el modo estricto
// siempre, así que este error aparecería sin necesidad de escribir 'use strict'.

x = 10

console.log('el valor de x es ' + x)
