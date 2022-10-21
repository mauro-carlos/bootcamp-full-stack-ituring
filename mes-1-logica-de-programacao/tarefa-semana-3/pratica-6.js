function pesquisarFilmes (listaDeFilmes, buscar) {    
    let i = 1; 
    let j = []; 
    while (i < listaDeFilmes.length) {
        if (listaDeFilmes[i].includes(buscar)) {
            j[i] = listaDeFilmes[i]
            //console.log(j[i-1])                     
            
        }
        i++;        
    }
     return j
}
const lista = ["Breaking Bad", "Game of Thrones", "Stranger Things", "Chernobyl", "Dexter", "The Last Dance", "This is Us"];
const termoDeBusca = "Th";
console.log (pesquisarFilmes(lista, termoDeBusca));