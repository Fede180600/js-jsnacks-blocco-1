// jsnack1. L'utente inserisce due parole in successione, con due prompt. Il software stampa prima la parola più corta, poi la parola più lunga.

// Chiedo all'utente due parole con due prompt
const userFirstWord = prompt("Dimmi la prima parola");
const userSecondWord = prompt("Dimmi la seconda parola");

// Verificho la lunghezza delle parole
const userFirstWordLength = userFirstWord.length;
const userSecondWordLength = userSecondWord.length;


console.log("Prima parola:", userFirstWord, userFirstWordLength);
console.log("Seconda parola:", userSecondWord, userSecondWordLength);
// Stampo prima la parola più corta poi quella più lunga
let result;

if (userFirstWordLength > userSecondWordLength) {
    result = `${userSecondWord} ${userFirstWord}`;
} else if (userSecondWordLength > userFirstWordLength) {
    result = `${userFirstWord} ${userSecondWord}`;
} else {
    result = `Le parole sono lunghe uguale.`;
}
// Output
console.log(result);