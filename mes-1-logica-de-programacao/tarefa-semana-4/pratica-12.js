/*
Prática 12: Calculando um extrato do banco completo
Aproveite o seu código da Prática 11 e crie uma função no arquivo pratica-12.js que recebendo uma lista de depósitos e retiradas, exiba um resumo completo do extrato de sua conta com as seguintes informações no exemplo abaixo.

Dado de entrada da função:
[{
  valor: 100.00,
  movimentacao: "deposito",
  dataMovimentacao: "2021-08-02T07:46:36.611Z"
},
{
  valor: 20.00,
  movimentacao: "retirada",
  dataMovimentacao: "2021-09-17T09:46:36.611Z"
},
{
  valor: 30.00,
  movimentacao: "retirada",
  dataMovimentacao: "2022-02-24T09:46:36.611Z"
},
{
  valor: 10.00,
  movimentacao: "deposito",
  dataMovimentacao: "2022-03-02T09:46:36.611Z"
},
{
  valor: 7.00,
  movimentacao: "retirada",
  dataMovimentacao: "2022-04-20T09:46:36.611Z"
},
{
  valor: 21.00,
  movimentacao: "retirada",
  dataMovimentacao: "2022-03-20T09:46:36.611Z"
},
{
  valor: 5.00,
  movimentacao: "retirada",
  dataMovimentacao: "2022-06-08T09:46:36.611Z"
}]

Valor exibido pela função:
Total de depósitos: 2
Total de retiradas: 5
O valor total depositado foi de: R$ 110
O valor total retirado foi de: R$ 83
O saldo final de sua conta foi positivo no valor de R$ 27

*/
let extratoDeConta = [{
    valor: 100.00,
    movimentacao: "deposito",
    dataMovimentacao: "2021-08-02T07:46:36.611Z"
  },
  {
    valor: 20.00,
    movimentacao: "retirada",
    dataMovimentacao: "2021-09-17T09:46:36.611Z"
  },
  {
    valor: 30.00,
    movimentacao: "retirada",
    dataMovimentacao: "2022-02-24T09:46:36.611Z"
  },
  {
    valor: 10.00,
    movimentacao: "deposito",
    dataMovimentacao: "2022-03-02T09:46:36.611Z"
  },
  {
    valor: 7.00,
    movimentacao: "retirada",
    dataMovimentacao: "2022-04-20T09:46:36.611Z"
  },
  {
    valor: 21.00,
    movimentacao: "retirada",
    dataMovimentacao: "2022-03-20T09:46:36.611Z"
  },
  {
    valor: 5.00,
    movimentacao: "retirada",
    dataMovimentacao: "2022-06-08T09:46:36.611Z"
  }]


let saldoDeConta = function (extrato) {
    let saldoFinal = 0; 
    let saldoPositivo = 0
    let saldoNegativo  = 0
    let somar = 0;
    let contar = 0;
    extrato.forEach(element => {      
        if (element.movimentacao == "deposito") {
          saldoFinal += element.valor 
          saldoPositivo += element.valor 
          somar++             
          
    }else if (element.movimentacao == "retirada") {
           saldoFinal -= element.valor
           saldoNegativo -= element.valor
           contar++
        
        
        }        
        
    
      });  
         
      let ehPositivoOuNegativo = "negativo"
       if(saldoFinal > 0){
      ehPositivoOuNegativo = "positivo"
      }

      numero = Math.abs(saldoNegativo);
      console.log(saldoNegativo)

      console.log(`Total de Depósitos: ${somar}`);
      console.log(`Total de Retirada: ${contar}`);
      console.log(`O valor total depositado foi de: ${saldoPositivo}`);
      console.log(`O valor total Retirado foi de: ${numero}`)
      console.log(`O saldo final de sua conta foi ${ehPositivoOuNegativo}   no valor de ${saldoFinal}.`);
      
    
    
     
    }
    
    
  
    saldoDeConta(extratoDeConta);


