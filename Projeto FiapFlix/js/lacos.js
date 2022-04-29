//laços de repeticão são: For, While e Do ...While

for(let i = 0; i <= 10; i ++){
    for(let j = 0; j <= 10; j++){
        console.log(`${i} * ${j} = ${i * j}`)
    }
}

//construindo um loop while

let a = 0

while (a < 3) {
    console.log('Bom dia!')
    a++
}

//construindo um loop do...while
do {
    console.log(a)
} while (a > 0);