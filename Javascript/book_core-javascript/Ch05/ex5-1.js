// 예제 5-1. 외부 함수의 변수를 참조하는 내부 함수
var outer = function () {
  var a = 1;
  var inner = function () {
    console.log(++a);
  };

  inner();
};

outer(); // 2
