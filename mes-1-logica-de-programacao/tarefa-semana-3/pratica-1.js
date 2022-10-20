const tabuada = (numero) => {
    let multiplicacao;
    i=1;
    console.log(`tabuada de ${numero}`);  
    while (i <= 10) {
        multiplicacao = numero * i;        
        console.log (`${numero} x ${i} = ${multiplicacao}`);
        i++

    }
}

tabuada(30);