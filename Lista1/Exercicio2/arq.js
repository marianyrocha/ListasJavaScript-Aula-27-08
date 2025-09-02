// 1. Crie duas variáveis numA e numB
let numA = 5;
let numB = 5; 

//2. Calcule e imprima no console:
console.log("Soma: " + (numA+numB));
console.log("Diferença: " + (numA-numB));
console.log("Produto: " + numA*numB);
console.log("Quociente: "+numA/numB);
console.log("Resto: "+numA%numB);

// 3. Dobrar o valor de numA e reduzir numB pela metade.
console.log("Dobrar: " + numA*2);
console.log("Metade: " + numB/2);

// 4. Compare numA e numB usando === e ==. Explique a diferença nos resultados.
console.log(numA===numB);
console.log(numA==numB);

// Explicação: 
// Foram criadas duas variáveis numA e numB do tipo let, ambas com valor 5 atribuido. 
// Ao comparar as duas utilizando === e ==, obteve-se true como resultado, as duas são iguais neste caso. 
// == compara apenas os valores.
// === compara os valores e os tipos da variável.

//5. Crie duas variáveis booleanas condicao1 e condicao2. 
// Use operadores lógicos (&&, ||, !) para imprimir todas as combinações possíveis e seus resultados.
let condicao1 = false;
let condicao2 = true;

console.log("condicao1 =", condicao1);
console.log("condicao2 =", condicao2);

console.log("condicao1 && condicao2 =", condicao1 && condicao2);
console.log("true && true  =", true && true);
console.log("true  && false =", true && false);
console.log("false && true  =", false && true);
console.log("false && false =", false && false);

console.log("condicao1 || condicao2 =", condicao1 || condicao2);
console.log("true  || true  =", true || true);
console.log("true  || false =", true || false);
console.log("false || true  =", false || true);
console.log("false || false =", false || false);

console.log("!condicao1 =", !condicao1);
console.log("!condicao2 =", !condicao2);
console.log("!true  =", !true);
console.log("!false =", !false);