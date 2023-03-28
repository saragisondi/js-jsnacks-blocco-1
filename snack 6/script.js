//CHIEDO UN NUMERO ALL' UTENTE
const number = parseInt(prompt("inserisci un numero"));

let output = document.getElementById("output")

//CHIEDO ALL'UTENTE DI INSERIRE UN NUMERO VALIDO
if(isNaN(number)){
  console.log('inserisci un numero valido')
}
//
for (let i = 1; i <= number; i++) {
  const cubo = Math.pow(i,3);
  console.log(cubo)
}