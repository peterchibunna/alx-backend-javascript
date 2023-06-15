const assert = require("assert");
const calculateNumber = require('./1-calcul');

describe("calculateNumber", function () {
  describe("Operation: SUM", function () {
    it(`between 2 integers`, function () {
      const a = 1, b = 2;
      assert.equal(calculateNumber('SUM', a, b), 3);
    });
    it(`between rh float [mid-point] and lh integer`, function () {
      const a = 1, b = 2.5;
      assert.equal(calculateNumber('SUM', a, b), 4);
    });
    it(`between rh float [lower half] and lh integer`, function () {
      const a = 1, b = 2.4;
      assert.equal(calculateNumber('SUM', a, b), 3);
    });
    it(`between rh float [upper half] and lh integer`, function () {
      const a = 1, b = 2.8;
      assert.equal(calculateNumber('SUM', a, b), 4);
    });
    it(`between lh float [mid-point] and rh integer`, function () {
      const b = 1, a = 2.5;
      assert.equal(calculateNumber('SUM', a, b), 4);
    });
    it(`between lh float [lower half] and rh integer`, function () {
      const b = 1, a = 2.2;
      assert.equal(calculateNumber('SUM', a, b), 3);
    });
    it(`between lh float [upper half] and rh integer`, function () {
      const b = 1, a = 2.8;
      assert.equal(calculateNumber('SUM', a, b), 4);
    });
    it(`between both floats [mid-point]`, function () {
      const b = 2.5, a = 4.5;
      assert.equal(calculateNumber('SUM', a, b), 8);
    });
    it(`between both floats [1 mid-point and 1-upper-range]`, function () {
      const b = 5.5, a = 4.8;
      assert.equal(calculateNumber('SUM', a, b), 11);
    });
    it(`between both floats [1 mid-point and 1-lower-range]`, function () {
      const b = 5.2, a = 4.8;
      assert.equal(calculateNumber('SUM', a, b), 10);
    });
    it(`between both floats: 2 recurring decimal numbers #1`, function () {
      const b = 5.333333333333, a = 4.999999999999;
      assert.equal(calculateNumber('SUM', a, b), 10);
    });
    it(`between both floats: 2 recurring decimal numbers #2`, function () {
      const a = 5.996666666, b = 4.999999999999;
      assert.equal(calculateNumber('SUM', a, b), 11);
    });
    it(`between both floats: 1 negative recurring decimal numbers`, function () {
      const a = -5.996666666, b = 4.999999999999;
      assert.equal(calculateNumber('SUM', a, b), -1);
    });
    it(`between both floats: 2 negative recurring decimal numbers`, function () {
      const a = -5.996666666, b = -4.999999999999;
      assert.equal(calculateNumber('SUM', a, b), -11);
    });
    it(`between zero on rhs`, function () {
      const a = 5.996666666, b = 0;
      assert.equal(calculateNumber('SUM', a, b), 6);
    });
    it(`between zero on lhs`, function () {
      const b = 5.3467, a = 0;
      assert.equal(calculateNumber('SUM', a, b), 5);
    });
    it(`between all zeroes`, function () {
      const a = 0, b = 0;
      assert.equal(calculateNumber('SUM', a, b), 0);
    });
    it('negative number and 0', () => {
      const a = -5.0, b = 0;
      assert.equal(calculateNumber('SUM', a, b), -5);
    });

    it('equal positive numbers', () => {
      const a = 5.0, b = 5.0;
      assert.equal(calculateNumber('SUM', a, b), 10);
    });

    it('equal positive numbers (alternate)', () => {
      const a = 5.2, b = 8.7;
      assert.equal(calculateNumber('SUM', a, b), 14);
    });

    it('equal negative numbers', () => {
      const a = -2.0, b = -2.0;
      assert.equal(calculateNumber('SUM', a, b), -4);
    });

    it('equal negative numbers (alternate)', () => {
      const a = -2.2, b = -1.7;
      assert.equal(calculateNumber('SUM', a, b), -4);
    });

    it('negative and positive numbers', () => {
      const a = -2.0, b = 2.0;
      assert.equal(calculateNumber('SUM', a, b), 0);
    });

    it('positive and negative numbers', () => {
      const b = -2.0, a = 2.0;
      assert.equal(calculateNumber('SUM', a, b), 0);
    });

    it('0 and 0', () => {
      assert.equal(calculateNumber('SUM', 0.0, 0.0), 0);
    });
  });

  describe("Operation: SUBTRACT", function () {
    it(`between 2 integers`, function () {
      const a = 1, b = 2;
      assert.equal(calculateNumber('SUBTRACT', a, b), -1);
    });
    it(`between rh float [mid-point] and lh integer`, function () {
      const a = 1, b = 2.5;
      assert.equal(calculateNumber('SUBTRACT', a, b), -2);
    });
    it(`between rh float [lower half] and lh integer`, function () {
      const a = 1, b = 2.4;
      assert.equal(calculateNumber('SUBTRACT', a, b), -1);
    });
    it(`between rh float [upper half] and lh integer`, function () {
      const a = 1, b = 2.8;
      assert.equal(calculateNumber('SUBTRACT', a, b), -2);
    });
    it(`between lh float [mid-point] and rh integer`, function () {
      const b = 1, a = 2.5;
      assert.equal(calculateNumber('SUBTRACT', a, b), 2);
    });
    it(`between lh float [lower half] and rh integer`, function () {
      const b = 1, a = 2.2;
      assert.equal(calculateNumber('SUBTRACT', a, b), 1);
    });
    it(`between lh float [upper half] and rh integer`, function () {
      const b = 1, a = 2.8;
      assert.equal(calculateNumber('SUBTRACT', a, b), 2);
    });
    it(`between both floats [mid-point]`, function () {
      const b = 2.5, a = 4.5;
      assert.equal(calculateNumber('SUBTRACT', a, b), 2);
    });
    it(`between both floats [1 mid-point and 1-upper-range]`, function () {
      const b = 5.5, a = 4.8;
      assert.equal(calculateNumber('SUBTRACT', a, b), -1);
    });
    it(`between both floats [1 mid-point and 1-lower-range]`, function () {
      const b = 5.2, a = 4.8;
      assert.equal(calculateNumber('SUBTRACT', a, b), 0);
    });
    it(`between both floats: 2 recurring decimal numbers #1`, function () {
      const b = 5.333333333333, a = 4.999999999999;
      assert.equal(calculateNumber('SUBTRACT', a, b), 0);
    });
    it(`between both floats: 2 recurring decimal numbers #2`, function () {
      const a = 5.996666666, b = 4.999999999999;
      assert.equal(calculateNumber('SUBTRACT', a, b), 1);
    });
    it(`between both floats: 1 negative recurring decimal numbers`, function () {
      const a = -5.996666666, b = 4.999999999999;
      assert.equal(calculateNumber('SUBTRACT', a, b), -11);
    });
    it(`between both floats: 2 negative recurring decimal numbers`, function () {
      const a = -5.996666666, b = -4.999999999999;
      assert.equal(calculateNumber('SUBTRACT', a, b), -1);
    });
    it(`between zero on rhs`, function () {
      const a = 5.996666666, b = 0;
      assert.equal(calculateNumber('SUBTRACT', a, b), 6);
    });
    it(`between zero on lhs`, function () {
      const b = 5.3467, a = 0;
      assert.equal(calculateNumber('SUBTRACT', a, b), -5);
    });
    it(`between all zeroes`, function () {
      const a = 0, b = 0;
      assert.equal(calculateNumber('SUBTRACT', a, b), 0);
    });
    it('negative number and 0', () => {
      const a = -5.0, b = 0;
      assert.equal(calculateNumber('SUBTRACT', a, b), -5);
    });

    it('equal positive numbers', () => {
      const a = 5.0, b = 5.0;
      assert.equal(calculateNumber('SUBTRACT', a, b), 0);
    });

    it('equal positive numbers (alternate)', () => {
      const a = 5.2, b = 8.7;
      assert.equal(calculateNumber('SUBTRACT', a, b), -4);
    });

    it('equal negative numbers', () => {
      const a = -2.0, b = -2.0;
      assert.equal(calculateNumber('SUBTRACT', a, b), 0);
    });

    it('equal negative numbers (alternate)', () => {
      const a = -2.2, b = -1.7;
      assert.equal(calculateNumber('SUBTRACT', a, b), 0);
    });

    it('negative and positive numbers', () => {
      const a = -2.0, b = 2.0;
      assert.equal(calculateNumber('SUBTRACT', a, b), -4);
    });

    it('positive and negative numbers', () => {
      const b = -2.0, a = 2.0;
      assert.equal(calculateNumber('SUBTRACT', a, b), 4);
    });

    it('0 and 0', () => {
      assert.equal(calculateNumber('SUBTRACT', 0.0, 0.0), 0);
    });
  });

  describe("Operation: DIVIDE", function () {
    it(`between 2 integers`, function () {
      const a = 1, b = 2;
      assert.equal(calculateNumber('DIVIDE', a, b), 0.5);
    });
    it(`between rh float [mid-point] and lh integer`, function () {
      const a = 1, b = 2.5;
      assert.equal(calculateNumber('DIVIDE', a, b), 0.3333333333333333);
    });
    it(`between rh float [lower half] and lh integer`, function () {
      const a = 1, b = 2.4;
      assert.equal(calculateNumber('DIVIDE', a, b), 0.5);
    });
    it(`between rh float [upper half] and lh integer`, function () {
      const a = 1, b = 2.8;
      assert.equal(calculateNumber('DIVIDE', a, b), 0.3333333333333333);
    });
    it(`between lh float [mid-point] and rh integer`, function () {
      const b = 1, a = 2.5;
      assert.equal(calculateNumber('DIVIDE', a, b), 3);
    });
    it(`between lh float [lower half] and rh integer`, function () {
      const b = 1, a = 2.2;
      assert.equal(calculateNumber('DIVIDE', a, b), 2);
    });
    it(`between lh float [upper half] and rh integer`, function () {
      const b = 1, a = 2.8;
      assert.equal(calculateNumber('DIVIDE', a, b), 3);
    });
    it(`between both floats [mid-point]`, function () {
      const b = 2.5, a = 4.5;
      assert.equal(calculateNumber('DIVIDE', a, b), 1.6666666666666667);
    });
    // it(`between both floats [1 mid-point and 1-upper-range]`, function () {
    //   const b = 5.5, a = 4.8;
    //   assert.equal(calculateNumber('DIVIDE', a, b), -1);
    // });
    // it(`between both floats [1 mid-point and 1-lower-range]`, function () {
    //   const b = 5.2, a = 4.8;
    //   assert.equal(calculateNumber('DIVIDE', a, b), 0);
    // });
    // it(`between both floats: 2 recurring decimal numbers #1`, function () {
    //   const b = 5.333333333333, a = 4.999999999999;
    //   assert.equal(calculateNumber('DIVIDE', a, b), 0);
    // });
    // it(`between both floats: 2 recurring decimal numbers #2`, function () {
    //   const a = 5.996666666, b = 4.999999999999;
    //   assert.equal(calculateNumber('DIVIDE', a, b), 1);
    // });
    // it(`between both floats: 1 negative recurring decimal numbers`, function () {
    //   const a = -5.996666666, b = 4.999999999999;
    //   assert.equal(calculateNumber('DIVIDE', a, b), -11);
    // });
    // it(`between both floats: 2 negative recurring decimal numbers`, function () {
    //   const a = -5.996666666, b = -4.999999999999;
    //   assert.equal(calculateNumber('DIVIDE', a, b), -1);
    // });
    // it(`between zero on rhs`, function () {
    //   const a = 5.996666666, b = 0;
    //   assert.equal(calculateNumber('DIVIDE', a, b), 6);
    // });
    // it(`between zero on lhs`, function () {
    //   const b = 5.3467, a = 0;
    //   assert.equal(calculateNumber('DIVIDE', a, b), -5);
    // });

    it('negative number and 0', () => {
      const a = -5.0, b = 0;
      assert.equal(calculateNumber('DIVIDE', a, b), 'Error');
    });
    //
    // it('equal positive numbers', () => {
    //   const a = 5.0, b = 5.0;
    //   assert.equal(calculateNumber('DIVIDE', a, b), 0);
    // });
    //
    // it('equal positive numbers (alternate)', () => {
    //   const a = 5.2, b = 8.7;
    //   assert.equal(calculateNumber('DIVIDE', a, b), -4);
    // });
    //
    it('equal negative numbers', () => {
      const a = -2.0, b = -2.0;
      assert.equal(calculateNumber('DIVIDE', a, b), 1);
    });
    //
    it('equal negative numbers (alternate)', () => {
      const a = -2.2, b = -1.7;
      assert.equal(calculateNumber('DIVIDE', a, b), 1);
    });
    //
    it('negative and positive numbers', () => {
      const a = -2.0, b = 2.0;
      assert.equal(calculateNumber('DIVIDE', a, b), -1);
    });


    it('0 and 0', () => {
      assert.equal(calculateNumber('DIVIDE', 0.0, 0.0), 'Error');
    });
  });
});
