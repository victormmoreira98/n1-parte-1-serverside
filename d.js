/*
O Hipermercado Tabajara está com uma promoção de carnes que é imperdível.

                    Até 5 Kg                 Acima de 5 Kg
      File Duplo    R$ 24,90     por    Kg R$ 25,80 por Kg
      Alcatra       R$ 25,90     por    Kg R$ 26,80 por Kg
      Picanha       R$ 36,90     por    Kg R$ 37,80 por Kg

      Para  atender  os  clientes,  cada  cliente  poderá  levar  apenas  um  dos  tipos  de  carne  da  promoção, porém  não  há limites para a quantidade de carne por cliente. Se  compra  for  feita  no  cartão  Tabajara  o  cliente  receberá  ainda  um  desconto  de  5%  sobre  o  total  da  compra. Escreva um programa que peça o tipo e a quantidade de carne comprada pelo usuário e gere um cupom fiscal, contendo  as  informações  da  compra:  tipo  e  quantidade  de  carne,  preço  total,  tipo  de  pagamento,  valor  do desconto e valor a pagar (1,25).

*/
// ESCOLHER TIPO DA CARNE / QUANTIDADE / 

//VARIAVEIS : tipo da carne, quantidade da carne, preco total, tipo de pagamento, desconto 


const readline = require('readline-sync')
let carne_escolhida;
let preco, preco_atacado;
let quantidade;


let opcao_carne = readline.question("cardapio : \n1- file duplo : R$ 24,90 / acima 5kg : 25,80\n2- Alcatra R$ 25,90 por Kg R$ 26,80 por Kg\n3-Picanh R$ 36,90 por Kg R$ 37,80 por Kg")

switch(opcao_carne){
    
    case '1':
        carne_escolhida = "ile duplof"
        preco = 24.90
        preco_atacado = 25.80
        break;
    
    case '2':
        carne_escolhida = "alcatra"
        preco = 25.90
        preco_atacado = 26.80
        break   
    
    case'3':
    carne_escolhida = "alcatra"
        preco = 36.90
        preco_atacado = 37.80
        break

    default:
        console.log("/OPCAO INVALIDA/")
}
console.log("\n")
console.log(`opcao: ${carne_escolhida}`)

quantidade = parseFloat(readline.question("digite a quantidade de kilos desejada"))

let preco_total;

if(quantidade > 5){
    preco_total = preco_atacado * quantidade
}else{
    preco_total = preco * quantidade 
}

console.log(preco_total)

let opcao_pagamento

console.log("escolha um tipo de pagamento")
console.log("1- a vista")
console.log("2- cartao tabajara")
opcao_pagamento = parseInt(readline.question(""))

let desconto = 0 

if(opcao_pagamento === 2){
    desconto = preco_total * 0.05
}

let valor_a_pagar = preco_total - desconto

//tipo  e  quantidade  de  carne,  preço  total,  tipo  de  pagamento,  valor  do desconto e valor a pagar 

console.log("\nCUPOM FISCAL")
console.log(`Tipo de carne: ${(opcao_carne === 1 ? "1 - file duplo " : (opcao_carne === 2 ? "2 alcatra" : "3 - picanha"))}`)
console.log(`Quantidade: ${quantidade} Kg`)
console.log(`preco a pagar: ${preco_total.toFixed(2)}`)
console.log(`tipo de pagamento: ${(opcao_pagamento === 1 ? "dinheiro" : " cartao tabajara")}`)
console.log(`valor do desconto: -${desconto.toFixed(2)}`)
console.log(`valor a pagar: ${valor_a_pagar.toFixed(2)}`)












