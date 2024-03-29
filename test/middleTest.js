const assert = require('chai').assert;
const middle = require('../middle');

describe("#middle", () => {
  it("return [3] from [1, 2, 3, 4, 5]", () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5]), [3]);
  });

  it("return [4,5] from [1, 2, 3, 4, 5, 6, 7, 8, ]", () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5, 6, 7, 8]), [4,5]);
  });

});