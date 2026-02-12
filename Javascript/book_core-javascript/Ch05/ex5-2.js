// 예제 5-2. 외부 함수의 변수를 참조하는 내부 함수
var outer = function () {
  var a = 1;
  var inner = function () {
    return ++a;
  };

  return inner();
};

var outer2 = outer();
console.log(outer2); // 2
