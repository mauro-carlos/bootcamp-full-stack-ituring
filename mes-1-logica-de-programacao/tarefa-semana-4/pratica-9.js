/*
Prática 9: Listando os melhores avaliados
Crie uma função em pratica-9.js que recaba uma lista de filmes como parâmetro.
Ordene a lista por notas de avaliação.
Imprima o item melhor avaliado da lista.
Dado de entrada da função:

[{
  titulo: "Um Sonho de Liberdade",
  notaAvaliacao: 9.2,
  duracao: 142,
  anoPublicacao: 1994,
  categoria: "Drama"
},
{
  titulo: "Clube da Luta",
  notaAvaliacao: 8.7,
  duracao: 139,
  anoPublicacao: 1999,
  categoria: "Drama"
},
{
  titulo: "Toy Story 3",
  notaAvaliacao: 8.3,
  duracao: 103,
  anoPublicacao: 2010,
  categoria: "Animação"
}]

Valor exibido pela função:

O filme de melhor avaliação com nota 9.2 é: Um Sonho de Liberdade.


Teste o seu código, veja se está funcionando de acordo com o exemplo, e depois faça o commit e suba ele no seu GitHub.

*/

let filmeMaisAvaliados = [{
    titulo: "Um Sonho de Liberdade",
    notaAvaliacao: 9.2,
    duracao: 142,
    anoPublicacao: 1994,
    categoria: "Drama"
  },
  {
    titulo: "Clube da Luta",
    notaAvaliacao: 8.7,
    duracao: 139,
    anoPublicacao: 1999,
    categoria: "Drama"
  },
  {
    titulo: "Toy Story 3",
    notaAvaliacao: 8.3,
    duracao: 103,
    anoPublicacao: 2010,
    categoria: "Animação"
  }]

  let MelhorAvaliado = (filmeMaisAvaliados) => {
    filmeMaisAvaliados.sort(function(a,b) {
      if (a.notaAvaliacao < b.notaAvaliacao)
          return -1;
      else {
          return true;
      }

      });
    }
    
  MelhorAvaliado(filmeMaisAvaliados)
  console.log(filmeMaisAvaliados)
  console.log(`O filme de melhor avaliação com nota ${filmeMaisAvaliados[2].notaAvaliacao} é: ${filmeMaisAvaliados[2].titulo}`)
   

    
        
    
