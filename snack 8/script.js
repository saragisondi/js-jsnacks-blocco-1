const numberUtente = prompt ('inserisci un numero di 4 cifre');
let somma = 0;

for (let i = 0; i < numberUtente.length; i++) {
  // console.log(numberUtente.charAt(i))
  somma += parseInt(numberUtente[i]);
}

console.log(somma)

