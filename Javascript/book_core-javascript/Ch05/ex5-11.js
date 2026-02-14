// 예제 5-11. 클로저로 변수를 보호한 자동차 객체
var createCar = function () {
  var fuel = Math.ceil(Math.random() * 10 + 10); // 연료(L)
  var power = Math.ceil(Math.random() * 3 + 2); // 출력(km/L)
  var moved = 0; // 총 이동거리

  return {
    get moved() {
      return moved;
    },
    run: function () {
      var km = Math.ceil(Math.random() * 6);
      var wasteFuel = km / power;
      if (fuel < wasteFuel) {
        console.log("이동 불가");
        return;
      }
      fuel -= wasteFuel;
      moved += km;
      console.log(km + "km 이동 (총 " + this.moved + "km)");
    },
  };
};

var car = createCar();
car.run();

console.log(car.moved); // 0 또는 1~6
console.log(car.fuel); // undefined
console.log(car.power); // undefined

car.fuel = 1000;
console.log(car.fuel); // 1000
car.run();

car.power = 100;
console.log(car.power); // 100
car.run();

car.moved = 1000;
console.log(car.moved); // 1000
car.run();
