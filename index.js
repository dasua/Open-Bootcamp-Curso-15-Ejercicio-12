/**
 * Crea un nuevo fichero JS que contenga las siguientes líneas
 *
 * - [X] Una función que admita un parámetro "num", y devuelva una lista con esa cantidad de números de la secuencia de Fibonacci
 * Por ejemplo: num = 6 => Resultado [1, 1, 2, 3, 5, 8])
 * - [X] Ejecuta la depuración de VSCode para visualizar la ejecución de la función
 */
function fibonacci(num) {
    let resultado = []

    if (num < 1) {
        // Para valores menores a 1 devuelve el array vacío
        return resultado
    }

    // Inicializa para fibonacci(1)
    resultado = [1]
    for (let i = 1; i < num; i++) {
        let posAnt = resultado[i-1] || 0
        let posAnt2 = resultado[i-2] || 0
        resultado.push(posAnt + posAnt2)
    }

    return resultado
}

const fib0 = fibonacci(0)
const fib1 = fibonacci(1)
const fib8 = fibonacci(8)
console.log('fib(0)',fib0)
console.log('fib(1)',fib1)
console.log('fib(8)',fib8)
