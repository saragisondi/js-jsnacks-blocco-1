//CREO UN ARRAY VUOTO
let numberArray = [];


//FACCIO UN CICLO E UN PROMPT PER CHIEDERE ALL'UTENTE UN NUMERO
for (let i = 0 ; i < 6 ; i++){
  let number = parsInt(prompt('inserisci un numero'));
  console.log(number)

  //VERIFICO I NUMERI DISPARI
  if (number % 2 != 0){
    console.log('Dispari')
    numberArray.push(number);
  }
}

console.log(numberArray);