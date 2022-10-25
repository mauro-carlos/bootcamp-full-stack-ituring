function grupoDePessoas (listaDePessoas) {
  let i = 0
  let grupo1 = []
  let grupo2 = []
  let grupo3 = []
  while (i < listaDePessoas.length) {
    if (i < 2) {
        grupo1[i] = listaDePessoas[i]
        
    } else if (i < 4) {
        grupo2[i] = listaDePessoas[i]
    }else if (i < 7) {
        grupo3[i] = listaDePessoas[i]
    }
    i++
  }
  
console.log("Grupo 01:  " + grupo1.toString());
console.log("Grupo 02: " + grupo2.toString().replace(",,",""));
console.log("Grupo 03: " + grupo3.toString().replace(",,,,",""));

}
const pessoas = ["Anderson Luz", "Fabio Vechia", "Claudia Lopes", "Rafael Alves", "Maria Mansano", "Jairo Ferreira", "Vitor Ribeiro"]
grupoDePessoas(pessoas)