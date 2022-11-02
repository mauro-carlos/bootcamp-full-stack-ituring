/*

Prática 10: Calculando o saldo final
Crie uma função no arquivo pratica-10.js que recebe como argumento uma lista de objetos com depósitos e retiradas como o saldo no exemplo abaixo, exiba o saldo final da conta.

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
O saldo final de sua conta foi positivo no valor de R$ 27.
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
  dataMovimentacao: "2022-06-08T09:46:36.611Z",
}]




  let saldoDeConta = function (extrato) {
    let saldoFinal = 0;    
    extrato.forEach(element => {      
        if (element.movimentacao == "deposito") {
          saldoFinal += element.valor                
          
    }else if (element.movimentacao == "retirada") {
           saldoFinal -= element.valor
      
    
        
        }
    
    
      });      
      let ehPositivoOuNegativo = "negativo"
       if(saldoFinal > 0){
      ehPositivoOuNegativo = "positivo"
      }

      console.log(`O saldo final de sua conta foi ${ehPositivoOuNegativo}   no valor de ${saldoFinal}.`)
    
    
     
    }
    
    
  
    saldoDeConta(extratoDeConta);





   
      
  
      
  


      