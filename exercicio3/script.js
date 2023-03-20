const soma = (n1, n2)=>{
    const resultado  = n1 + n2
    return (`A soma dos dois numeros é: ${resultado}`)
}

const numSoma1 = Number(prompt("Digite o primeiro numero"))
const numSoma2 = Number(prompt("Digite o segundo numero"))
console.log(soma(numSoma1,numSoma2))

//------------------------------------------------------------------------------------

const subtracao = (n1, n2) =>{
    const resultado  = n1 - n2
    return (`A subtração dos dois numeros é: ${resultado}`)
}

const numSub1 = Number(prompt("Digite o primeiro numero"))
const numSub2 = Number(prompt("Digite o segundo numero"))
console.log(subtracao(numSub1,numSub2))

//-----------------------------------------------------------------------------------

const multiplicacao = (n1, n2) =>{
    const resultado  = n1 * n2
    return (`A multiplicação dos dois numeros é: ${resultado}`)
}

const numMult1 = Number(prompt("Digite o primeiro numero"))
const numMult2 = Number(prompt("Digite o segundo numero"))
console.log(multiplicacao(numMult1,numMult2))

//------------------------------------------------------------------------------------

const divisao = (n1, n2) =>{
    const resultado  = n1 / n2
    return (`A divisão dos dois numeros é: ${resultado}`)
}

const numDiv1 = Number(prompt("Digite o primeiro numero"))
const numDiv2 = Number(prompt("Digite o segundo numero"))
console.log(divisao(numDiv1,numDiv2))