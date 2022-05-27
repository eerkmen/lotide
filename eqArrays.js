// FUNCTION IMPLEMENTATION
const assertEqual = require('./assertEqual');

const eqArrays = function(array1, array2) {
  if (array1.length !== array2.length) {
    return false
  } else {
    for (var i=0; i < array1.length; i++) {
      if (array1[i] != array2[i]) {
        return false
      }
    }
    return true
  }
}

// TEST CODE
eqArrays([1, 2, 3], [1, 2, 3]) // => true
eqArrays([1, 2, 3], [3, 2, 1]) // => false

eqArrays(["1", "2", "3"], ["1", "2", "3"]) // => true
eqArrays(["1", "2", "3"], ["1", "2", 3]) // => false

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS
module.exports = eqArrays