const assert = require("assert");
const calculateNumber = require('./0-calcul');

describe("calculateNumber", function () {
  it("checks 2 integers addition", function () {
    const a = 1, b = 2, c = 3;
    assert.equal(calculateNumber(a, b), c);
  });
  it("checks rh float [mid-point] and lh integer", function () {
    const a = 1, b = 2.5, c = 4;
    assert.equal(calculateNumber(a, b), c);
  });
  it("checks rh float [lower half] and lh integer", function () {
    const a = 1, b = 2.2, c = 3;
    assert.equal(calculateNumber(a, b), c);
  });
  it("checks rh float [upper half] and lh integer", function () {
    const a = 1, b = 2.8, c = 4;
    assert.equal(calculateNumber(a, b), c);
  });
  it("checks lh float [mid-point] and rh integer", function () {
    const b = 1, a = 2.5, c = 4;
    assert.equal(calculateNumber(a, b), c);
  });
  it("checks lh float [lower half] and rh integer", function () {
    const b = 1, a = 2.2, c = 3;
    assert.equal(calculateNumber(a, b), c);
  });
  it("checks lh float [upper half] and rh integer", function () {
    const b = 1, a = 2.8, c = 4;
    assert.equal(calculateNumber(a, b), c);
  });
  it("checks both floats [mid-point]", function () {
    const b = 2.5, a = 4.5, c = 8;
    assert.equal(calculateNumber(a, b), c);
  });
  it("checks both floats [1 mid-point and 1-upper-range]", function () {
    const b = 5.5, a = 4.8, c = 11;
    assert.equal(calculateNumber(a, b), c);
  });
  it("checks both floats [1 mid-point and 1-lower-range]", function () {
    const b = 5.2, a = 4.8, c = 10;
    assert.equal(calculateNumber(a, b), c);
  });
  it("checks both floats: 2 recurring decimal numbers #1", function () {
    const b = 5.333333333333, a = 4.999999999999, c = 10;
    assert.equal(calculateNumber(a, b), c);
  });
  it("checks both floats: 2 recurring decimal numbers #2", function () {
    const a = 5.996666666, b = 4.999999999999, c = 11;
    assert.equal(calculateNumber(a, b), c);
  });
  it("checks both floats: 1 negative recurring decimal numbers", function () {
    const a = -5.996666666, b = 4.999999999999, c = -1;
    assert.equal(calculateNumber(a, b), c);
  });
  it("checks both floats: 2 negative recurring decimal numbers", function () {
    const a = -5.996666666, b = -4.999999999999, c = -11;
    assert.equal(calculateNumber(a, b), c);
  });
});
