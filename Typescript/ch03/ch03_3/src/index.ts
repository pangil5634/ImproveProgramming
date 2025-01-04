// 클래스 선언

import { Person5 } from "./utils/Abstract";
import { Person1, Person2, Person3, Person4 } from "./utils/Person";
import { A, initVal } from "./utils/Static";

let jack1: Person1 = new Person1();
jack1.name = 'Jack1';
jack1.age = 32
console.log("jack1 : ", jack1)

let jack2: Person2 = new Person2('Jack2', 33);
console.log("jack2 : ", jack2);

let jack3: Person3 = new Person3('Jack3', 34)
console.log("jack3 : ", jack3);

let jack4: Person4 = new Person4('Jack4', 35);
console.log('jack4 : ', jack4);

let jack5: Person5 = new Person5('Jack5', 36);
console.log('jack5 : ', jack5);

console.log("static : ", initVal);

