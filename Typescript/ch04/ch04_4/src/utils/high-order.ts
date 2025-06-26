// const add = (a: number): (number : number) => number => (b: number) => a + b;
// const result = add(1)(2);
// console.log(result); // 3

const minus = (a: number): (number: number) => number => (b: number) => a - b;
const result = minus(1)(2);
console.log(result); // -1
