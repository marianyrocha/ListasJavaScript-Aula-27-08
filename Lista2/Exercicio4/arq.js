// Problema 4. Faça um algoritmo que receba a matrícula e duas notas do aluno. Calcular a média e mostrar a matrícula do aluno com as seguintes mensagens de acordo com os dados a seguir: Fazer um vetor de objeto de aluno. O objeto aluno deve ter nome, nota1 e nota2. Ao final mostre a média geral dos alunos.

let alunos = [
  {matricula: 1, nome: "João", nota1: 50, nota2: 90},
  {matricula: 2, nome: "Marcos", nota1: 50, nota2: 90},
  {matricula: 3, nome: "Maria", nota1: 50, nota2: 90}
]

let somaMedias = 0;

alunos.forEach(aluno => {
  const media = (aluno.nota1 + aluno.nota2) / 2;
  somaMedias += media
});

let mediaGeral = somaMedias / alunos.length;
console.log("A média geral dos alunos é: ", mediaGeral);