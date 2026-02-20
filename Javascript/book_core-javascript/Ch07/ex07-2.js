// 예제 7-2. Grade 생성자 함수 및 인스턴스

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
var g = new Grade(100, 90);

// [3] 결과 출력
console.log(g);