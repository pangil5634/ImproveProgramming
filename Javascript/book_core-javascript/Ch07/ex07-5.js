// 예제 7-5. Rectangle, Square 클래스

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
};

// [5] getArea 메서드 추가
Square.prototype.getArea = function () {
  return this.width * this.width;
}

// [6] Square 클래스의 인스턴스 생성
var sq = new Square(5);
console.log(sq.getArea()); // 25