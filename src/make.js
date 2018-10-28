module.exports = function make(...args) {
  const arr = [];
  const f = (...a) => {
    if (typeof a[0] !== 'function') {
      arr.push(...a);
      return f;
    }
    return arr.reduce(a[0]);
  };

  return f(...args);
};
