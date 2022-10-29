/*
Prática 6: Criando nosso primeiro objeto
Os objetos representam algo do nosso cotidiano e é, juntamente a outros itens apresentados até agora, pilares fundamentais para a manipulação de dados e representação dessas informações que traduzem do nosso cotidiano para linguagens de programação.

Seguindo a nossa série de filmes e seriados, vamos criar a nossa lista customizada, acrescentando itens que representem filmes de cinema para o nosso código. No IMDb, você pode encontrar notas, títulos, tempo de duração para o filme e recomendações.

Para essa prática, crie uma função em pratica-6.js que recebe como argumento um objeto que tem informações de um filme e exibe o nome do filme o seu tempo de duração. O objeto deverá ter as seguintes propriedades:

Titulo (string)
    Nota de avaliação (number)
    Duração (number)
    Ano de publicação (number)
    Categoria (string)
Exemplo de dado de entrada da função:

Objeto que tem as seguintes informações de um filme:
- Título: "Estrelas Além do Tempo"
- Nota de avaliação: 7.8
- Duração: 127
- Ano de publicação: 2016
- Categoria: "Drama"
Chamando a função:

    suaFuncao(seuObjetoAqui)
Valor exibido pela função:

O filme Estrelas Além do Tempo que estreou em 2016 tem a avaliação de 7.8 pelo IMDb.
Teste o seu código, veja se está funcionando de acordo com o exemplo, e depois faça o commit e suba ele no seu GitHub.

O filme Estrelas Além do Tempo que estreou em 2016 tem a avaliação de 7.8 pelo IMDb.

*/
let f = {
    titulo: "o jogo da imitação",
    notaAvaliacao: 8.0,
    duracao: 114,
    anoPublicacao: 2014,
    genero: ["Biografia", "Drama", "Suspense", "Guerra"],
    exibirDuracaoFilme : (filme) => {
        console.log("O filme" + f.titulo + " que estreou em 2016 tem a avaliação de " + f.notaAvaliacao + " pelo IMDB");
        
    }
};

f.exibirDuracaoFilme(f);

f.titulo = "Estrelas Além do Tempo"
f.notaAvaliacao = 7.8
f.duracao = 127
f.anoPublicacao = 2016
f.genero = ["Biografia", "Drama", "Historia"]

f.exibirDuracaoFilme(f); 
console.log(f)