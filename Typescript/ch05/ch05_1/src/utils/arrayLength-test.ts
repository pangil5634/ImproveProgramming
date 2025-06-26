import { arryLength, isEmpty } from "./arrayLength";

let numArray: number[] = [1, 2, 3];
let strArray: string[] = ['Hello', 'World'];

type IPerson = { name: string, age: number };
let personArray: IPerson[] = [{ name: 'Jack', age: 32 }, { name: 'Jane', age: 22 }];

console.log(
    arryLength(numArray),
    arryLength(strArray),
    arryLength(personArray),
    isEmpty(numArray),
    isEmpty(strArray),
    isEmpty(personArray)
);