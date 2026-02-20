// 예제 7-7. Rectangle을 상속하는 Square 클래스

// [1] Rectangle 클래스 정의
var Rectangle = function (width, height) {
  this.width = width;
  this.height = height;
};

// [2] getArea 메서드 추가
Rectangle.prototype.getArea = function () {
  return this.width * this.height;
};

// [3] Rectangle 클래스의 인스턴스 생성
var rect = new Rectangle(3, 4);
console.log(rect.getArea()); // 12


// [4] Square 클래스 정의
var Square = function (width) {
  Rectangle.call(this, width, width);
};

// [5] Rectangle의 인스턴스 부여
/*
  1) 이유
  : 메서드를 상속하기 위해 Square의 프로토타입 객체에 Rectangle의 인스턴스를 부여한다.

  2) 문제점
  : 클래스에 있는 값이 인스턴스에 양행을 줄 수 있는 구조이다.
  
  3) 문제점 예시
  var rect = new Rectangle(3, 4);
  rect.width = 10;
  console.log(rect.getArea()); // 40 -> width * height = 10 * 4 = 40

  var sq = new Square(5);
  sq.width = 10;
  console.log(sq.getArea()); // 50 -> width * height = 10 * 5 = 50

  4) 문제점 설명
  - sq.width를 10으로 변경하더라도 sq.height는 여전히 5이므로, getArea()는 50을 반환한다. 
  - 이는 Square 인스턴스가 정사각형의 성질을 유지하지 못하고 일반적인 직사각형처럼 동작함을 보여준다.
*/
Square.prototype = new Rectangle();

// [6] Square 클래스의 인스턴스 생성
var sq = new Square(5);
console.log(sq.getArea()); // 25