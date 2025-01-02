// 변수 선언 예시
let n1: number = 1;
let b1: boolean = true;
let s1: string = 'hello';
let o1: object = {};

// 타입 불일치 오류 예시
// n1 = 'a';
// b1 = 1;
// s1 = false;
// o1 = { name: 'Jack', age: 32 }

// 타입 추론 예시
let n2 = 1;
let b2 = true;
let s2 = 'hello';
let o2 = {};

// any 타입
let a: any = 0;
a = 'hello';
a = true;
a = {};

// undefined 타입
let u: undefined = undefined;

// u = 1     //undefined타입으로 선언되어 있으므로, 오직 undefined값만 가질 수 있다.

// 템플릿 문자열 예시
let count = 10, message = 'Your count';
let result = `${message} is ${count}`;
console.log(result);