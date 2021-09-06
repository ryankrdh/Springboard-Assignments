'use strict';

/*
Write a function called random game that selects a random number between 0 and 1 every 1000 miliseconds and each time that a random number is picked, add 1 counter. If the number is greater than .75, stop the timer and console.log the number of tries it took before we found anumber greater than .75.
*/

function randomGame() {
    let counter = 0;
    let randomNumber = 0;
    // randomize number 0 and 1 every 1000 milliseconds.
    // let randomNumber = Math.random();
    let gameGenerator = setInterval(function () {
        randomNumber = Math.random();
        counter ++;
        // If the picked number is greater than .75, stop the timer.
        if (randomNumber > .75) {
            // stop the timer, console.log the number of tries.
            console.log(counter);
            break;
        }
    }, 1000)
}
