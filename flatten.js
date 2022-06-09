const flatten = function(array) {

  const end = [];
  for (let i = 0; i < array.length; ++i) {
    let a = array[i];
    if (Array.isArray(a)) {
      for (let k = 0; k < a.length; ++k) {
        end.push(a[k]);
      }
    } else {
      end.push(a);
    }
  }
  return end;
};

module.exports = flatten;