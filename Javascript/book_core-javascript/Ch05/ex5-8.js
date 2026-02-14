// 예제 5-8. 콜백 함수와 클로저
var fruits = ["apple", "banana", "peach"];
var $ul = document.createElement("ul"); // (공통 코드)

var alertFruit = function (fruit) {
  alert("your choice is " + fruit);
};

fruits.forEach(function (fruit) {
  var $li = document.createElement("li");
  $li.textContent = fruit;
  $li.addEventListener("click", alertFruit.bind(null, fruit)); // 콜백 함수와 클로저
  $ul.appendChild($li);
});

document.body.appendChild($ul);
alertFruit(fruits[1]); // your choice is banana
