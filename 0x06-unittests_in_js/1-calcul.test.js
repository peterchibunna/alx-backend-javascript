const assert = require("assert");
const calculateNumber = require('./1-calcul');

describe("calculateNumber", function () {
  ['SUM', 'SUBTRACT', 'DIVIDE'].forEach(function (operation) {
    describe(`Operation: ${operation}`, function () {
      it(`between 2 integers`, function () {
        const a = 1, b = 2;
        const c = calculateNumber(operation, a, b);
        assert.equal(c, c);
      });
      it(`between rh float [mid-point] and lh integer`, function () {
        const a = 1, b = 2.2;
        const c = calculateNumber(operation, a, b);
        assert.equal(c, c);
      });
      it(`between rh float [lower half] and lh integer`, function () {
        const a = 1;
        const b = 2.4;
        const c = calculateNumber(operation, a, b);
        assert.equal(c, c);
      });
      it(`between rh float [upper half] and lh integer`, function () {
        const a = 1, b = 2.8;
        const c = calculateNumber(operation, a, b);
        assert.equal(c, c);
      });
      it(`between lh float [mid-point] and rh integer`, function () {
        const b = 1, a = 2.5;
        const c = calculateNumber(operation, a, b);
        assert.equal(c, c);
      });
      it(`between lh float [lower half] and rh integer`, function () {
        const b = 1, a = 2.2;
        const c = calculateNumber(operation, a, b);
        assert.equal(c, c);
      });
      it(`between lh float [upper half] and rh integer`, function () {
        const b = 1, a = 2.8;
        const c = calculateNumber(operation, a, b);
        assert.equal(c, c);
      });
      it(`between both floats [mid-point]`, function () {
        const b = 2.5, a = 4.5;
        const c = calculateNumber(operation, a, b);
        assert.equal(c, c);
      });
      it(`between both floats [1 mid-point and 1-upper-range]`, function () {
        const b = 5.5, a = 4.8;
        const c = calculateNumber(operation, a, b);
        assert.equal(c, c);
      });
      it(`between both floats [1 mid-point and 1-lower-range]`, function () {
        const b = 5.2, a = 4.8;
        const c = calculateNumber(operation, a, b);
        assert.equal(c, c);
      });
      it(`between both floats: 2 recurring decimal numbers #1`, function () {
        const b = 5.333333333333, a = 4.999999999999;
        const c = calculateNumber(operation, a, b);
        assert.equal(c, c);
      });
      it(`between both floats: 2 recurring decimal numbers #2`, function () {
        const a = 5.996666666, b = 4.999999999999;
        const c = calculateNumber(operation, a, b);
        assert.equal(c, c);
      });
      it(`between both floats: 1 negative recurring decimal numbers`, function () {
        const a = -5.996666666, b = 4.999999999999;
        const c = calculateNumber(operation, a, b);
        assert.equal(c, c);
      });
      it(`between both floats: 2 negative recurring decimal numbers`, function () {
        const a = -5.996666666, b = -4.999999999999;
        const c = calculateNumber(operation, a, b);
        assert.equal(c, c);
      });
      it(`between zero on rhs`, function () {
        const a = 5.996666666, b = 0;
        const c = calculateNumber(operation, a, b);
        assert.equal(c, c);
      });
      it(`between zero on rhs`, function () {
        const b = 5.3467, a = 0;
        const c = calculateNumber(operation, a, b);
        assert.equal(c, c);
      });
      it(`between all zeroes`, function () {
        const a = 0, b = 0;
        const c = calculateNumber(operation, a, b);
        assert.equal(c, c);
      });
    });

  });
});
