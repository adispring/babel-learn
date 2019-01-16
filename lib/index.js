"use strict";

var square = function square(n) {
  return n * n;
};
console.log(square(2));

function addAll() {
  return Array.from(arguments).reduce(function (a, b) {
    return a + b;
  });
}

var all = addAll(1, 2, 3);
console.log(all);