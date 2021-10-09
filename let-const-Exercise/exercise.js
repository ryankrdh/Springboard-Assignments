'use strict';

// Using let/const to prevent REASSIGN.
var PI = 3.14;
PI = 42;

// Solution.
// Can't use let since let will also allow reassignment
const PI = 3.14;
PI = 42;

//
