let imcDoCorpo = function (peso, altura) {
  const imc = peso/(altura * altura);
  console.log (imc);
if (imc < 18.5) {
    return "Você esta abaixo do Peso"
}else if (imc >= 18.5 && imc < 25) {
    return "Você esta com peso Normal"
}else if (imc >= 25 && imc < 30) {
    return "Você esta com Sobrepeso"
}else if (imc > 30) {
    return "Você esta com Obesidade"
}
}

console.log (imcDoCorpo(85,1.70));
console.log (imcDoCorpo(60,1.70));
console.log (imcDoCorpo(70,1.70));
console.log (imcDoCorpo(65,1.70));
console.log (imcDoCorpo(63,1.70));
console.log (imcDoCorpo(100,1.70));
console.log (imcDoCorpo(150,1.70));
console.log (imcDoCorpo(200,1.70));