let listadeFilmes = function (filme) {
    let i = 0;
    while (i < filme.length) {
        console.log(`[${i}] ${filme[i]}`);
        i++;
    }
}
listadeFilmes(["Breaking Bad", "Game of Thrones", "Stranger Things", "Chernobyl", "Dexter", "The Last Dance", "This is Us"])