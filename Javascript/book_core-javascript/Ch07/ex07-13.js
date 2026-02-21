// 예제 7-13. 클래스 상속 및 추상화 방법 - 완성본(3) - Object.create 활용
/*
  앞의 방식은 모두 상속에는 성공했지만, SubClass 인스턴스의 constructor는 여전히 SuperClass를 가리키고 있다.
  엄밀히 얘기하면, SubClass 인스턴스에는 constructor가 없고, SubClass.prototype에도 없는 상태이다.

  따라서, SubClass.prototype.constructor가 원래의 SubClass를 바라보도록 해주면 된다. 
*/

// [1] 클래스 상속 및 추상화 함수
var extendClass3 = function (SuperClass, SubClass, subMethods) {
  // 1-1. SubClass의 프로토타입 객체에 SuperClass의 프로토타입 객체를 부여
  SubClass.prototype = Object.create(SuperClass.prototype);

  // 1-2. SubClass의 생성자 프로퍼티를 SubClass로 설정
  SubClass.prototype.constructor = SubClass;

  // 1-3. subMethods가 있으면 SubClass의 프로토타입 객체에 메서드를 추가
  if (subMethods) {
    for (var method in subMethods) {
      SubClass.prototype[method] = subMethods[method];
    }
  }

  // 1-4. SubClass의 프로토타입 객체를 동결
  Object.freeze(SubClass.prototype);

  // 1-5. SubClass 반환
  return SubClass;
}