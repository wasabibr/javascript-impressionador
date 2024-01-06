/*
Módulo 3 - Exercícios

Observações:
- O nome de cada variável criada deve respeitar as regras de nomenclatura de variáveis.
- Se uma variável não tiver seu valor alterado depois da inicialização, ela deve ser do tipo const .
- Comece cada resolução com o comentário em texto "Resolução do exercício X", sendo X o número do exercício em questão.
*/

console.log("Resolução do exercício 3");

/*
1 - Faça uma função que recebe as notas das 3 provas de um aluno e calcula a média dessas. Ao término do processo, devemos ter a mensagem "a média desse aluno é x" (sendo x o resultado do cálculo).
*/

let a = 0;
let b = 0;
let c = 0;
let res = 0;

function media(a, b, c) {
  let med = (a + b + c) / 3;
  return med;
}

res = media(5, 7, 9);
console.log(`1) A média desse aluno é ${res}.`);

/*
2 - Imagine agora que o aluno do item anterior não atingiu a média mínima pra passar, e por isso está de prova final. Faça uma nova função que calcula a média final desse aluno a partir de 4 notas, as das 3 primeiras provas + a nota da prova final. O cálculo deve ser o seguinte:

média_final = (média_antes_da_pf + pf)/2

Você deve usar a função do exercício 1 para calcular a média final. Faça as modificações que julgar necessário.
Ao término do processo, devemos ter a mensagem "a média final desse aluno é x" (sendo x o resultado do cálculo).
*/

let d = 0;
let mf = 0;

function provaFinal(n1, n2, n3, d) {
  let i = media(n1, n2, n3);
  if (i >= 7) {
    console.log(`2) A média desse aluno é ${i}.`);
  } else {
    mf = (i + d) / 2;
    console.log(`2) A média desse aluno é ${mf}.`);
  }
}

provaFinal(3, 7, 7, 8);

/*
3 - Escreva uma função que recebe do usuário um valor de temperatura em graus Celsius e escreve na tela o texto: a temperatura correspondente em Farenheit é de xºF (sendo x o resultado da conversão.)
Obs: temperatura em Farenheit = (9/5)*( temperatura em Celsius ) + 32
*/

let tC;

function celsiusFarenheit(tC) {
  let cF = (9 / 5) * tC + 32;
  console.log(`3) A temperatura correspondente em Farenheit é de ${cF}ºF.`);
}

celsiusFarenheit(30);

/*
4 - Quando estava passeando em Nova York, Bruno se surpreendeu com uma realidade diferente da que conhecia. Ao tentar pagar um produto, ele percebeu que o valor cobrado era sempre um pouco maior do que o que estava presente na etiqueta da prateleira onde o achou. Isso acontece porque a etiqueta não contém o valor do imposto pago sobre o produto, que é calculado no caixa. Esse imposto é de 8,875% em cima do valor do produto. Faça uma função que recebe o valor do produto presente na etiqueta e registre na tela a frase: modulo3_exercicios.md 2/27/2023
2 / 2
O valor a ser pago é x (sendo x o resultado do acréscimo dos impostos sobre o valor inicial).
*/

console.log("modulo3_exercicios.md 2/27/2023 2/2");
let etiqueta = 0;

function valorFinal(etiqueta) {
  res = etiqueta * 1.08875;
  console.log(`4) O valor a ser pago é ${res}.`);
}

valorFinal(100);
