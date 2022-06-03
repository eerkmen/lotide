const assertEqual = require('./assertEqual');

const countOnly = function(allItems) {
  const results = {};

  for (const item of allItems) {
    // inside the loop:
   
    if (results[item]) {
      results[item] += 1;
    } else {
      results[item] = 1;
    }
  }
  return results;
}

const countLetters= "lighthouse in the house" ;
console.log(countOnly(countLetters))