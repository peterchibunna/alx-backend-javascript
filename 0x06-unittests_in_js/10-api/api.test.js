const request = require('request');
const chai = require('chai');
const {expect} = chai;

const API_URL = 'http://localhost:7865';

describe('8-api', () => {
  it('GET / returns correct response', (finished) => {
    request.get(`${API_URL}/`, (_err, res, body) => {
      expect(res.statusCode).to.be.equal(200);
      expect(body).to.be.equal('Welcome to the payment system');
      finished();
    });
  });
  it('cart page with a number', (finished) => {
    request.get(`${API_URL}/cart/12`, (_err, res, body) => {
      expect(res.statusCode).to.be.equal(200);
      expect(body).to.be.equal('Payment methods for cart 12');
      finished();
    });
  });
  it('cart page with a non-number', (finished) => {
    request.get(`${API_URL}/cart/pinball`, (_err, res, body) => {
      expect(res.statusCode).to.be.equal(404);
      expect(body).to.be.equal('Not found');
      finished();
    });
  });
  it('cart page with no param', (finished) => {
    request.get(`${API_URL}/cart`, (_err, res, body) => {
      expect(res.statusCode).to.be.equal(404);
      finished();
    });
  });
  it('login', (finished) => {
    request.post(`${API_URL}/login`, {json: {"userName": "peter"}}, (_err, res, body) => {
      expect(res.statusCode).to.be.equal(200);
      expect(body).to.be.equal('Welcome peter');
      finished();
    });
  });
  it('available_payments', (finished) => {
    request.get(`${API_URL}/available_payments`, (_err, res, body) => {
      expect(res.statusCode).to.be.equal(200);
      expect(JSON.parse(body)).to.be.deep.equal({
        payment_methods: {
          credit_cards: true,
          paypal: false
        }
      });
      finished();
    });
  });
});
