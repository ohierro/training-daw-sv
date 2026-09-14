// Unidad: Clases y el valor de this
// Ejecuta: node rectangle.js
//
// Un rectángulo se define por dos esquinas opuestas: (x, y) y (x1, y1).
// 1. Añade x1 e y1 al constructor.
// 2. Implementa el getter area (se usa sin paréntesis: r1.area).
// 3. Implementa overlaps(otro), que devuelve true si los dos rectángulos se
//    solapan:
//
//    .x----------x.....
//    .|..........|.....
//    .|......x---|----x
//    .x------|---x....|
//    ........x--------x
//
//    Pista: NO se solapan si uno está completamente a la izquierda, a la
//    derecha, encima o debajo del otro. En cualquier otro caso, sí.

const assert = require('node:assert/strict')

class Rectangle {
    constructor(x, y) {
        this.x = x
        this.y = y
    }

    toString() {
        return `[(${this.x}, ${this.y}), (${this.x1}, ${this.y1})]`
    }
}

const r1 = new Rectangle(0, 0, 4, 3)
const r2 = new Rectangle(2, 1, 6, 5)
const r3 = new Rectangle(10, 10, 12, 12)

console.log(`${r1}`)
console.log(`${r2}`)

assert.strictEqual(r1.area, 12)
assert.strictEqual(r1.overlaps(r2), true)
assert.strictEqual(r2.overlaps(r1), true)
assert.strictEqual(r1.overlaps(r3), false)

console.log('Test OK')
