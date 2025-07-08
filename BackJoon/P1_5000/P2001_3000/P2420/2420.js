const fs = require('fs');

// 입력을 한 줄씩 받아와 문자열 배열로 변환
const input = fs.readFileSync('/dev/stdin').toString().trim().split(' ');

// 입력값 할당
let num1 = input[0];
let num2 = input[1];

// 값 비교 후 출력
if (num1 > num2) {
    console.log(Math.abs(num1 - num2));
} else if (num1 < num2) {
    console.log(Math.abs(num2 - num1));
} else {
    console.log(0);
}
