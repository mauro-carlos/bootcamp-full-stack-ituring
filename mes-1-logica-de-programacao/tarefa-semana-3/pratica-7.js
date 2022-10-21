/*
Crie uma função no arquivo pratica-7.js que recebendo como argumento uma lista de depósitos e retiradas como no exemplo abaixo, exiba o saldo final da conta via console.log() dentro da função.
Dado de entrada da função:
[100, -20, -30, 10, -7, -21, -5]


*/

let listaDeDepositos = (saldo) => { 
    let resultado = 0 
    let i = 0  
    while (i < saldo.length) {
        resultado = resultado + saldo[i];
        i++
    }
     
    
    console.log(`O resultado final de sua conta foi positivo no valor de R$ ${resultado}`);

}

const listaSaldo = [100, -20, -30, 10, -7, -21, -5];
listaDeDepositos (listaSaldo);
