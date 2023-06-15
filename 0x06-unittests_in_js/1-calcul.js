function calculateNumber(operation, a, b) {
  switch (operation) {
    case 'SUM':
      return Math.round(a) + Math.round(b);
    case 'SUBTRACT':
      return Math.round(a) - Math.round(b);
    case 'DIVIDE':
      if (Math.round(b) === 0) {
        return 'Error';
      } else {
        return Math.round(a) / Math.round(b);
      }
    default:
      return 0;
  }
}

module.exports = calculateNumber;
