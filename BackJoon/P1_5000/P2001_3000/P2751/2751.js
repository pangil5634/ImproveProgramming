// 1. 입력 받기
const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n").map(Number);

// 2. 첫째 줄 삭제
input.shift();

// 3. 정렬 후 출력
input.sort((a, b) => a - b);

// 방법1
// input.forEach(e => console.log(e));
// 방법2 (better)
console.log(input.join('\n'));