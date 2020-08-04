class Animal {
  constructor(name, speak) {
    this._name = name;
    this._speak = speak;
  }

  get name() {
    return this._name;
  }

  set name(newName) {
    this._name = newName;
  }

  greet() {
    return `This is a ${this._name} and it says ${this._speak}`;
  }
}

module.exports = Animal;
