const assertEqual = require('../assertEqual');

const tail = function(parameter) {
  let lastValue = parameter [-1];
  return lastValue;
};

// TEST CODE
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!

module.exports = tail