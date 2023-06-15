function calculateNumber(operation, a, b) {
  switch (operation) {
    case 'SUM':
      return Math.round(a) + Math.round(b);
    case 'SUBTRACT':
      return Math.round(a) - Math.round(b);
    case 'DIVIDE':
      if (b === 0){
        return 'Error';
      }
      return Math.round(a) / Math.round(b);
  }

}

module.exports = calculateNumber;
