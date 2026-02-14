// 예제 5-17. 커링 함수 (1)
// 1) ES5 방식
// var curry5 = function (func) {
//   return function (a) {
//     return function (b) {
//       return function (c) {
//         return function (d) {
//           return function (e) {
//             return func(a, b, c, d, e);
//           };
//         };
//       };
//     };
//   };
// };

// 2) ES6 방식
var curry5 = (func) => (a) => (b) => (c) => (d) => (e) => func(a, b, c, d, e);

var getMax = curry5(Math.max);
console.log(getMax(1)(2)(3)(4)(5)); // 5
