//CREO UN ARRAY VUOTO
let numberArray = [];


//FACCIO UN CICLO E UN PROMPT PER CHIEDERE ALL'UTENTE UN NUMERO
for (let i = 0 ; i < 6 ; i++){
  let number = prompt('inserisci un numero')
  console.log(number)

  //VERIFICO I NUMERI DISPARI
  if (i % 2){
    console.log([i])
    numberArray.slice(number[i]);
    console.log(numberArray[i])
  }
}
