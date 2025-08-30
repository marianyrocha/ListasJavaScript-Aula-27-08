const nomeProduto = "Camiseta";
let precoUnitario = 29.99;
let quantidadeEmEstoque = 50;
var disponivelParaVenda = true;

console.log("Variável: " + nomeProduto + " - Tipo: " + typeof (nomeProduto));
console.log("Variável: " + precoUnitario + " - Tipo: " + typeof (precoUnitario));
console.log("Variável: " + quantidadeEmEstoque + " - Tipo: " + typeof (quantidadeEmEstoque));
console.log("Variável: " + disponivelParaVenda + " - Tipo: " + typeof (disponivelParaVenda));

quantidadeEmEstoque = 30;
nomeProduto = "Calça";


//TypeError: Assignment to constant variable.