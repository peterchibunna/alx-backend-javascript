const sinon = require('sinon');
const chai = require('chai');
const expect = chai.expect;
const sendPaymentRequestToApi = require('./5-payment');

describe('sendPaymentRequestToApi', () => {
  let _spy;

  beforeEach(() => {
    if (!_spy) {
      _spy = sinon.spy(console);
    }
  });

  afterEach(() => {
    _spy.log.resetHistory();
  });

  it('sendPaymentRequestToApi(100, 20) outputs "The total is: 120"', () => {
    sendPaymentRequestToApi(100, 20);
    expect(_spy.log.calledWith('The total is: 120')).to.be.true;
    expect(_spy.log.calledOnce).to.be.true;
  });

  it('sendPaymentRequestToApi(10, 10) outputs "The total is: 20"', () => {
    sendPaymentRequestToApi(10, 10);
    expect(_spy.log.calledWith('The total is: 20')).to.be.true;
    expect(_spy.log.calledOnce).to.be.true;
  });
});
