# Mail e Dadi con JS

Questa repo contiene due folder. Il primo folder contiene un semplice codice JS che chiede all'utente di inserire un indirizzo email, lo script poi controlla se l'indirizzo email sia presente in una lista e se presente autorizza l'ipotetico accesso tramite un messaggio di conferma. 

Il secondo folder contiene un semplice script che simula un gioco di dadi fra l'utente e il computer. Entrambi "tirano" un dado a sei facce e vince chi fa il numero più alto, in caso di pareggio il risultato sarà proprio un pareggio, non avverranno ulteriori lanci. 

## Descrizione del login via email

1- Il programma chiede all'utente di inserire una mail in un campo input.

<label for="email">Email:</label>
<input type="email" id="email">
<button onclick="checkEmail()">Submit</button>

2- Una funzione salva l'input in una constante "email".

 function checkEmail() {
     const email = document.getElementById("email").value;
    }

3- Il programma controlla se la mail è presente in un array chiamato "authorizedEmail". authorizedEmail è un array creato a priori contenente delle email come stringhe.

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

## Descrizione del giochi dei dadi

1- L'utente clicca su un bottone per lanciare il proprio dado. 

//creo un bottone "Lancia il dado" in HTML
<button onclick="rollDie()">Lancia il dado</button>

2- In JS, scrivo una funzione che si scatena al click sul bottone. Questa funzione salva il risultato in una const e lo stampa in console.

function rollDie() {
    const result = Math.floor(Math.random() * 6) + 1;
    console.log(`You rolled a ${result}`);
};

3- Anche il computer lancia il dado, facciamo apparire il risultato nella stessa funzione.

function rollDie() {
    const userResult = Math.floor(Math.random() * 6) + 1;
    const pcResult = Math.floor(Math.random() * 6) + 1;
    console.log(`You rolled a ${userResult}`);
    console.log(`Computer rolled a ${pcResult}`);
};

4- Dentro la stessa funzione, creiamo un conditional statement per verificare chi ha vinto o se c'è un pareggio.

function rollDie() {
    const userResult = Math.floor(Math.random() * 6) + 1;
    const pcResult = Math.floor(Math.random() * 6) + 1;
    console.log(`You rolled a ${userResult}`);
    console.log(`Computer rolled a ${pcResult}`);

    if (userResult > pcResult) {
        console.log("User vince")
    } else if (userResult === pcResult) {
        console.log("Cpmputer vince")
    } else {
        console.log("Pareggio!")
    };
};




