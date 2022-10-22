let contagemDeVotos = function (listaDeVotos) {
let i = 0;
brasil = 0
argentina = 0
espanha = 0
portugal = 0

while (i < listaDeVotos.length ){
    if (listaDeVotos[i] == 1 || listaDeVotos[i]){
    if (listaDeVotos[i] == 1)
    brasil++
    if (listaDeVotos[i] == 2)
    argentina++
    if (listaDeVotos[i] == 3)
    espanha++
    if (listaDeVotos[i] == 4)
    portugal++

}
i++



}
console.log(`Brasil: ${brasil}`)
console.log(`Argentina: ${argentina}`)
console.log(`Espanha: ${espanha}`)
console.log(`Portugal: ${espanha}`)

console.log(`Resultado:
Brasil é o preferido para ganhar a Copa do Mundo!`)
}







votos = [1, 1, 1, 4, 4, 2, 3, 2];
contagemDeVotos(votos);