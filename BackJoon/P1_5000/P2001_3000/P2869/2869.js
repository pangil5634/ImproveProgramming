const fs = require("fs");
const input = fs.readFileSync('/dev/stdin').toString().trim().split("\n");

// 1. 변수 할당
const [A, B, V] = input[0].split(" ").map(Number);

// 2. 변수 선언 
let day = 0; // 일차

// 3. 일차 계산
// 3-1. 실패한 방법 (시간복잡도 실패,,)
// let cal = 0; // 계산용
// while (cal < V) {
//     cal += A;
//     cal -= B;
//     day++;
// }

// 3-2. 성공한 방법
day = Math.ceil((V - B) / (A - B));


// 4. 결과 출력
console.log(day);