const eqArrays = require('./eqArrays');

const eqObjects = function(obj1, obj2) {
  let object1 = Object.keys(obj1);
  let object2 = Object.keys(obj2);

  if (object1.length !== object2.length) {
    return false;
  } else {
    for (let a of object1) {
      if (object1[a] !== object2[a]) {
        return false;
      } else {
        if (Array.isArray(obj1[a]) && Array.isArray(obj2[a])) {
          return eqArrays(obj1[a], obj2[a]);
        } else if (obj1[a] !== obj2[a]) {
          return false;
        }
      }
    }
    return true;
  }
};
