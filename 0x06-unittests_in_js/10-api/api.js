const express = require('express');
var bodyParser = require('body-parser');

const app = express();
// app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

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

app.get('/available_payments', (any, res) => {
  res.send({
    payment_methods: {
      credit_cards: true,
      paypal: false
    }
  });
});
app.post('/login', (req, res) => {
  if (req.body) {
    const {userName} = req.body;
    res.send(`Welcome ${userName}`);
  }
});

app.listen(PORT, () => {
  console.log(`API available on localhost port ${PORT}`);
});

module.exports = app;
