let a = Math.floor(Math.random() * 1000)
function minhaPriemriraFuncao(){
    let b = Math.floor(Math.random( ) * 1000)
    return a + b
}

console.log(Math.random * 1000)

//esta é uma funçào anonima
const minhaSegundaFuncao = function(){
    return 'Escrevendo minha função anônima'
}
console.log(minhaSegundaFuncao())

//esta é uma arrow function
const b = () => {
    return 'Esta é uma arrow function'
}

console.log(b())