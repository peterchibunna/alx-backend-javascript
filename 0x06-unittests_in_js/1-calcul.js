const calculateNumber = (operation, a, b) => {
  if (operation === 'SUM') {
    return Math.round(a) + Math.round(b);
  }
  if (operation === 'SUBTRACT') {
    return Math.round(a) - Math.round(b);
  }
  if (operation === 'DIVIDE') {
    return Math.round(b) === 0 ? 'Error' : Math.round(a) / Math.round(b);
  }
  return 0;
};

module.exports = calculateNumber;
