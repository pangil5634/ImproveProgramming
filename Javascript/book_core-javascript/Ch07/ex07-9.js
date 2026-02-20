// 예제 7-9. 클래스 상속 및 추상화 방법(2) - 빈 함수를 활용

// [1] 클래스 상속 및 추상화 함수
var extendClass2 = (function () {

  // 1-1. Bridge 클래스 정의
  var Bridge = function () { };

  // 1-2. Bridge 클래스의 프로토타입 객체에 SuperClass의 프로토타입 객체를 부여 (즉시 실행 함수)
  return function (SuperClass, SubClass, subMethods) {

    // 1-2-1. Bridge 클래스의 프로토타입 객체에 SuperClass의 프로토타입 객체를 부여
    Bridge.prototype = SuperClass.prototype;

    // 1-2-2. SubClass의 프로토타입 객체에 Bridge 클래스의 인스턴스를 부여 (클로저 활용)
    SubClass.prototype = new Bridge();

    // 1-2-3. subMethods가 있으면 SubClass의 프로토타입 객체에 메서드를 추가
    if (subMethods) {
      for (var method in subMethods) {
        SubClass.prototype[method] = subMethods[method];
      }
    }

    // 1-2-4. SubClass의 프로토타입 객체를 동결
    Object.freeze(SubClass.prototype);

    // 1-2-5. SubClass 반환
    return SubClass;
  }
});