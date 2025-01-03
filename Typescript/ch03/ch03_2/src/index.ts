import { ai, printMe } from "./utils/AnonymousInterface";
import { IPerson, IPerson2 } from "./utils/IPerson";

// 개요
let o: object = { name: 'jack', age: 32 }
o = { first: 1, second: 2 };

// 인터페이스 사용 예시
let good: IPerson = { name: 'Jack', age: 32 }
console.log("good : ", good)

// 인터페이스 오류 예시
// let bad1 : IPerson = {name : 'Jack'} // age 속성이 없으므로 오류
// let bad2 : IPerson = {age : 32} // name 속성이 없으므로 오류
// let bad3 : IPerson = {} // name과 age 속성이 없으므로 오류
// let bad4 : IPerson = {name : 'Jack', age : 32, etc : true} // etc 속성이 있어서 오류

// 인터페이스 선택 속성 구문
let good1: IPerson2 = { name: 'Jack', age: 32 }
console.log("good1 : ", good1);
let good2: IPerson2 = { name: 'Jack', age: 32, etc: true }
console.log("good2 : ", good2);

// 익명 인터페이스 예시
printMe(ai);