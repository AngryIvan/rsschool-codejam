/* global describe it */

const assert = require('assert');
const sumOfOther = require('./src/sumOfOther.js');
const make = require('./src/make.js');

describe('sum of other', () => {
  it('sum of other #1', () => {
    assert.deepEqual(sumOfOther([2, 3, 4, 1]), [8, 7, 6, 9]);
  });

  it('sum of other #2', () => {
    assert.deepEqual(sumOfOther([5, 10, 15, 20]), [45, 40, 35, 30]);
  });

  it('sum of other #3', () => {
    assert.deepEqual(sumOfOther([20, 15, 10, 5]), [30, 35, 40, 45]);
  });

  it('sum of other #4', () => {
    assert.deepEqual(sumOfOther([2, 4, 6, 8, 10]), [28, 26, 24, 22, 20]);
  });

  it('sum of other #5', () => {
    assert.deepEqual(sumOfOther([1, 1, 2, 2, 3, 3]), [11, 11, 10, 10, 9, 9]);
  });
});

describe('make', () => {
  const sum = (a, b) => a + b;
  const subtract = (a, b) => a - b;
  const multiply = (a, b) => a * b;
  const divide = (a, b) => a / b;
  it('make #1 add', () => {
    assert.deepEqual(make(15)(34, 21, 666)(41)(sum), 777);
  });

  it('make #2 subtract', () => {
    assert.deepEqual(make(40)(2)(8, 5)(subtract), 25);
  });

  it('make #3 multiply', () => {
    assert.deepEqual(make(5, 2)(10)(-2)(multiply), -200);
  });

  it('make #4 divide', () => {
    assert.deepEqual(make(500)(1, 1, 1, 1)(250)(2)(divide), 1);
  });

  it('make #5 divide by zero', () => {
    assert.deepEqual(make(500)(0)(divide), Infinity);
  });
});
