/*
  Crie um programa que recebe dois números como ARGUMENTOS e printe a média
  Ex: node .\02-funcoes.js 25 41
*/
let media = 0;
//Não se preocupe com essas três linhas, vamos aprender semana que vem.
const myArgs = process.argv.slice(2);
const myArgs1 = myArgs[0];
const myArgs2 = myArgs[1];

const calcularMedia = (numero1, numero2) => { // É obrigatório usar essa função com os parâmetros

  media = (numero1 + numero2) / 2;
  console.log("A média é: " + media);
}

calcularMedia(myArgs1, myArgs2);
