// Problema 3. Crie uma variável para receber o salário de um funcionário e aumentá-lo em 20%. Após o aumento, calcule o INSS desse funcionário que é de 8%. mostre o salário inicial, o salário com o aumento e o desconto do INSS o salário final.
let salarioInicial = 1500;
let salarioAumento = salarioInicial+ (salarioInicial * 20)/100;
let descontoINSS = (salarioAumento * 8)/100;
let salarioFinal = salarioAumento - descontoINSS;

console.log("Salario inicial: R$"+salarioInicial);
console.log("Salario com aumento de 20%: R$"+salarioAumento);
console.log("Desconto do INSS de 8%: R$"+descontoINSS);
console.log("Salario final: R$"+salarioFinal);
