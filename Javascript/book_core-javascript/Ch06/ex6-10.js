// 예제 6-10. Grade 생성자 함수와 인스턴스
var Grade = function () {
  var args = Array.prototype.slice.call(arguments);
  for (var i = 0; i < args.length; i++) {
    this[i] = args[i];
  }
  this.length = args.length;
};

// var g1 = new Grade(100, 80);
// console.log(g1.join(", ")); // 100, 80

// Grade.prototype에 배열 메서드가 없으므로 join 메서드를 사용할 수 없다.
// 아래와 같이 Grade.prototype을 배열로 설정하면 Grade 객체에서 배열 메서드를 사용할 수 있다.
// 하지만 이렇게 하면 Grade.prototype이 배열이 되므로 다른 객체가 Grade.prototype을 상속받을 때 문제가 발생할 수 있다.
// 따라서 이 방법은 권장되지 않는다.
Grade.prototype = [];

var g2 = new Grade(100, 80);
console.log(g2);
console.log(g2.join(", ")); // 100, 80
