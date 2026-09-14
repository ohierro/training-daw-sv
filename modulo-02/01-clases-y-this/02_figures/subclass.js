// Unidad: Clases y el valor de this
// Ejecuta: node subclass.js
//
// 1. Ejecútalo y explica qué imprime Circle y por qué, si no tiene print().
//    (Pista: la cadena de prototipos.)
// 2. Añade a Figure un constructor(name) que guarde el nombre, y haz que cada
//    subclase lo llame con super('cuadrado'), super('círculo'), etc.
// 3. Añade a cada subclase los datos que necesita (lado; radio; base y altura)
//    y un getter area. Figure.prototype.area debe devolver 0.
// 4. Añade un campo privado #id a Figure, generado con un contador estático
//    Figure.total, y un getter id para leerlo.

class Figure {
    print() {
        console.log("I'm a figure")
    }
}

class Square extends Figure {
    print() {
        console.log("I'm a square")
    }
}

class Circle extends Figure {
}

class Triangle extends Figure {
    print() {
        super.print()
        console.log('and a triangle')
    }
}

// Los argumentos todavía no se usan: los recibirán los constructores del paso 3
const draws = [new Figure(), new Square(4), new Circle(2), new Triangle(3, 4)]
draws.forEach((figure) => figure.print())
