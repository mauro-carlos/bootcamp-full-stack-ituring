/*
Prática 14: Criando a média de avaliações
Muitas pessoas utilizam os aplicativos de delivery e buscam as avaliações de clientes para decidir qual restaurante pedir comida.

Pois é, e você foi contratado pelo TomaFood para terminar uma funcionalidade que calcula a média de avaliações de um restaurante. Agora é a sua vez.

Crie uma função no arquivo pratica-14.js que recebe um objeto com a lista de avaliações de um restaurante, calcula a média de suas avaliações de acordo com a entrada de cada cliente e exibe a média de avaliação.

Dado de entrada da função:
{
  restaurante: "Turing Gourmet",
  tipo: "Comida britânica",
  avaliacoes: [
    {
      cliente: "Thais S.",
      nota: 9.8
    },
    {
      cliente: "Thales Gonçalves",
      nota: 8.9
    },
    {
      cliente: "José Lopes",
      nota: 9.9
    },
    {
      cliente: "Cristina Souza",
      nota: 9.3
    },
    {
      cliente: "Leo Garcia",
      nota: 8.5
    }
  ]
}

Valor exibido pela função: 
A média de avaliações do restaurante Turing Gourmet foi de 9.28.

Teste o seu código, veja se está funcionando de acordo com o exemplo, e depois faça o commit e suba ele no seu GitHub.


*/


let lista = {
    restaurante: "Turing Gourmet",
    tipo: "Comida britânica",
    avaliacoes: [
      {
        cliente: "Thais S.",
        nota: 9.8
      },
      {
        cliente: "Thales Gonçalves",
        nota: 8.9
      },
      {
        cliente: "José Lopes",
        nota: 9.9
      },
      {
        cliente: "Cristina Souza",
        nota: 9.3
      },
      {
        cliente: "Leo Garcia",
        nota: 8.5
      }
    ]
  }

  let mediaNota = function (lista) {
   let soma = 0;
   let i = 0;   
   lista.avaliacoes.forEach(function(item) {        
        soma += item.nota;
        i++;
      })
    
    media = (soma / i).toFixed(2);
    console.log(`A média de avaliações do restaurante Turing Gourmet foi de ${media}`);
   
  }
       
  

  mediaNota(lista);