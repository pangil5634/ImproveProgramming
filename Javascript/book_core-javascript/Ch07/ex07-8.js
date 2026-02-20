// 예제 7-8. 클래스 상속 및 추상화 방법(1) - 인스턴스 생성 후 프로퍼티 제거
/*
  아래의 방법을 통해, 인스턴스를 제외한 프로토타입 체인 경로상에는 더는 구체적인 데이터가 남아있지 않게 된다.
*/

// [1] 클래스 상속 및 추상화 함수
var extendClass1 = function (SuperClass, SubClass, subMethods) {
  // 1-1. SubClass의 프로토타입 객체에 SuperClass의 인스턴스를 부여
  SubClass.prototype = new SuperClass();

  // 1-2. SubClass의 프로토타입 객체에서 SuperClass의 프로퍼티 제거
  for (var prop in SubClass.prototype) {
    if (SubClass.prototype.hasOwnProperty(prop)) {
      delete SubClass.prototype[prop];
    }
  }

  // 1-3. 서브클래스 메서드 추가
  if(subMethods) {
    for (var method in subMethods) {
      SubClass.prototype[method] = subMethods[method];
    }
  }

  // 1-4. 프로토타입 객체 동결
  Object.freeze(SubClass.prototype);

  // 1-5. SubClass의 생성자 함수를 반환
  return SubClass;
};

// [2] Rectangle 클래스 정의
var Rectangle = function (width, height) {
  this.width = width;
  this.height = height;
};

Rectangle.prototype.getArea = function () {
  return this.width * this.height;
};

// var Sqaure = extendClass1(Rectangle, function (width) {
//   Rectangle.call(this, width, width);
// });

// [3] Square 클래스 정의
var Sqaure = function(width) {
  Rectangle.call(this, width, width);
};

// [4] Bridge 클래스 정의
var Bridge = function () { };
Bridge.prototype = Rectangle.prototype;

// [5] Square 클래스의 프로토타입 객체에 Bridge의 인스턴스를 부여
Square.prototype = new Bridge();

// [6] Square 클래스의 생성자 함수를 Square로 설정
Square.prototype.constructor = Square;
