const eqArrays = require('../eqArrays');
const assertArraysEqual = require('../assertArraysEqual');


// ACTUAL FUNCTION
const middle = function(arr) {
  if (arr.length < 3){
    return value = [];
  } else if (arr.length % 2 === 0) {
    let theMiddleFloor = (arr.length / 2) ;
    let theMiddleCeil = (arr.length / 2) + 1;
    let value = [theMiddleFloor, theMiddleCeil];

    return value;
  } else if (arr.length % 2 ===1) {
    let middle = Math.floor(arr.length / 2);
    let value = arr[middle]
    return value
  }
  
}

console.log(middle([1, 2, 3, 4, 5, 6])) // => []
middle([1, 2]) // => []
module.exports = middle