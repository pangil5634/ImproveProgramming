var Constructor = function (name) {
  this.name = name;
};

Constructor.prototype.method1 = function () {};
Constructor.prototype.property1 = "Constructor Prototype Property";

var instance = new Constructor("instance");
console.dir(Constructor);
console.dir(instance);
