// jsnack2. Crea un array vuoto. Chiedi per 6 volte all'utente di inserire un numero, se è dispari inseriscilo nell'array.

// Creo la mia array vuota
const myArray = [];
// Chiedo 6 numeri all'utente 
for (let i = 0; i < 6; i++) {
    const userNumber = parseInt(prompt("Dimmi un numero"));
    console.log(userNumber);
    // Se è dispari lo inserisco nell'array
    if (userNumber % 2 === 1) {
        myArray.push(userNumber);
    }
}

console.log(myArray);

