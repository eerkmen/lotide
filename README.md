# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @eerkmen/lotide`

**Require it:**

`const _ = require('@eerkmen/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

  *assertEqual.js: Assert method.
  *head.js: Returns the 0 index of an array.
  *tail.js: Returns a new array and tests it for equality.
  *eqArrays.js: Takes in two arrays and returns true or false
  *assertArraysEqual.js: Takes in two arrays and console.log and appropriate message to the console.
  *without.js: Creates a new array, removing unwanted elements from the previous array.
  *flatten.js: Returns a 'flattened' version of the array.
  *middle.js: Takes in an array and returns the middle element of the given array.
  *countOnly.js: Return an object containing counts of everything that input object lists.
  *countLetters.js: Returns a string's count of each of the letters in that sentence.
  *letterPositions.js: Returns all the index in the string where each charater is found.
  *findKeyByValue.js: Returns the first key which contains the given value. 
  *eqObjects.js: Returns true or false, matches the two objects.
  *assertObjectsEqual.js: Console.log and takes in two objects
  *map.js: Creates a new array 
  *takeUntil.js: Until a truthy value returns collects elements.
  *findKey.js: Returns the first key for which the callback returns a truthy value.
