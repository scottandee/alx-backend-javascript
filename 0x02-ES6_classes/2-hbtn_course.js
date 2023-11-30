export default class HolbertonCourse {
  constructor(name, length, students) {
    // validation for instance attributes
    if (typeof name !== 'string') {
      throw new TypeError('Name must be a string');
    }
    if (typeof length !== 'number') {
      throw new TypeError('Length must be a number');
    }
    if (!Array.isArray(students) && !students.forEach((stu) => typeof stu === 'string')) {
      throw new TypeError('Students must be an array of strings');
    }
    this._name = name;
    this._length = length;
    this._students = students;
  }

  // getter and setter for name attribute
  get name() {
    return this._name;
  }

  set name(name) {
    if (typeof name !== 'string') {
      throw new TypeError('Name must be a string');
    }
    this._name = name;
  }

  // getter and setter for length attribute
  get length() {
    return this.length;
  }

  set length(length) {
    if (typeof length !== 'number') {
      throw new TypeError('Length must be a number');
    }
    this._length = length;
  }

  // getter and setter for students attribute
  get students() {
    return this._students;
  }

  set students(students) {
    if (!Array.isArray(students) && !students.forEach((stu) => typeof stu === 'string')) {
      throw new TypeError('Students must be an array of strings');
    }
    this._students = students;
  }
}
