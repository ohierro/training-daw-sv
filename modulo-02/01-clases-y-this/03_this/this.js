// Unidad: Clases y el valor de this
// Ejecuta: node this.js
//
// 1. Ejecútalo: func() imprime 42 porque se llama como test.func().
// 2. Descomenta el setTimeout y vuelve a ejecutarlo. ¿Qué imprime ahora y por
//    qué? Recuerda la regla: this depende de cómo se llama la función.
// 3. Arréglalo de dos formas distintas:
//    a) cambiando la function del setTimeout por una función flecha;
//    b) guardando la función con .bind(this).
// 4. ¿Qué pasa si conviertes func en función flecha (func: () => {...})?
//    Explícalo.

const test = {
    prop: 42,
    func: function () {
        // setTimeout(function () {
            console.log(this.prop)
        // }, 1000)
    },
}

test.func()
