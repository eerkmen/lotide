const eqArrays = require('./eqArrays');
const assertArraysEqual = require('./assertArraysEqual');



const letterPositions = function(allItems) {
  const results = {};

  for (const item of allItems) {
    // inside the loop:
   
    if (results[item]) {
      results[item] += allItems[item];
    } else {
      results[item] = allItems[item];
    }
  }
  return results;
};

