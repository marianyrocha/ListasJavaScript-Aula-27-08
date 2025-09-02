// Problema 5. Uma fábrica de camisetas produz os tamanhos pequeno, médio e grande, cada uma sendo vendida respectivamente por 10, 12 e 15 reais. Construa um algoritmo em que o usuário forneça a quantidade de camisetas pequenas, médias e grandes referentes a uma venda, e a máquina informe quanto será o valor arrecadado.

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const camisetaP = 10;
const camisetaM = 12;
const camisetaG = 15;

rl.question("Quantas camisetas pequenas? ", (qtdP) => {
  rl.question("Quantas camisetas médias? ", (qtdM) => {
    rl.question("Quantas camisetas grandes? ", (qtdG) => {
      const valorTotal = (qtdP * camisetaP) + (qtdM * camisetaM) + (qtdG * camisetaG);
      console.log(`O valor arrecadado será: R$ ${valorTotal}`);
      rl.close();
    });
  });
});
