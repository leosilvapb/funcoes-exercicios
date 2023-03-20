// const soma = (numero1, numero2) =>{
//     const resultado = numero1 + numero2
//     return (`A soma de ${numero1} + ${numero2} é: ${resultado}`)

// }

// const num1 = Number (prompt("Digite o primeiro numero"))
// const num2 = Number (prompt ("digite o segundo numero"))
// console.log(soma(num1,num2))

//----------------------------------------------------------------------------------

// const verifica = (numero1, numero2) =>{
//     const maiorMenor = numero1 >= numero2 
//     return (`O primeiro numero é maior que o segundo numero? ${maiorMenor}`)
// }

// const num1 = Number(prompt("Digite o primeiro numero"))
// const num2 = Number(prompt("Digite o segundo numero"))
// console.log(verifica(num1,num2))


//----------------------------------------------------------------------------------

// const compara = (numero) =>{
//     const resultado = numero %2 === 0
//     console.log(`O numero digitado é par? ${resultado}`)
// }

// const numero = Number(prompt("Digite um numero"))
// console.log(compara(numero))

//-----------------------------------------------------------------------------------

const salarioReal = (salario)=>{
    const salarioLiquido = (salario - salario * 0.10)
    return (`O valor do salario real é de: ${salarioLiquido}`)
}
const salario = Number(prompt("Digite o seu salário Bruto:"))
console.log(salarioReal(salario))