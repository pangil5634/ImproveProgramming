// 배열에 제곱 연산 적용 예
const numbers = [1, 2, 3, 4, 5];
const sqaures = numbers.map((number) => number * number);
console.log(sqaures); // [1, 4, 9, 16, 25]
console.log("");

// 짝수 필터링 예
const numbers2 = [1, 2, 3, 4, 5];
const even = numbers2.filter((number) => number % 2 === 0);
console.log(even); // [2, 4]
console.log("");

// 전체 합 예
const numbers3 = [1, 2, 3, 4, 5];
const sum = numbers3.reduce((a, b) => a + b);
console.log(sum); // 15