import { IPerson } from "./IPerson_ICompany";

let jack: IPerson = { name: 'Jack', age: 32 };

// 비구조화
let name1 = jack.name, age1 = jack.age;
console.log("destructing1 : ", name1, ", ", age1);

// 비구조화 할당 (변수명이 구조화된 변수의 속성명과 동일해야 한다)
let { name, age } = jack;
console.log("destructing2 : ", name, ", ", age);


