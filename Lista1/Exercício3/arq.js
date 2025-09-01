// 1. Crie uma variável idadeUsuario e atribua um valor.
let idadeUsuario = 15;

// 2. Usando if, else if e else, determine se o usuário é:
if(idadeUsuario > 0 && idadeUsuario <= 12){
  console.log("Criança");
}else if(idadeUsuario >= 13 && idadeUsuario <=17){
  console.log("Adolescente");
}else if(idadeUsuario >= 18 && idadeUsuario <= 59){
  console.log("Adulto");
}else{
  console.log("Idoso");
}

// 3. Crie uma variável diaSemana (ex: “segunda”, “terça”, etc.). Usando switch, imprima se é um “Dia útil” ou “Fim de semana”.
let diaSemana = "segunda";

switch(diaSemana){
  case "segunda":
    console.log("Dia útil");
    break;
  case "terça":
    console.log("Dia útil");
    break;
  case "quarta":
    console.log("Dia útil");
    break;
  case "quinta":
    console.log("Dia útil");
    break;
  case "sexta":
    console.log("Dia útil");
    break;
  case "sábado":
    console.log("Fim de semana");
    break;
  case "domingo":
    console.log("Fim de semana");
    break;
  default:
    console.log("inválido");
    break;
}

// 4. Use o operador ternário para verificar se um número x é par ou ímpar. Imprima “Par” ou “Ímpar”.
let numParImpar = 2;

if(numParImpar%2==0){
  console.log("par");
}else{
  console.log("impar");
}
