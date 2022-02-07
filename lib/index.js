"use strict";

require("core-js/modules/es.array.reduce.js");

const square = n => n * n;

console.log(square(2));

function addAll() {
  return Array.from(arguments).reduce(function (a, b) {
    return a + b;
  });
}

const all = addAll(1, 2, 3);
console.log(all);