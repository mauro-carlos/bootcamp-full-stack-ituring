/*
Relembrando o problema: "Crie uma função que recebendo como argumento uma lista de seriados quaiquer, exiba na tela cada um dos seriados com o índice de cada um na lista".

Agora, altere o código da solução e utilize o método .forEach.
*/



let listadeFilmes = function (filme) {
    filme.forEach (function(item, indice) {
    console.log (`[${indice}]: ${item}`)
    })
}

    
         
    
    
    

listadeFilmes(["Breaking Bad", "Game of Thrones", "Stranger Things", "Chernobyl", "Dexter", "The Last Dance", "This is Us"])