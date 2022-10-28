/*
Copie e cole em pratica-3.js o código do arquivo pratica-6.js da pasta tarefa-semana-3. Vamos utilizar o exercício da Prática 6: Melhorando o processo de busca da semana anterior.

Relembrando o problema: "Recebendo como argumento uma lista de seriados e um termo de pesquisa, retorne uma lista com todos os seriados que possuem aquele termo. Veja o exemplo abaixo.".

Agora, altere o código da solução e utilize o método .filter.






*/

let pesquisarFilmes = (serie, buscar) => {
    let result = serie.filter(function(item) {
        if (item.includes(buscar)) {
            return item 
        }
    });
    return result 
    } 


const lista = ["Breaking Bad", "Game of Thrones", "Stranger Things", "Chernobyl", "Dexter", "The Last Dance", "This is Us"];
const termoDeBusca = "Th";
console.table(pesquisarFilmes(lista, termoDeBusca));