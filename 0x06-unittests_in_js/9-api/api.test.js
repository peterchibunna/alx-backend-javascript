const request = require('request');
const chai = require('chai');
const {expect} = chai;

describe('8-api', () => {
  const API_URL = 'http://localhost:7865';

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
});
