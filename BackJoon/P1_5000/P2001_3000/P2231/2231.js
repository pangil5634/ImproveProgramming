/*
    분해합이란?
    자연수 N이 주어졌을 때, 어떤 수 M의 각 자리수의 합을 더했을 때 N이 되는 경우를 찾는 것이다.

    N = M + (M의 각 자리수의 합)을 만족하는 M을 찾는 문제이다.

    규칙
    1. M은 N보다 클 수 없다.
    2. 자리수 합은 최대 9 * (자리수의 길이)
    : N이 3자리라면 9 * 3 = 27만큼 커질 수 있다.
*/

const fs = require('fs');
// 1. 입력값을 읽어서 줄바꿈 기준으로 나눔
const input = fs.readFileSync('/dev/stdin').toString().trim().split("\n");

const N = Number(input[0]);

// 2. 탐색의 시작 지점을 정하는 부분
/*
    - 분해합의 정의는 N = M + (M의 각 자리수의 합)
    - 각 자리수의 합은 최대 9 * 자릿수 만큼 커질 수 있다.
    - 그렇기에, N - (M의 각 자리수의 합)부터 시작하면 탐색 범위를 줄일 수 있다. 
    - (이보다 작으면 절대 N을 만들 수 없다.)
*/
const start = Math.max(1, N - 9 * String(N).length);

let answer = 0;
for (let M = start; M < N; M++){

    // 3. M의 각 자릿수의 합을 구하는 부분
    /*
        - String(M) : 숫자를 문자열로 바꾼다. -> "198"
        - [...String(M)] : 각 자릿수로 분리 -> ['1', '9', '8']
        - .map(Number) : 문자를 숫자로 변환 -> [1, 9, 8]
        - .reduce((a, b) => a + b, 0) : 배열을 모두 더함 -> 18
    */
    const sumDigits = [...String(M)].map(Number).reduce((a, b) => a + b, 0);

    // 4. M + 각 자릿수의 합이 N인지 확인하는 부분
    if (M + sumDigits === N) {
        answer = M;
        break;
    }
}

// 5. 결과 출력
console.log(answer);
