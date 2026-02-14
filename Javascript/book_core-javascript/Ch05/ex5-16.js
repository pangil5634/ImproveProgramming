// 예제 5-16. 부분 적용 함수 - 디바운스
var debounce = function (eventName, func, wait) {
  var timeoutId = null;
  return function (event) {
    var selt = this;
    console.log(eventName, "event 발생");
    clearTimeout(timeoutId);
    timeoutId = setTimeout(func.bind(selt, event), wait);
  };
};

var moveHandler = function (e) {
  console.log("move event 처리");
};

var wheelHandler = function (e) {
  console.log("wheel event 처리");
};

document.addEventListener("mousemove", debounce("mousemove", moveHandler, 500));
document.addEventListener("wheel", debounce("wheel", wheelHandler, 700));
