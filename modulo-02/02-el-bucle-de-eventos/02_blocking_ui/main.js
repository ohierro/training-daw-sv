// Unidad: El bucle de eventos
// Abre index.html.
//
// Parte resuelta: «Calcular bloqueando» cuenta los primos hasta LIMITE en un
// único bucle síncrono.
//
// 1. Púlsalo y observa: ¿se ve el texto «Calculando...»? ¿Sigue moviéndose la
//    pelota? ¿Puedes seleccionar texto mientras tanto? Explica por qué con
//    lo visto sobre la pila y el repintado.
//    (Si en tu equipo termina muy rápido, aumenta LIMITE.)
//
// 2. Implementa calcularPorTrozos(): procesa TROZO números, actualiza #estado y
//    la barra #progreso, y programa el siguiente trozo con setTimeout(fn, 0).
//    Así, entre trozo y trozo el bucle de eventos puede repintar y atender clics.
//
// 3. Compara el tiempo total de las dos versiones. ¿Por qué la versión por
//    trozos tarda algo más y aun así es mejor para el usuario?

const LIMITE = 10_000_000
const TROZO = 200_000

const estado = document.querySelector('#estado')
const progreso = document.querySelector('#progreso')

function esPrimo(n) {
    if (n < 2) return false
    for (let d = 2; d * d <= n; d++) {
        if (n % d === 0) return false
    }
    return true
}

document.querySelector('#bloqueante').addEventListener('click', () => {
    estado.textContent = 'Calculando...' // ¿llega a verse?
    const inicio = performance.now()

    let total = 0
    for (let n = 0; n <= LIMITE; n++) {
        if (esPrimo(n)) total++
    }

    const ms = Math.round(performance.now() - inicio)
    estado.textContent = `${total} primos (${ms} ms, bloqueando)`
    progreso.value = 100
})

function calcularPorTrozos() {
    // TODO
}

document.querySelector('#por-trozos').addEventListener('click', calcularPorTrozos)
