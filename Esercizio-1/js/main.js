"use strict";
// creo un array di email
const authorizedEmail = ["example1@gmail.com", "example2@hotmail.com", "example3@yahoo.com", "login@gmail.com"];
//creo una funzione che si scatena quando clicco sul bottone.
function checkEmail() {
    //creo una const che prende il valore di input dell'utente
     const email = document.getElementById("email").value;
    // inizializzo un ciclo for che scorre l'array
    for (let i = 0; i < authorizedEmail.length; i++) {
        //se email corrisponde all'attuale indice dell'array, allora accesso consentito e ciclo si interrompe
        if (authorizedEmail[i] === email) {
            console.log("Accesso autorizzato");
            break;
        //altrimenti controlliamo di non essere arrivati alla fine dell'array. Se ci siamo arrivati, la mail non è presente = accesso negato; altrimenti ricomincia il ciclo
        } else if (i === authorizedEmail.length - 1) {
            console.log("Accesso negato");
        }
    };
};