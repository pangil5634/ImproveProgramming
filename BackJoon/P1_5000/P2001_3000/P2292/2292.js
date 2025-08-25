const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split("\n");

const N = Number(input[0]);   // 참가자 수
let count = 1; // 진입 횟수
let range = 2;

if (N == 1) {
    console.log("1");
} else {
    // 범위가 N보다 커지기 직전까지 반복 
    while (range <= N) {
        range = range + (6 * count);
        count++;
    }

    console.log(count);
}