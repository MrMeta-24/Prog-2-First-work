/*function fibonacci(times: number ): number {
    let atual = 1 
    let anterior = atual 
    --times
    console.log(atual)
    while (times--) {
        const proximo = atual + anterior
        anterior = atual 
        atual = proximo
        console.log(atual)
    }
    return atual
}

fibonacci(5)*/



function fibonacci(times: number): number {
    let atual = 1
    let anterior = 0

    while (times--) {
        const proximo = atual + anterior
        anterior = atual
        atual = proximo
    }

    return anterior
}

console.time("test")
fibonacci(2500)
console.timeEnd("test")