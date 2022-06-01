const eqArrays = require('./eqArrays');

const eqObjects = function(obj1, obj2) {
  let object1 = Object.keys(obj1);
  let object2 = Object.keys(obj2);

  if (object1.length !== object2.length) {
    return false;
  } else {
    for (let a of object1) {
     
    }
    return true;
  }
};
