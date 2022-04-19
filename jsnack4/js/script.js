// jsnack4. Chiedi un numero di 4 cifre all'utente e calcola la somma di tutte le cifre che compongono il numero.

// Chiedo all'utente un numero con 4 cifre 
const userNumber = parseInt(prompt("Inserisci un numero con 4 cifre"));
console.log(userNumber);
// Calcolo la somma delle cifre che compongono il numero inserito dall'utente
let myNumbersSum = userNumber,
    sum = 0;

while (myNumbersSum) {
    sum += myNumbersSum % 10;
    myNumbersSum = Math.floor(myNumbersSum / 10);
}

console.log("La somma dei numeri della cifra inserita è:", sum);