'use strict';

/* Timers Exercise
Write a function called countdown that accepts a number as a parameter and every 1000 milliseconds decrements the value and console.logs it. Once the value is 0 it should load "DONE!" and stop.

countDwon(4);
// 3
// 2
// 1
// "DONE!"
*/

function countDown(num) {}
let timerID = setInterval(function () {
  time--;
}, 1000);

countDown(4);
