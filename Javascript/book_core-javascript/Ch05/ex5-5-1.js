// 예제 5-5. 클로저의 메모리 관리 - (1) return에 의한 클로저의 메모리 해제
var outer = (function () {
  var a = 1;
  var inner = function () {
    return ++a;
  };
  return inner;
})();
console.log(outer()); // 2
console.log(outer()); // 3
outer = null; // outer 식별자의 inner 함수 참조를 끊음
