var Person = function (name) {
  this._name = name;
};
Person.prototype.getName = function () {
  return this._name;
};

var person = new Person("pangil");
console.log(person.__proto__.getName());
console.log(person.getName());
