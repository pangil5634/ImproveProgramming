let array: number[] = [1, 2, 3, 4, 5];

let [first, second, thrid, ...rest] = array;
console.log(first, second, thrid, rest);