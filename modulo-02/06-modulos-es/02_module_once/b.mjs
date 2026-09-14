import { cuenta, incrementar } from './contador.mjs'

console.log(`b.mjs: cuenta al importar = ${cuenta}`)

export function sumarDesdeB() {
    incrementar()
}

export function leerCuentaDesdeB() {
    return cuenta
}
