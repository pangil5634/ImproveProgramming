// 예제 7-10. 클래스 상속 및 추상화 방법(3) - Object.create() 활용

// (...생략)
Square.prototype = Object.create(Rectangle.prototype);
Object.freeze(Square.prototype);
// (...생략)

/*
  설명
  : SubClass의 prototype의 __proto__가 SuperClass의 prototype을 바라보되, SuperClass의 인스턴스가 되지는 않는다.
*/
