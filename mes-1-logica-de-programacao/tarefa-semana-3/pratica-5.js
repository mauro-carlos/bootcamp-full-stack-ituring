function pesquisarFilmes (listaDeFilmes, buscar) {
    let i = 0;
    let diferente = "underfined"
    while (i < listaDeFilmes.length) {
        if (listaDeFilmes[i] == buscar) {
            diferente = "vazio"
            return i;
        }
        i++;
    }
        if (diferente == "underfined")
            return "underfined"
}

const lista = ["Breaking Bad", "Game of Thrones", "Stranger Things", "Chernobyl", "Dexter", "The Last Dance", "This is Us"];
const termoDeBusca = "friend";
console.log (pesquisarFilmes(lista, termoDeBusca));