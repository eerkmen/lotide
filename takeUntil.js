const takeUntil = function(a, b) {
  const end = [];
  for (let i of a) {
    if (!callback(i)) {
      break;
    } else {
      final.push(i);
    }
  }
  return end;
};

module.exports = takeUntil;