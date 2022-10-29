/*
Uma prática comum quando trabalhamos com objetos é listar as propriedades que um determinado objeto possui.
Crie uma função em pratica-7.js que receba um objeto como parâmetro e imprima a lista de chaves que ele possui.

Dado de entrada da função:
{
  marca: "Tramontina",
  produto: "Jogo de talheres",
  preco: 500,
  quantidade: 132,
  categoria: "Utensilhos domésticos"
}
Retorno esperado da função:

['marca', 'produto', 'preco', 'quantidade', 'categoria']
Teste o seu código, veja se está funcionando de acordo com o exemplo, e depois faça o commit e suba ele no seu GitHub.

*/

let carro = {
    marca: "Tramontina",
    produto: "Jogo de talheres",
    preco: 500,
    quantidade: 132,
    categoria: "Utensilhos domésticos", 
    chaveCarro: (carros) => {
        console.log(Object.keys(carro));
    }
    
        
    };

    carro.chaveCarro(carro);



