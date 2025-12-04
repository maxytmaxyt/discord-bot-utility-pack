module.exports = function errorHandler(fn) {
  return async (...args) => {
    try {
      return [null, await fn(...args)];
    } catch (err) {
      return [err, null];
    }
  };
};
