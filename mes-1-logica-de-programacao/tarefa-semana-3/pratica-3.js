function numerosPrimos (numero) {
    let i = 1;
    let divisores = 0;
    while (i <= numero) {
        if (numero % i  == 0) {
            divisores++;
    }
    i++; 
}
  if (divisores == 2){
    return true
  }else {
    return false
  }
}

console.log (numerosPrimos(17));
console.log (numerosPrimos(2));
console.log (numerosPrimos(7));
console.log (numerosPrimos(8));
console.log (numerosPrimos(5));
console.log (numerosPrimos(23));
console.log (numerosPrimos(15));
console.log (numerosPrimos(1500450271));