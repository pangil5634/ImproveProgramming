// 타입 변환이 필요한 경우
let person: object = { name: "Jack", age: 32 };
// person.name; // object 타입에 Name 속성이 없어서 오류 발생.

// 타입 변환을 진행한 경우 
console.log((<{ name: string }>person).name);