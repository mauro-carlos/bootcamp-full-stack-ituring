const tabuada = (numero) => {
    let multiplicacao;
    i=1;    
    while (i <= 10) {
        multiplicacao = numero * i;
        console.log (`${numero} x ${i} = ${multiplicacao}`);
        i++

    }
}
tabuada(10);