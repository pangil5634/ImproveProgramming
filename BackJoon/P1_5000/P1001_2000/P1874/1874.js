const fs = require("fs");
// 입력을 읽어서 줄 단위로 나눔
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const N = Number(input[0]); // 수열의 길이
const sequence = input.slice(1).map(Number); // 만들고자 하는 수열

let stack = []; // 스택을 시뮬레이션할 배열
let result = []; // 연산 결과('+', '-')를 저장할 배열
let current = 1; // 다음에 스택에 넣을 숫자
let possible = true; // 수열을 만들 수 있는지 여부

for (let i = 0; i < N; i++) {
    let num = sequence[i]; // 현재 만들어야 하는 숫자
    // current가 num 이하일 때까지 스택에 push
    while (current <= num) {
        stack.push(current++);
        result.push("+");
    }
    // 스택의 top이 num이면 pop
    if (stack[stack.length - 1] === num) {
        stack.pop();
        result.push("-");
    } else {
        // 불가능한 경우
        possible = false;
        break;
    }
}

// 결과 출력
if (!possible) {
    console.log("NO");
} else {
    console.log(result.join("\n"));
}