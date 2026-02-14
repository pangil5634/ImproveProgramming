// 예제 5-15. 부분 적용 함수 구현 (2)
Object.defineProperty(global, "_", {
  // node 환경에서는 global, 브라우저 환경에서는 window 객체에 _를 정의한다.
  value: "EMPTY_SPACE",
  writable: false,
  configurable: false,
  enumerable: false,
});

var partial = function () {
  var originalPartialArgs = arguments;
  var func = originalPartialArgs[0];

  if (typeof func !== "function") {
    throw new TypeError("첫 번째 인자가 함수가 아닙니다.");
  }

  return function () {
    var partialArgs = Array.prototype.slice.call(originalPartialArgs, 1);
    var restArgs = Array.prototype.slice.call(arguments);

    for (var i = 0; i < partialArgs.length; i++) {
      if (partialArgs[i] === _) {
        partialArgs[i] = restArgs.shift();
      }
    }
    return func.apply(this, partialArgs.concat(restArgs));
  };
};

var add = function () {
  var result = 0;
  for (var i = 0; i < arguments.length; i++) {
    result += arguments[i];
  }
  return result;
};

var addPartial = partial(add, 1, 2, _, 4, 5, _, _, 8, 9);
console.log(addPartial(3, 6, 7, 10)); // 55;

var dog = {
  name: "강아지",
  greet: partial(function (prefix, suffix) {
    return prefix + this.name + suffix;
  }, "왈왈. "),
};

console.log(dog.greet("배고파요!")); // 왈왈. 강아지 배고파요!
