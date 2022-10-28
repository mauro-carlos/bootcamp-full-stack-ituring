/*
Copie e cole em pratica-2.js o código do arquivo pratica-5.js da pasta tarefa-semana-3. Vamos utilizar o exercício da Prática 5: Procurando um seriado especial da semana anterior.

Relembrando o problema: "Crie uma função que recebendo como argumento uma lista de seriados e o seriado que esteja querendo pesquisar, retorne a posição que se encontra o seriado. Caso não tenha encontrado o seriado, retorne undefined.".

Agora, altere o código da solução e utilize o método .forEach.

*/

function buscarSerie(series, termodebusca) {
    let indice = undefined
    series.forEach((filme, i) => {
        if(filme === termodebusca){
            console.log(`[${i}] : ${filme}`)
        }
    })
    console.log(indice)
}

let listaSeries = ["Breaking Bad", "Game of Thrones", "Stranger Things", "Chernobyl", "Dexter", "The Last Dance", "This is Us"]

buscarSerie(listaSeries, "Dexter")

