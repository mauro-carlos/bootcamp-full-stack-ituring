/*
No arquivo pratica-4.js escreva uma função que recebendo uma lista com valores do tipo number, retorne uma lista com a raiz quadrada de cada um dos elementos. Qual método de iteração é o mais apropriado para este problema? .forEach(), .map() ou .filter()? Utilize o método mais apropriado para este problema.

Dados de entrada da função:
[4, 9, 16, 25, 36, 49]

Chamando a função:
suaFuncao([4, 9, 16, 25, 36, 49])


Retorno esperado da função:
[2, 3, 4, 5, 6, 7]

Teste o seu código, veja se está funcionando de acordo com o exemplo, e depois faça o commit e suba ele no seu GitHub.
Dica: uma raiz vertical do termo raiz quadrada javascriptno Google para descobrir como tirar um número correto com JavaScript.
Desafio: você pode fazer com que esta função tenha apenas uma única linha de comando:

suaFuncao(lista) {
  // um único comando aqui
}
*/
function raizQuadrada (listaNumeros) {
    listaRaizQuadrada = listaNumeros.map(function(item){
        return Math.sqrt(item)
    })
    return listaRaizQuadrada
}

const lista = [4, 9, 16, 25, 36, 49];
console.log (raizQuadrada(lista));

