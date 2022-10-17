let saudacaoMundo = (lingua1, lingua2, lingua3) => {
    if (lingua1 === "en"|| lingua2 === "en" || lingua3 === "en") {
        console.log ("saudação em Ingles : Hello Word")
    }else if (lingua1 === "pt"|| lingua2 === "pt" || lingua3 === "pt") {
        console.log("saudação em Portugues Olá Mundo")
    } else     if (lingua1 === "es"|| lingua2 === "es" || lingua3 === "es") {
        console.log( "saudação em Espanhol Hola mundo")
    } else if (lingua1 === ""|| lingua2 === "" || lingua3 === "") {
        console.log( "saudação Padrão Ola mundo")
}  

}

saudacaoMundo("");
saudacaoMundo("es");
saudacaoMundo("pt");
saudacaoMundo("en");