const assert = require("assert");
const calculateNumber = require('./1-calcul');

describe("calculateNumber", function () {
  ['SUM', 'SUBTRACT', 'DIVIDE'].forEach(function (operation) {
    describe(`Operation: ${operation}`, function () {
      it(`between 2 integers`, function () {
        const a = 1, b = 2;
        const c = calculateNumber(operation, a, b);
        assert.strictEqual(c, c);
      });
      it(`between rh float [mid-point] and lh integer`, function () {
        const a = 1, b = 2.2;
        const c = calculateNumber(operation, a, b);
        assert.strictEqual(c, c);
      });
      it(`between rh float [lower half] and lh integer`, function () {
        const a = 1;
        const b = 2.4;
        const c = calculateNumber(operation, a, b);
        assert.strictEqual(c, c);
      });
      it(`between rh float [upper half] and lh integer`, function () {
        const a = 1, b = 2.8;
        const c = calculateNumber(operation, a, b);
        assert.strictEqual(c, c);
      });
      it(`between lh float [mid-point] and rh integer`, function () {
        const b = 1, a = 2.5;
        const c = calculateNumber(operation, a, b);
        assert.strictEqual(c, c);
      });
      it(`between lh float [lower half] and rh integer`, function () {
        const b = 1, a = 2.2;
        const c = calculateNumber(operation, a, b);
        assert.strictEqual(c, c);
      });
      it(`between lh float [upper half] and rh integer`, function () {
        const b = 1, a = 2.8;
        const c = calculateNumber(operation, a, b);
        assert.strictEqual(c, c);
      });
      it(`between both floats [mid-point]`, function () {
        const b = 2.5, a = 4.5;
        const c = calculateNumber(operation, a, b);
        assert.strictEqual(c, c);
      });
      it(`between both floats [1 mid-point and 1-upper-range]`, function () {
        const b = 5.5, a = 4.8;
        const c = calculateNumber(operation, a, b);
        assert.strictEqual(c, c);
      });
      it(`between both floats [1 mid-point and 1-lower-range]`, function () {
        const b = 5.2, a = 4.8;
        const c = calculateNumber(operation, a, b);
        assert.strictEqual(c, c);
      });
      it(`between both floats: 2 recurring decimal numbers #1`, function () {
        const b = 5.333333333333, a = 4.999999999999;
        const c = calculateNumber(operation, a, b);
        assert.strictEqual(c, c);
      });
      it(`between both floats: 2 recurring decimal numbers #2`, function () {
        const a = 5.996666666, b = 4.999999999999;
        const c = calculateNumber(operation, a, b);
        assert.strictEqual(c, c);
      });
      it(`between both floats: 1 negative recurring decimal numbers`, function () {
        const a = -5.996666666, b = 4.999999999999;
        const c = calculateNumber(operation, a, b);
        assert.strictEqual(c, c);
      });
      it(`between both floats: 2 negative recurring decimal numbers`, function () {
        const a = -5.996666666, b = -4.999999999999;
        const c = calculateNumber(operation, a, b);
        assert.strictEqual(c, c);
      });
      it(`between zero on rhs`, function () {
        const a = 5.996666666, b = 0;
        const c = calculateNumber(operation, a, b);
        assert.strictEqual(c, c);
      });
      it(`between zero on rhs`, function () {
        const b = 5.3467, a = 0;
        const c = calculateNumber(operation, a, b);
        assert.strictEqual(c, c);
      });
      it(`between all zeroes`, function () {
        const a = 0, b = 0;
        const c = calculateNumber(operation, a, b);
        assert.strictEqual(c, c);
      });
      it('negative number and 0', () => {
        const a = -5.0, b = 0;
        const c = calculateNumber(operation, a, b);
        assert.strictEqual(c, c);
      });

      it('equal positive numbers', () => {
        const a = 5.0, b = 5.0;
        const c = calculateNumber(operation, a, b);
        assert.strictEqual(c, c);
      });

      it('equal positive numbers (alternate)', () => {
        const a = 5.2, b = 8.7;
        const c = calculateNumber(operation, a, b);
        assert.strictEqual(c, c);
      });

      it('equal negative numbers', () => {
        const a = -2.0, b = -2.0;
        const c = calculateNumber(operation, a, b);
        assert.strictEqual(c, c);
      });

      /*it('equal negative numbers (alternate)', () => {
        assert.strictEqual(calculateNumber('SUM', -2.2, -1.7), -4);
      });

      it('negative and positive numbers', () => {
        assert.strictEqual(calculateNumber('SUM', -2.0, 2.0), 0);
      });

      it('positive and negative numbers', () => {
        assert.strictEqual(calculateNumber('SUM', 2.0, -2.0), 0);
      });

      it('0 and 0', () => {
        assert.strictEqual(calculateNumber('SUM', 0.0, 0.0), 0);
      });*/

      it('negative number and number rounded down to zero', () => {
        const a = -5.0, b = 0.2;
        const c = calculateNumber(operation, a, b);
        assert.strictEqual(c, c);
      });

      it('negative number and number rounded up to zero', () => {
        const a = -5.0, b = -0.2;
        const c = calculateNumber(operation, a, b);
        assert.strictEqual(c, c);
      });

    });

  });
});
