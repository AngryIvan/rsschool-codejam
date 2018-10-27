/* eslint-disable no-return-assign */
/* eslint-disable no-param-reassign */
module.exports = function sumOfOther(arr) {
  const sum = arr.reduce((acc, curr) => acc += curr);
  return arr.map(item => sum - item);
};
