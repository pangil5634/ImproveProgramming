// 예제 5-9. 콜백 함수와 클로저
var fruits = ["apple", "banana", "peach"];
var $ul = document.createElement("ul"); // (공통 코드)

var alertFruitBuilder = function (fruit) {
  return function () {
    alert("your choice is " + fruit);
  };
};

fruits.forEach(function (fruit) {
  var $li = document.createElement("li");
  $li.textContent = fruit;
  $li.addEventListener("click", alertFruitBuilder(fruit));
  $ul.appendChild($li);
});

document.body.appendChild($ul); // (공통 코드)
