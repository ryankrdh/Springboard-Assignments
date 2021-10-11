'use strict';

// ARROW FUNCTION EXERCISE
/*
1. Refactor the code to use two arrow functions. Turn it into a one-liner.
function double(arr) {
  return arr.map(function (val) {
    return val * 2;
  });
}
*/

// one arrow function
// function double(arr)
//     arr.map((val) => val * 2);

// two arrow function shorthand
const double = (arr) => arr.map((val) => val * 2);

/*
2. Replace all functions with arrow functions:
function squareAndFindEvens(numbers){
  var squares = numbers.map(function(num){
    return num ** 2;
  });
  var evens = squares.filter(function(square){
    return square % 2 === 0;
  });
  return evens;
}

*/

const squareAndFindEvens = (numbers) =>
  numbers.map((num) => num ** 2).filter((square) => square % 2 === 0);
