let n = Math.floor(Math.random() * 10)

if (n >= 5 ) {
    console.log('o número sorteado é maior ou igual a 5: ' + n);
}else{
    console.log('o número sorteado é menor ou igual a 5: ' + n);
}

if (n >= 5) console.log('O número sorteado é maior ou igual a 5' + n) 
else console.log('O número sorteado é menor a 5: ' + n)

//! Operador Térnario
//? O if é reperesentado pelo ponto de interrogação(?) e o else é representado pelo dois pontos(:)
n >= 5 ? console.log('o número sorteado é maior ou igual a 5:' + n) : console.log('o número sorteado é menor ou igual a 5:' + n)

n > 5 || n === 5 && nome === 'Sara' || dia === 10 ? console.log('n = '+ n) : console.log('Dia: '+ dia)