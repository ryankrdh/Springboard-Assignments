'use strict';

// 1. Refactor the following function:
function filterOutOdds() {
  var nums = Array.prototype.slice.call(arguments);
  return nums.filter(function (num) {
    return num % 2 === 0;
  });
}

// Refactor
const filterOutOdds = (...arguments) => arguments.filter((value) => value % 2 === 0)

// 2. findMin: Write a function called findMin that accepts a variable number of arguments and returns the smallest argument.
// Make sure to do this using the rest and spread operator.

// const findMin = (...args).reduce((min, currNum) => {
//     return Math.min(min, currNum);
// });

const findMin = (...args) => Math.min(...args)

findMin(1,4,12,-3) // -3
findMin(1,-1) // -1
findMin(3,1) // 1

// 3. mergeObjects
// Write a function called mergeObjects that accepts two objects and returns a new object which contains all the keys and values of the first object and second object.

const mergeObjects = 
mergeObjects({a:1, b:2}, {c:3, d:4}) // {a:1, b:2, c:3, d:4}
