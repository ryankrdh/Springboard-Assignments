'use strict';

// Maps and Sets Exercise
// -----------------------------------------------
// Quick Question #1
// What does the following code return?

new Set([1, 1, 2, 2, 3, 4]); // {1, 2, 3, 4}

// -----------------------------------------------
// Quick Question #2
// What does the following code return?

[...new Set('referee')].join(''); // "ref"
// -----------------------------------------------
// Quick Questions #3
// What does the Map m look like after running the following code?

let m = new Map();
m.set([1, 2, 3], true);
m.set([1, 2, 3], false);

// {[1, 2, 3] => true, [1, 2, 3] => false}
// -----------------------------------------------
// hasDuplicate
// Write a function called hasDuplicate which accepts an array and returns true or false if that array contains a duplicate

const arr1 = [1, 3, 2, 1]; // true
const arr2 = [1, 5, -1, 4]; // false

// arrow function
const hasDuplicate = (arr) => new Set(arr).size !== arr.length;

// function expression
const hasDuplicate = function (arr) {
  const result = new Set(arr).size !== arr.length;
  return result;
};

// -----------------------------------------------
// vowelCount
// Write a function called vowelCount which accepts a string and returns a map where the keys are numbers and the values are the count of the vowels in the string.

function isVowel(str) {
  return ['a', 'e', 'i', 'o', 'u'].indexOf(str.toLowerCase()) !== -1;
}

// function isVowel(str) {
// return 'aeiou'.includes(str)
// }

function vowelCount(word) {
  const vowelMap = new Map();
  for (let char of word) {
    if (isVowel(char)) {
      if (vowelMap.has(char)) {
        vowelMap.set(char, vowelMap.get(char) + 1);
      } else {
        vowelMap.set(char, 1);
      }
    }
  }
  return vowelMap;
}

vowelCount('awesome'); // Map { 'a' => 1, 'e' => 2, 'o' => 1 }
vowelCount('Colt'); // Map { 'o' => 1 }

// -----------------------------------------------
// Classes
// Classes are a “blueprint” of functionality:

class Triangle {
  getArea() {
    return (this.a * this.b) / 2;
  }

  getHypotenuse() {
    return Math.sqrt(this.a ** 2 + this.b ** 2);
  }
}

let myTri = new Triangle();   // "instantiation" of triangle
myTri.a = 3;
myTri.b = 4;
myTri.getArea();        // 6
myTri.getHypotenuse();  // 5
demo/triangle-oo.js
class Triangle {

  getArea() {
    return (this.a * this.b) / 2;
  }

  getHypotenuse() {
    return Math.sqrt(this.a ** 2 + this.b ** 2);
  }
}
// Defines the methods each instance of Triangle will have
// Make a new triangle with new Triangle()
// Can still add/look at arbitrary keys (“properties”)
// this is “the actual triangle in question”
// Class names should be UpperCamelCase

// Reduces confusion between triangle (an actual, individual triangle) and Triangle (the class of triangles)

// A triangle is still an object:

typeof myTri;      // 'object'
But JS knows it’s an “instance of” the Triangle class:

myTri instanceof Triangle;   // true
// -----------------------------------------------

// -----------------------------------------------

// -----------------------------------------------

// -----------------------------------------------

// -----------------------------------------------
