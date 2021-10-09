'use strict';

// Using let/const to prevent REASSIGN.
var PI = 3.14;
PI = 42;

// Solution.
// Can't use let since let will also allow reassignment
const PI = 3.14;
PI = 42;

/*

QUESTIONS

1. what is the difference between var and let?
With var, you can redeclare, it's function scoped, and it is hoisted up.
You cannot redeclare with let, it's block scoped, and it does not get hoisted.

2. what is the difference between var and const?
var can be redeclared or reassigned, it's function scoped, and it is hoisted up.
const cannot be redeclared or reassigned, it's block scoped, and it does not get hoisted.

3. what is the difference between let and const?
let can be reassigned and you do not need to assign a variable when declaring it.
const cannot be reassigned and you need to assign a variable when declaring.

4. what is hoisting. 
hoisting is when javascript reads all the codes first before funning so that it has access to the variable name even if the value is undefined and will be filled in later.


*/
