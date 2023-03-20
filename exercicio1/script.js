//A)

// function imprimeNome (nome){
//     console.log(`Olá, ${nome}`)
// }

// console.log(imprimeNome("Leonardo"))

// //-----------------------------------------------------------------------------------
// //B)

// function tabuada (numero){
    // const num1 = numero * 1
    // const num2 = numero * 2
    // const num3 = numero * 3
    // const num4 = numero * 4
    // const num5 = numero * 5
    // const num6 = numero * 6
    // const num7 = numero * 7
    // const num8 = numero * 8
    // const num9 = numero * 9
    // const num10 = numero * 10

    // return (`A tabuada do ${numero} é: 
    // ${num1} x 1 = ${num1} 
    // ${num2} x 2 = ${num2}
    // ${num3} x 3 = ${num3}
    // ${num4} x 4 = ${num4}
    // ${num5} x 5 = ${num5}
    // ${num6} x 6 = ${num6}
    // ${num7} x 7 = ${num7}
    // ${num8} x 8 = ${num8}
    // ${num9} x 9 = ${num9}
    // ${num10} x 10 = ${num10}`)

// }

// console.log(tabuada(9))

//-----------------------------------------------------------------------------------
//C)

const imprimeNome =(nome) =>{
    console.log(`Olá, ${nome}`)
}

console.log(imprimeNome("Leonardo"))

const tabuada = (numero) =>{
    
    return (`A tabuada do ${numero} é: 
    ${numero} x 1 = ${numero * 1} 
    ${numero} x 2 = ${numero * 2}
    ${numero} x 3 = ${numero * 3}
    ${numero} x 4 = ${numero * 4}
    ${numero} x 5 = ${numero * 5}
    ${numero} x 6 = ${numero * 6}
    ${numero} x 7 = ${numero * 7}
    ${numero} x 8 = ${numero * 8}
    ${numero} x 9 = ${numero * 9}
    ${numero} x 10 = ${numero * 10}`)

}

const resultadoTabuada = Number(prompt("Digite um numero"))
console.log(tabuada(resultadoTabuada))