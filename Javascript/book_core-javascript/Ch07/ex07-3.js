// 예제 7-3. length 프로퍼티를 삭제한 경우

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

// [1] Grade.prototype을 빈 배열로 설정
Grade.prototype = [];

// [2] Grade 생성자 함수를 통해 객체 생성
var g = new Grade(100, 80); 

// [3] 결과 출력
console.log(g); // Array { '0': 100, '1': 90, length: 2 }

// [4] push 메서드 추가
g.push(90);
console.log(g); // Array { '0': 100, '1': 90, '2': 90, length: 3 }

// [5] length 속성 삭제
/*
  1) index 0에 70이 할당된 이유
  : push 메서드는 length 속성을 기반으로 동작한다. 
    g의 length 속성이 삭제되었으므로 프로토타입인 빈 배열([])의 length 속성인 0을 참조하게 된다.
    
  2) length가 1이 된 이유
  : Grade.prototype이 빈 배열을 가리키고 있었기 때문이다.
    push 명령어에 의해, 자바스크립트 엔진이 g.length를 읽고자 하는데, g.length가 없었다.
    그래서 프로토타입 체이닝을 타고 g.__proto__인 Grade.prototype의 length 속성을 읽게 된다.
    이로 인해 length가 1이 되었고, 오류가 없었던 것이다.

  3) 기타
  : 내장객체인 배열 인스턴스의 length 프로퍼티는 configurable 속성이 false이므로 삭제할 수 없다.
    그러나, Grade 클래스의 인스턴스는 배열 메서드를 상속하긴 하지만, 기본적으로는 일반 객체의 성질을 지니므로, 삭제가 가능하다.
*/
delete g.length;
g.push(70);
console.log(g); // Array { '0': 70, '1': 80, '2': 90, length: 1 }
