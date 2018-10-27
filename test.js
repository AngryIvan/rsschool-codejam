/* global describe it */

const assert = require('assert');
const sumOfOther = require('./src/sumOfOther.js');

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
