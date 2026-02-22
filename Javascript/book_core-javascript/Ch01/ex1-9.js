// 예제 1-8. 변수 복사 이후 값 변경 결과 비교 (2) - 객체 자체를 변경했을 때
var a = 10;
var b = a;
var obj1 = { c: 10, d: "ddd" };
var obj2 = obj1;

b = 15;
obj2 = { c: 20, d: "ddd" };

console.log(a !== b);
console.log(obj1 === obj2);
