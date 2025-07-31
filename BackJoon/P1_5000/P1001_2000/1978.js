const fs = require('fs');

// 입력을 읽어옴
const input = fs.readFileSync('/dev/stdin').toString().trim().split("\n");

const N = Number(input[0]); // 숫자의 개수
const arr = input[1].split(" ").map(Number); // 숫자 배열로 변환

// 소수인지 판별하는 함수
function getIsSoSoo(num) {
    for (let j = 2; j < num; j++){
        if (num % j === 0) // 나누어 떨어지면 소수가 아님
            return false;
    }
    return true; // 소수임
}

let total_sosoo = 0; // 소수의 개수 저장
for (let i = 0; i < arr.length; i++){
    if (arr[i] > 1 && getIsSoSoo(arr[i])) { // 1보다 크고 소수이면
        total_sosoo++;
    }
}

console.log(total_sosoo); // 소수의 개수 출력