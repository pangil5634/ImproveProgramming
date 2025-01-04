// 전개 연산자 예시
let coord = { ...{ x: 0 }, ...{ y: 0 } };
console.log(coord);

let part1 = { name: 'jane' }, part2 = { age: 22 }, part3 = { city: 'Seoul', country: 'Kr' };
let merge = { ...part1, ...part2, ...part3 };
console.log(merge);