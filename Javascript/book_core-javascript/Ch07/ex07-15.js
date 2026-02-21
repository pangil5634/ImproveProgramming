// 예제 7-15. ES5와 ES6의 클래스 문법 비교

var ES5 = function (name) {
  this.name = name;
}

ES5.staticMethod = function () {
  return this.name + ' staticMethod';
}

ES5.prototype.method = function () {
  return this.name + ' method';
}

var es5 = new ES5('es5');
console.log(es5.method()); // es5 method
console.log(ES5.staticMethod()); // es5 staticMethod


// ES6
class ES6 {
  constructor(name) {
    this.name = name;
  }

  static staticMethod() {
    return this.name + ' staticMethod';
  }

  method() {
    return this.name + ' method';
  }
}

var es6 = new ES6('es6');
console.log(es6.method()); // es6 method
console.log(ES6.staticMethod()); // es6 staticMethod