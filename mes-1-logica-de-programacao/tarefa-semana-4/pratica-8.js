/*
Prática 8: Criando nossa lista de filmes
Crie uma função em pratica-8.js que receba uma lista de objetos de filmes como parâmetro. Exiba as informações de cada item da lista de acordo com a saída esperada abaixo.
Dado de entrada da função:
[{
  titulo: "Estrelas Além do Tempo",
  notaAvaliacao: 7.8,
  duracao: 127,
  anoPublicacao: 2016,
  genero: ["Biografia", "Drama", "História"]
},
{
  titulo: "Top Gun",
  notaAvaliacao: 8.6,
  duracao: 130,
  anoPublicacao: 2022,
  genero: ["Ação", "Drama"]
},
{
  titulo: "O Jogo da Imitação",
  notaAvaliacao: 8.0,
  duracao: 114,
  anoPublicacao: 2014,
  genero: ["Biografia", "Drama", "Suspense", "Guerra"]
}]

Valores exibidos pela função:
Estrelas Além do Tempo (Nota: 7.8)
• Duração: 127 minutos
• Ano de publicação: 2016
• Gênero: biografia, drama e história

Top Gun (Nota: 8.6)
• Duração: 130 minutos
• Ano de publicação: 2022
• Gênero: ação e drama

O Jogo da Imitação (Nota: 8.0)
• Duração: 114 minutos
• Ano de publicação: 2014
• Gênero: biografia, drama, suspense e guerra

*/

let listaDeFilmes = [{
  titulo: "Estrelas Além do Tempo",
  notaAvaliacao: 7.8,
  duracao: 127,
  anoPublicacao: 2016,
  genero: ["Biografia", "Drama", "História"]
},
{
  titulo: "Top Gun",
  notaAvaliacao: 8.6,
  duracao: 130,
  anoPublicacao: 2022,
  genero: ["Ação", "Drama"]
},
{
  titulo: "O Jogo da Imitação",
  notaAvaliacao: 8.0,
  duracao: 114,
  anoPublicacao: 2014,
  genero: ["Biografia", "Drama", "Suspense", "Guerra"]
}]

function PercorrerObjetos (listaDeFilmes) {
listaDeFilmes.forEach(function (item){
console.log(`${item.titulo}  (Nota: ${item.notaAvaliacao}) `)
console.log(`• Duração: ${item.duracao} minutos`)
console.log(`• Ano de publicação: ${item.anoPublicacao}`)
console.log(`• Gênero: ${item.genero}`)
console.log("")
console.log("")

  })
}

  PercorrerObjetos(listaDeFilmes)
