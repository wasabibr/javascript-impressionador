/* 
### 1 - Escreva um programa executando os seguintes passos:

    -Crie uma variável com o valor inicial igual a uma lista de número de 1 a 5. Esse valor não deve ser alterado.

    -Imprima na tela: A primeira variável. 

    -Imprima na tela a seguinte mensagem: "O valor do elemento X da minha lista é $valor", substituindo o termo iniciado em $ pelo valor abrigado na sua variável. X é a posição do elemento na lista.
*/

console.log("Exercicio 01");

const lista = [1, 2, 3, 4, 5];

console.log(lista[0]);

console.log(`O valor do elemento 1 da minha lista é ${lista[0]}.`);

/*
### 2 - Escreva um programa executandos os próximos passos:    

    -Crie uma variável com valor inicial de um objeto que represente um pokemon (nome, estamina, defesa, ataque, habilidade).

    -Imprima na tela os textos "Meu objeto pokemon possui "chave" e $valor", substituindo os termos com $ pelos valores correspondentes ao conjunto chave/valor.
*/

console.log("Exercicio 02");

const pokemon = {
  nome: "Metapod",
  estamina: 100,
  defesa: 100,
  ataque: 5,
  habilidade: "Endurecer",
};

console.log(`Meu pokemon possui nome: ${pokemon.nome}.`);
console.log(`Meu pokemon possui estamina: ${pokemon.estamina}.`);
console.log(`Meu pokemon possui defesa: ${pokemon.defesa}.`);
console.log(`Meu pokemon possui ataque: ${pokemon.ataque}.`);
console.log(`Meu pokemon possui habilidade: ${pokemon.habilidade}.`);

/*
### 3 - Crie duas variáveis do tipo Number de valores iniciais distintos. Imprima na tela o resultado das operações aritméticas entre elas(+, -, /, *).
*/

console.log("Exercicio 03");

let num1 = 5;
let num2 = 5;

console.log(`Soma: ${num1 + num2}.`);
console.log(`Subtração: ${num1 - num2}.`);
console.log(`Multiplicação: ${num1 * num2}.`);
console.log(`Divisão: ${num1 / num2}.`);

/*
### 4 - Depois disso. Imprima na tela o resultado das operações de comparação maior que (>), menor que(<) e igual(===) para as duas variáveis.
*/

console.log("Exercicio 04");

console.log(`>: ${num1 > num2}.`);
console.log(`<: ${num1 < num2}.`);
console.log(`==: ${num1 === num2}.`);
