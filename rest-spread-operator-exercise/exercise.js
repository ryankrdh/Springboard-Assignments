'use strict';

// 1. Refactor the following function:
function filterOutOdds() {
  var nums = Array.prototype.slice.call(arguments);
  return nums.filter(function (num) {
    return num % 2 === 0;
  });
}

// Refactor
