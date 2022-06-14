// FUNCTION IMPLEMENTATION
const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }

};

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

const without = function(source, itemsToRemove) {
  const result = [];
  for (let i = 0; i < source.length; i++) {
    if (!itemsToRemove.includes(source[i]) && !result.includes(source[i])) {
      result.push(source[i]);
    }
  }
  return result;
};


module.exports = without;
