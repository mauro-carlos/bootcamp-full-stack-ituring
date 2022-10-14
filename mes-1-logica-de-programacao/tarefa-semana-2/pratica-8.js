let numeroImparouPar = function (numero) {
    eparouimpar = numero % 2;
    if (eparouimpar === 0)  {
      return `o numero ${numero} é par`     
}else {
    return `o numero ${numero} é impar`
}
}
console.log (numeroImparouPar (1024));