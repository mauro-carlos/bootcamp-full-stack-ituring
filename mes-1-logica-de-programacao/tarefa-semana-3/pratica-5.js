let listadeFilmes = function (filme) {
    return  `${filme}`
    
    }

function pesquisarFilmes (buscar) {
    let filme = ["Breaking Bad", "Game of Thrones", "Stranger Things", "Chernobyl", "Dexter", "The Last Dance", "This is Us"];      
    let i = 0; 
    let diferente = "underfined"   
    while (i < filme.length) {       
        if (filme[i] == buscar) {
            diferente = "vazio"
            console.log (i);            
    } 
        
              
    
        i++;
        
}
    if (diferente != "vazio") {
         console.log ("underfined")
    }
}
 pesquisarFilmes("friends");
