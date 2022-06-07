const findKeyByValue = function(object, value) {

  let endResult = '';
  for (let a in object) {
    if (value === object[a]) {
      endResult = a;
    }
  }
  return endResult;
};

module.exports = findKeyByValue;