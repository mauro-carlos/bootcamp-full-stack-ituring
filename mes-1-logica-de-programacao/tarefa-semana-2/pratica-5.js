let expressaoFuncao = function valorProdutoComDesconto (valorProduto, valorDesconto) {
    const ValorFinal = valorProduto - valorProduto * valorDesconto/100;
    return ValorFinal;
}
console.log (expressaoFuncao (187, 10));
