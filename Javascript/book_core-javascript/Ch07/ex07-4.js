// 예제 7-4. 요소가 있는 배열을 prototype에 매칭한 경우

// [0] Grade 생성자 함수 정의
var Grade = function () {
  // arguments는 유사배열객체이므로 배열로 변환
  var args = Array.prototype.slice.call(arguments);

  // this는 Grade 생성자 함수가 생성할 객체
  for (var i = 0; i < args.length; i++) {
    this[i] = args[i];
  }

  // 유사배열객체에 배열의 기능을 부여하기 위해 length 속성을 추가
  this.length = args.length;
};

// [1] Grade.prototype을 빈 배열이 아닌, 요소를 포함하는 배열로 설정
Grade.prototype = ['a', 'b', 'c ', 'd'];

// [2] Grade 생성자 함수를 통해 객체 생성
var g = new Grade(100, 80); 

// [3] push 메서드 추가
g.push(90);
console.log(g); // Array { '0': 100, '1': 90, '2': 90, length: 3 }

// [4] length 속성 삭제
/*
  1) ex07-3과 다른 점
  : ex07-3에서는 Grade.prototype을 빈 배열로 설정했기 때문에, 
    length 속성이 삭제되었을 때, 프로토타입인 빈 배열([])의 length 속성인 0을 참조하게 되어 오류가 발생했다.
    그러나, ex07-4에서는 Grade.prototype을 요소를 포함하는 배열로 설정했기 때문에, 
    length 속성이 삭제되었을 때, 프로토타입인 배열의 length 속성인 4를 참조하게 되어 오류가 발생하지 않는다.

  2) 작동 과정
  : g.length가 없으니깐, g.__proto__.length를 찾고, 값이 4이므로 인덱스 4에 70을 넣고, 다시 g.length에 5를 부여한다.

  3) 문제점
  : 클래스에 있는 값이 인스턴스의 동작에 영향을 주고 있다. 
*/
delete g.length;
g.push(70);
console.log(g); // Array { '0': 100, '1': 80, '2': 90, '4': 70, length: 5 }
