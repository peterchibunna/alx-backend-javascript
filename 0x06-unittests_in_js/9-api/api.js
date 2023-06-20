const express = require('express');

const app = express();
const PORT = 7865;

app.get('/', (any, res) => {
  res.send('Welcome to the payment system');
});

app.get('/cart/:id', (req, res) => {
  const {id} = req.params;
  const cartId = Number(id);
  if (!isNaN(cartId)) {
    res.send(`Payment methods for cart ${cartId}`);
  } else {
    res.status(404).send('Not found');
  }
});

app.listen(PORT, () => {
  console.log(`API available on localhost port ${PORT}`);
});

module.exports = app;
