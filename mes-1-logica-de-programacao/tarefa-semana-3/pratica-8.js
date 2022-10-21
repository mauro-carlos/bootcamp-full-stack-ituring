let listaDeDepositos = (saldo) => { 
    let valorPositivo = 0
    let valorNegativo = 0
    let resultado = 0 
    let i = 0  

    while (i < saldo.length) {
        resultado = resultado + saldo[i];
        if (saldo[i] < 0) {
            valorNegativo = valorNegativo + saldo[i];


        } else {
            valorPositivo = valorPositivo + saldo[i];
        }

        i++
    }
     
     console.log(`O valor total depositado foi de: ${valorPositivo}`)
     console.log(`O valor total retirado foi de: ${valorNegativo}`)
     console.log(`O saldo final de sua conta foi positivo no valor de R$ ${resultado}`)

}

const listaSaldo = [100, -20, -30, 10, -7, -21, -5];
listaDeDepositos (listaSaldo);
