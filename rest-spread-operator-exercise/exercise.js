'use strict';

// 1. Refactor the following function:
// function filterOutOdds() {
//   var nums = Array.prototype.slice.call(arguments);
//   return nums.filter(function (num) {
//     return num % 2 === 0;
//   });
// }

// Refactor
const filterOutOdds = (...arg) =>
  arg.filter((value) => {
    return value % 2 === 0;
  });

// 2. findMin: Write a function called findMin that accepts a variable number of arguments and returns the smallest argument.
// Make sure to do this using the rest and spread operator.

// const findMin = (...args).reduce((min, currNum) => {
//     return Math.min(min, currNum);
// });

const findMin = (...args) => Math.min(...args);

findMin(1, 4, 12, -3); // -3
findMin(1, -1); // -1
findMin(3, 1); // 1

// 3. mergeObjects
// Write a function called mergeObjects that accepts two objects and returns a new object which contains all the keys and values of the first object and second object.

const mergeObjects = (obj1, obj2) => ({ ...obj1, ...obj2 });
mergeObjects({ a: 1, b: 2 }, { c: 3, d: 4 }); // {a:1, b:2, c:3, d:4}

// 4. doubleAndReturnArgs
// Write a function called doubleAndReturnArgs which accepts an array and a variable number of arguments. The function should return a new array with the original array values and all of additional arguments doubled.

const doubleAndReturnArgs = (arr, ...args) => [
  ...arr,
  ...args.map((value) => value * 2),
];
doubleAndReturnArgs([1, 2, 3], 4, 4); // [1,2,3,8,8]
doubleAndReturnArgs([2], 10, 4); // [2, 20, 8]

// // 5. Slice and Dice!
// // For this section, write the following functions using rest, spread and refactor these functions to be arrow functions! Make sure that you are always returning a new array or object and not modifying the existing inputs.

// /** remove a random element in the items array
// and return a new array without that item. */

const items = ['a', 'b', 'c', 'd', 'e', 'f'];
// const items = [1, 2, 3, 4, 5];

// const removeRandom = (items) => {
//   let randomElement = Math.floor(
//     Math.random() * (Math.max(...items) - Math.min(...items) + 1) +
//       Math.min(...items)
//   );
//   return [...items.slice(0, randomElement), ...items.slice(randomElement + 1)];
// };

const removeRandom = (items) => {
  // the following randomized number will go from 0, items.length
  let randomElement = Math.floor(Math.random() * items.length);
  return [...items.slice(0, randomElement), ...items.slice(randomElement + 1)];
};

// console.log(removeRandom(items));

// /** Return a new array with every item in array1 and array2. */

const array1 = [1, 2, 3];
const array2 = [4, 5, 6];

const extend = (array1, array2) => {
  return [...array1, ...array2];
};

// console.log(extend(array1, array2));

// /** Return a new object with all the keys and values
// from obj and a new key/value pair */

const obj = {
  dog: 'woof',
  cat: 'meow',
  bird: 'chirp',
};

const key = 'cow';
const val = 'moo';

const addKeyVal = (obj, key, val) => {
  return { ...obj, [key]: val };
};

// console.log(addKeyVal(obj, key, val));

// /** Return a new object with a key removed. */

const key1 = 'bird';

const removeKey = (obj, key1) => {
  let newObj = { ...obj };
  delete newObj[key1];
  return newObj;
};

// console.log(removeKey(obj, key1));

// /** Combine two objects and return a new object. */

const secondObj = {
  snake: 'hiss',
  sheep: 'baa',
};

const combine = (obj, secondObj) => {
  //   const newObj = { ...obj, ...secondObj };
  //   return newObj;
  return { ...obj, ...secondObj };
};

// console.log(combine(obj, secondObj));

// /** Return a new object with a modified key and value. */

const update = (obj, key, val) => {
  let newObj = { ...obj };
  newObj[key] = val;
  return newObj;
};
