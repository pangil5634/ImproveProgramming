const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

// N : 동전의 가치 개수, K : 금액
const [N, K] = input[0].split(" ").map(Number);
input.shift();
let arr = [];
input.forEach((e) => arr.push(Number(e)));

let count = 0; // 동전 개수
let remainder = K; // 나머지

// 반복문 계산
for (let i = N-1; i >= 0; i--){
    if (parseInt(remainder / arr[i]) > 0) {
        count += parseInt(remainder / arr[i]);
        remainder = remainder % arr[i];
    }
}

// 결과 출력
console.log(count);