// 1. Declare uma variável nomeProduto do tipo const e atribua a ela o nome de um produto de sua escolha (ex: “Camiseta”).
// 2. Declare uma variável precoUnitario do tipo let e atribua a ela um valor numérico (ex: 29.99).
// 3. Declare uma variável quantidadeEmEstoque do tipo let e atribua a ela um número inteiro (ex: 50).
// 4. Declare uma variável disponivelParaVenda do tipo boolean e atribua true ou false conforme a quantidadeEmEstoque.

const nomeProduto = "Camiseta";
let precoUnitario = 29.99;
let quantidadeEmEstoque = 50;
var disponivelParaVenda = true;


// 5. Imprima no console o tipo de cada uma dessas variáveis usando typeof.
console.log("Variável: " + nomeProduto + " - Tipo: " + typeof (nomeProduto));
console.log("Variável: " + precoUnitario + " - Tipo: " + typeof (precoUnitario));
console.log("Variável: " + quantidadeEmEstoque + " - Tipo: " + typeof (quantidadeEmEstoque));
console.log("Variável: " + disponivelParaVenda + " - Tipo: " + typeof (disponivelParaVenda));

// 6. Altere o valor de quantidadeEmEstoque para 30 e disponivelParaVenda para true (se for o caso).
// 7.Tente reatribuir um novo valor para nomeProduto. O que acontece? Explique o erro (se houver).

quantidadeEmEstoque = 30;
nomeProduto = "Calça";

// Explicação:
// Erro apresentado: 
// TypeError: Assignment to constant variable.
// Foi declarada uma variável nomeProduto do tipo const e atribuído a ela o nome "Camiseta". 
// O erro apresentado ocorreu devido ao tipo da variável, que é const, ou seja, uma constante que não pode ter seu valor alterado.