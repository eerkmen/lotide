const eqObjects = require('./eqObjects');

const assertObjectsEqual = function(a, b) {
  const inspect = require('util').inspect;
  if (!eqObjects(a, b)) {
    return console.log(
      `🛑🛑🛑 Assertion Failed: ${inspect(a)} !== ${inspect(b)}`
    );
  }
  return console.log(
    `🟢🟢🟢 Asstertion Passed: ${inspect(a)} === ${inspect(b)}`
  );
};

module.exports = assertObjectsEqual;