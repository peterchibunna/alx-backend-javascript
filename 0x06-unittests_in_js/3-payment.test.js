const sinon = require('sinon');
const chai = require("chai");
const Utils = require('./utils');
const expect = chai.expect;
const sendPaymentRequestToApi = require('./3-payment');

describe('sendPaymentRequestToApi', () => {
  it('sendPaymentRequestToApi calls the calculateNumber', () => {
    const spyer = sinon.spy(Utils);

    sendPaymentRequestToApi(100, 20);
    expect(spyer.calculateNumber.calledWith('SUM', 100, 20)).to.be.true;
    expect(spyer.calculateNumber.callCount).to.equal(1);
    spyer.calculateNumber.restore();
  });
});
