// 예제 5-6. 콜백 함수와 클로저
var fruits = ["apple", "banana", "peach"];
var $ul = document.createElement("ul"); // (공통 코드)

fruits.forEach(function (fruit) {
  // (A)
  var $li = document.createElement("li");
  $li.textContent = fruit;
  $li.addEventListener("click", function () {
    // (B)
    alert(fruit);
  });
  $ul.appendChild($li);
});

document.body.appendChild($ul);
