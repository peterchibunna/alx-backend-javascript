const sinon = require('sinon');
const Utils = require('./utils');
const { expect } = require('chai');
const sendPaymentRequestToApi = require('./4-payment');

describe('sendPaymentRequestToApi', () => {
  it('sendPaymentRequestToApi calls console.log with the right arguments', () => {
    const _spyer = sinon.spy(console);
    const _stub = sinon.stub(Utils, 'calculateNumber');

    _stub.returns(10);
    sendPaymentRequestToApi(100, 20);
    expect(_stub.calledWith('SUM', 100, 20)).to.be.true;
    expect(_stub.callCount).to.be.equal(1);
    expect(_spyer.log.calledWith('The total is: 10')).to.be.true;
    expect(_spyer.log.callCount).to.be.equal(1);
    _stub.restore();
    _spyer.log.restore();
  });
});
