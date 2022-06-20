const assertEqual = require('./assertEqual');

const countLetters = function(b) {
  if (typeof str !== 'string') {
    return console.log('Please input a string');
  }

  let end = {};
  for (const a of b) {
    if (!end[a]) {
      end[a] = 1;
    } else {
      end[a] += 1;
    }
  }
  return end;
};

module.exports = countLetters;


