//CHIEDO UN NUMERO ALL' UTENTE
const number = prompt("inserisci un numero");

let output = document.getElementById("output")

//CHIEDO ALL'UTENTE DI INSERIRE UN NUMERO VALIDO
if(isNaN(number)){
  console.log('inserisci un numero valido')
}
//
for (let i = 0; i <= number; i++) {
  output.innerHTML += (i + "^3 = " + i * 3 + '<br>');
  console.log(output)
}