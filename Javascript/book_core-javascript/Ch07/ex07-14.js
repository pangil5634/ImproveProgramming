// 예제 7-14. 상위 클래스 접근 수단인 super 메서드 추가

// [1] 클래스 상속 및 추상화 함수
var extendClass = function (SuperClass, SubClass, subMethods) {
  // 1-1. SubClass의 프로토타입 객체에 SuperClass의 프로토타입 객체를 부여
  SubClass.prototype = Object.create(SuperClass.prototype);

  // 1-2. SubClass의 생성자 프로퍼티를 SubClass로 설정
  SubClass.prototype.constructor = SubClass;

  // 1-3. super 메서드 정의
  SubClass.prototype.super = function (propName) {
    // 1-3-1. self 변수에 this를 할당
    var self = this;
    
    // 1-3-2. propName이 없으면 SuperClass의 생성자를 호출
    if (!propName) return function () {
      SuperClass.apply(self, arguments);
    }
    
    // 1-3-3. propName이 있으면 SuperClass의 메서드를 호출
    var prop = SuperClass.prototype[propName];
    if(typeof prop !== 'function') return prop;

    // 1-3-4. 메서드를 반환
    return function () {
      return prop.apply(self, arguments);
    }
  }

  // 1-4. subMethods가 있으면 SubClass의 프로토타입 객체에 메서드를 추가
  if (subMethods) {
    for (var method in subMethods) {
      SubClass.prototype[method] = subMethods[method];
    }
  }

  // 1-5. SubClass의 프로토타입 객체를 동결
  Object.freeze(SubClass.prototype);

  // 1-6. SubClass 반환
  return SubClass;
}

// [2] Rectangle 클래스 정의
var Rectangle = function (width, height) {
  this.width = width;
  this.height = height;
};

Rectangle.prototype.getArea = function () {
  return this.width * this.height;
};

// [3] Square 클래스 정의
var Square = extendClass(
  // 1) 상위 클래스
  Rectangle,
  // 2) 하위 클래스
  function (width) {
    this.super()(width, width);
  }, 
  // 3) 하위 클래스 메서드
  {
    getArea: function () {
      console.log('size is : ' + this.super('getArea')()); // 여기서 this는 Square의 인스턴스
    }
});

// [4] Square 클래스의 인스턴스 생성
var sq = new Square(10);

// [5] Square 클래스의 메서드 호출
sq.getArea();

// [6] SuperClass의 메서드 호출
console.log(sq.super('getArea')());