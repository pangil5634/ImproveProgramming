// 예제 7-6. Square 클래스 변형
/*
  이렇게 변형함으로써, 소스상으로도 Square를 Rectangle의 하위 클래스로 삼을 수 있게 된다. 
  또한, getArea라는 메서드는 동일한 동작을 하므로, 상위 클래스에서만 정의하면 되고, 하위 클래스에서는 해당 메서드를 상속하면서 height 대신 width를 넣어주면 된다.
*/

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
  this.width = width;
  this.height = width;
};

// [5] getArea 메서드 추가
Square.prototype.getArea = function () {
  return this.width * this.height;
}

// [6] Square 클래스의 인스턴스 생성
var sq = new Square(5);
console.log(sq.getArea()); // 25