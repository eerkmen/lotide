const assertArraysEqual = require('./assertArraysEqual');
const assertEqual = require('./assertEqual');
const assertObjectsEqual = require('./assertObjectsEqual');
const countLetters = require('./countLetters');
const countOnly = require('./countOnly');
const eqArrays = require('./eqArrays');
const eqObjects = require('./eqObjects');
const findKey = require("./findKey");
const findKeyByValue = require('./findKeyByValue');
const flatten = require('./flatten');
const head = require('./head');
const letterPositions = require('./letterPositions');
const map = require('./map');
const middle = require('./middle');
const tail = require('./tail');
const takeUntil = require('./takeUntil');
const without = require('./without');



module.exports = {
  assertObjectsEqual: assertObjectsEqual,
  assertArraysEqual: assertArraysEqual,
  assertEqual: assertEqual,
  eqObjects: eqObjects,
  eqArrays: eqArrays,
  head: head,
  tail: tail,
  middle: middle,
  without: without,
  takeUntil: takeUntil,
  map: map,
  letterPositions: letterPositions,
  flatten: flatten,
  findKey: findKey,
  findKeyByValue: findKeyByValue,
  countOnly: countOnly,
  countLetters: countLetters,
};