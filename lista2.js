let compra = 155;
let desconto = compra * 0.95;
if(compra > 100){
    console.log(`o valor total de sua compra é de ${desconto} Reais`)
    }else{
        console.log(`o valor da sua compra é de ${compra} Reais`)
        }

let pessoa = 19
if(pessoa <= 11){
    console.log('essa pessoa é de menor')
}else if(pessoa > 11 & pessoa < 18) {
    console.log('essa pessoa é um adolescente')
}else{
    console.log('essa pessoa é adulta')
}



let a = 3
let b = 4
let c = 5
if(a===b && b===c){
    console.log('equilátero')
}else if(a===b || a===c || b===c){
    console.log('isóceles')
}else{
    console.log('escaleno')
}

//proximo

let ano = 2020
if(ano%4===0){
    console.log('ano bissexto')
}else{
    console.log('ano não bissexto')
}

//proximo

for(let i = 1; i <= 10; i++){
    console.log(i)
}

//proximo

for(let j = 10; j >= 1; j--){
    console.log(j)
}

//proxima

for(let h = 1; h <= 10; h++){
    console.log(5 * h)
}