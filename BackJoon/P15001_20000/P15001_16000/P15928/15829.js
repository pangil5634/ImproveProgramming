const fs = require("fs");
const input = fs.readFileSync('/dev/stdin').toString().trim().split("\n");

const length = Number(input[0]);

// 1. 각 알파벳을 아스키코드로 변환하여 저장
const arr = input[1].split("").map(e => e.charCodeAt() + 1);

// 2. 합계 계산
let total = 0;
for (let i = 0; i < length; i++){

    // 3. 아스키코드에서 97을 빼서 알파벳 순번 구한 뒤, 제곱수를 곱함
    let cal = (arr[i]-97) * (31 ** i);
    total += cal;
}

// 3. 결과 출력
console.log(total);