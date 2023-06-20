const request = require('request');
const chai = require('chai');
const { expect } = chai;

describe('8-api', () => {
  const API_URL = 'http://localhost:7865';

  it('GET / returns correct response', (finished) => {
    request.get(`${API_URL}/`, (_err, res, body) => {
      expect(res.statusCode).to.be.equal(200);
      expect(body).to.be.equal('Welcome to the payment system');
      finished();
    });
  });
});
