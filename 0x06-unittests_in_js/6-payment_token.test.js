const chai = require('chai');
const expect = chai.expect;
const getPaymentTokenFromAPI = require('./6-payment_token');

describe('getPaymentTokenFromAPI', () => {
  it('where success is true', (finished) => {
    getPaymentTokenFromAPI(true).then((res) => {
      // must use deep equal assertion to test object equality
      expect(res).to.deep.equal({data: 'Successful response from the API'});
      finished();
    });
  });
});
