// 예제 7-16. ES6 클래스의 상속

class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  getArea() {
    return this.width * this.height;
  }
}

class Square extends Rectangle {
  constructor(width) {
    super(width, width);
  }

  getArea() {
    console.log('size is : ' + super.getArea());
  }
}

var sq = new Square(5);
sq.getArea(); // size is : 25