import { cuenta, incrementar } from './contador.mjs'

console.log(`a.mjs: cuenta al importar = ${cuenta}`)

export function sumarDesdeA() {
    incrementar()
}
