function valorProdutoComDesconto (valorProduto, valorDesconto) {
    const ValorFinal = valorProduto - valorProduto * valorDesconto/100;
    return ValorFinal;
}
console.log (valorProdutoComDesconto (100, 10));
