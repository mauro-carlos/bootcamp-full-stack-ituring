let MaiorDeTres = function (x,y,z) {
    if (x > y && x > z) {
      return `o numero ${x} é o maior deles`
} else 
    if (y > z){
    return `o numero ${y} é o maior deles`
    
} else {
    return `o numero ${z} é o maior de todos`
}
}
console.log(MaiorDeTres(30,30,30))