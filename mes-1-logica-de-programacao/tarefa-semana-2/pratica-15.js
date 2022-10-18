let calculoImc = (peso, altura) => {
    imc = peso / altura ** 2
    return imc 
}



let imcDoCorpo = (imc) => {    
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
  
  console.log(imcDoCorpo(calculoImc(120,1.60)))
  


