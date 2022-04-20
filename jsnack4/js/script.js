// jsnack4. Chiedi un numero di 4 cifre all'utente e calcola la somma di tutte le cifre che compongono il numero.

// Chiedo all'utente un numero con 4 cifre 
// const userNumber = parseInt(prompt("Inserisci un numero con 4 cifre"));
// console.log(userNumber);
// // Calcolo la somma delle cifre che compongono il numero inserito dall'utente
// let myNumbersSum = userNumber,
//     sum = 0;

// while (myNumbersSum) {
//     sum += myNumbersSum % 10;
//     myNumbersSum = Math.floor(myNumbersSum / 10);
// }

// console.log("La somma dei numeri della cifra inserita è:", sum);
// // Stampo il risultato su display
// document.getElementById("my-title").innerHTML = `Il numero che hai inserito è ${userNumber}, la somma dei numeri che lo compongono è: ${sum}`

//Soluzione di Olga :)

// Chiedere all'utente un numero di 4 cifre
const userNumber = prompt ("Dimmi un numero di 4 cifre");
console.log(userNumber, typerof(userNumber));

// Calcolo la somma delle cifre
let sum = 0;
for (let i = 0; i < userNumber.length; i++) {
    const thisDigit = parseInt(userNumber[i]);
    sum += thisDigit;
    console.log(thisDigit, typeof(thisDigit));
}

// Stampo la somma
console.log(sum, typeof(sum));