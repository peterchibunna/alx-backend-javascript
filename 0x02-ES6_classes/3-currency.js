export default class Currency {
  constructor(code, name) {
    this._name = name;
    this._code = code;
  }

  get name() {
    return this._name;
  }

  get code() {
    return this._code;
  }

  set name(val) {
    this._name = val;
  }

  set code(val) {
    this._code = val;
  }

  displayFullCurrency() {
    return `${this._name} (${this._code})`;
  }
}
