// 1. Usando um loop for, imprima os números de 1 a 10.
for(i=1; i<=10; i++){
  console.log(i);
}

// 2. Usando um loop while, imprima os números pares de 0 a 20.
let num = 0;
while(num<=20){
  if(num%2==0){
  console.log(num);
  }
  num++;
}


// 3. Usando um loop do...while, peça ao usuário para digitar um número maior que 10. Continue pedindo até que a condição seja satisfeita. (Em Node.js, você pode simular a entrada do usuário com readline ou simplesmente definir um valor e testar a lógica).
// let numero = 15;
// do{
//   console.log(numero);
//   numero -= 6;
// }while(numero>10)
//   console.log(numero);

// 4. Crie um array de nomes. Use for...of para imprimir cada nome no console.
let nomes = ["maria", "julia", "joão"];

for(let nome of nomes){
  console.log(nome);
}

// 5. Crie um objeto produtoDetalhes com propriedades como nome, preco, categoria. Use for...in para imprimir cada chave e seu valor.
let produtoDetalhes = {
  nome: "Camiseta",
  preco: 50,
  categoria: "Roupa"
}

for(let chave in produtoDetalhes){
  console.log(chave + ": " + produtoDetalhes[chave]);
}