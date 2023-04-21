export default class HolbertonCourse {
  constructor(name, length, students) {
    if (typeof name !== 'string') {
      throw new TypeError('Name must be a string');
    }
    if (typeof length !== 'number') {
      throw new TypeError('Length must be a number');
    }
    if (!(students instanceof Array)) {
      throw new TypeError('Students must be array of strings');
    }
    this._name = name;
    this._length = length;
    this._students = students;
  }

  get name() {
    return this._name;
  }

  get length() {
    return this._length;
  }

  get students() {
    return this._students;
  }

  set name(val) {
    if (typeof val !== 'string') {
      throw new TypeError('Name must be a string');
    }
    this._name = val;
  }

  set length(val) {
    if (typeof val !== 'number') {
      throw new TypeError('Length must be a string');
    }
    this._length = val;
  }

  set students(val) {
    if (val instanceof Array) {
      if (!val.every((student) => typeof student === 'string')) {
        throw new TypeError('Students must be an array of strings');
      }
      this._students = val;
    } else {
      throw new TypeError('Students must be an array of strings');
    }
  }
}
