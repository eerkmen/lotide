const findKey = function(a, b) {
  let emptyArray = '';
  for (const i in a) {
    if (cb(a[i])) {
      emptyArray = i;
      return emptyArray;
    }
  }
  return undefined;
};
