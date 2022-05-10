//! Informações para calculo de idade

let anoNasc = 1991
let mesNasc = 04
let anoAtual = 2022
let mesAtual = 05

let idade = anoAtual - anoNasc
console.log(idade)

//!condicional que verifica o mês
if (mesAtual >= mesNasc) {
    idade += 1
    console.log(idade)
}else{
    console.log(idade)
}