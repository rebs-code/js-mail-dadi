"use strict";

function rollDie() {
    const userResult = Math.floor(Math.random() * 6) + 1;
    const pcResult = Math.floor(Math.random() * 6) + 1;
    console.log(`You rolled a ${userResult}`);
    console.log(`Computer rolled a ${pcResult}`);

    if (userResult > pcResult) {
        console.log("User vince")
    } else if (userResult === pcResult) {
        console.log("Pareggio!")
    } else {
        console.log("Computer vince")
    };
};