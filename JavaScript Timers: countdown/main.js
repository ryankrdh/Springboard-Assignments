'use strict';

/* Timers Exercise
Write a function called countdown that accepts a number as a parameter and every 1000 milliseconds decrements the value and console.logs it. Once the value is 0 it should load "DONE!" and stop.

countDown(4);
// 3
// 2
// 1
// "DONE!"
*/

function countDown(num) {
  let timerID = setInterval(function () {
    num--;
    // in order for the countdown to wait to show DONE as part of the countdown, console.log needs to be after the if statement.
    if (num == 0) {
      clearInterval(timerID);
      console.log('DONE!');
    } else {
      console.log(num);
    }
  }, 1000);
}

countDown(4);
