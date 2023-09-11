/*
Em  uma  certificação  são  feitos  5  exames  (I,  II,  III,  IV  e  V).  Escreva  um  programa  que  leia as  notas  desses exames e imprima a classificação do interessado na certificação, sabendo que a média é 70. Classificação: A –passou em todos os exames; B –passou em I, II e IV, mas não em III ou V; C –passou em I e II, III ou IV, mas não em V. Reprovado –outras situações(1,0).
*/

const readline = require('readline-sync')


let nota1 = parseFloat(readline.question("digite sua primeira nota : "))
let nota2 = parseFloat(readline.question("digite sua segunda nota : "))
let nota3 = parseFloat(readline.question("digite sua terceira nota : "))
let nota4 = parseFloat(readline.question("digite sua quarta nota : "))
let nota5 = parseFloat(readline.question("digite sua quinta nota : "))

let media = (nota1 + nota2 + nota3 + nota4 + nota5 ) / 5;

console.log(media)

if(media >= 7 ){                                                                          //C –passou em I e II, III ou IV, mas não em V.
    if( nota1 >= 7 && nota2 >=7 && (nota3 < 7 || nota4 < 7) && nota5 < 7 ){
        console.log("nota C, passou em 1 e 2 ou 3 e 4 porem nao passou em 5")
    }else if(nota1 >= 7 && nota2 >= 7 && nota4 >= 7 && (nota3 < 7 || nota5 < 7)){       // B –passou em I, II e IV, mas não em III ou V
        console.log("nota B, aprovado em 1/2/4 porem nao passou em 3 e 5, sorry")
    }else if(nota1 >= 7 && nota2 >= 7 && nota3 >+ 7 && nota4 >=7 && nota5 >=7){
        console.log("aprovado em tudo, parabens nota A")
    }else{
    console.log("/REPROVADO/")
    }
}

    


    
