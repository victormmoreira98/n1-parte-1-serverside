/*
um conjunto de leitores respondeu a um survey(pesquisa)que continha as seguintes perguntas: qual a idade de cada  leitor? Em qual  cidade  o leitor mora? E a opinião em  relação ao livro que  fora  lançado meses atrás,  em que o leitor respondeuma das seguintes opções: 3-ótimo, 2 -bom e 1 –regular (1,25).Escreva um programa que receba a idade, a cidade e a opinião de 16 leitores, calcule e exiba:
 a média das idades dos leitores que responderam ótimo;
 a quantidade de leitores que responderam regular;
 a porcentagem de leitores que responderam bom entre todos os leitores;
 a porcentagem de leitores para cada cidade.
*/

//VARIAVEIS : idade do leitor; cidade do leitor; opniao leitor(3,2,1);

const readline = require('readline-sync')

let totalIdadeOtimo = 0
let totalLeitoresRegular = 0
let totalLeitoresBom = 0
const cidadeCount = {}
const totalLeitores = 16
let pessoasOtimo = 0

for (let i = 1; i <= totalLeitores; i++) {
  console.log(`Leitor ${i}:`)
  
  const idade = parseInt(readline.question("Idade: "))
  const cidade = readline.question("Cidade: ")
  const opinião = parseInt(readline.question("Opinião (3 - ótimo, 2 - bom, 1 - regular): "))
  
  if (opinião === 3) {
    totalIdadeOtimo += idade
    pessoasOtimo += 1
  } else if (opinião === 1) {
    totalLeitoresRegular++
  } else if (opinião === 2) {
    totalLeitoresBom++
  }
  cidadeCount[cidade] = (cidadeCount[cidade] || 0) + 1
}

const mediaIdadeOtimo = totalIdadeOtimo / pessoasOtimo
const porcentagemBom = (totalLeitoresBom / totalLeitores) * 100

console.log(`Média das idades dos leitores que responderam ótimo: ${mediaIdadeOtimo.toFixed(2)}`)
console.log(`Quantidade de leitores que responderam regular: ${totalLeitoresRegular}`)
console.log(`Porcentagem de leitores que responderam bom entre todos os leitores: ${porcentagemBom.toFixed(2)}%`)
console.log("Porcentagem de leitores para cada cidade:")


for (let cidade in cidadeCount) {
  const porcentagemCidade = (cidadeCount[cidade] / totalLeitores) * 100
  console.log(`${cidade}: ${porcentagemCidade.toFixed(2)}%`)
}


