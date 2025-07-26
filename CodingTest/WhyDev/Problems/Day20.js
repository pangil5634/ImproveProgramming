//  문제 내용
/*
    0과 1로만 이루어진 수를 이진수라 한다. 
    이러한 이진수 중 특별한 성질을 갖는 것들이 있는데, 이들을 이친수(pinary number)라 한다. 
    이친수는 다음의 성질을 만족한다.
    - 1. 이친수는 0으로 시작하지 않는다.
    - 2. 이친수에서는 1이 두 번 연속으로 나타나지 않는다. 
    - 즉, 11을 부분 문자열로 갖지 않는다.
    - 예를 들면 1, 10, 100, 101, 1000, 1001 등이 이친수가 된다. 
    하지만 0010101이나 101101은 각각 1, 2번 규칙에 위배되므로 이친수가 아니다.

    N(1 ≤ N ≤ 90)이 주어졌을 때, N자리 이친수의 개수를 구하는 프로그램을 작성하시오.
*/

//  문제 분석
/*
    - 이진수 : 0과 1로만 이루어진 수
    - 이친수 : 0으로 시작하지 않고, 1이 두 번 연속 나타나지 않는다.
    - 예 : 1, 10, 100, 101, 1000, 1011 등
*/

//  문제 조건

/*
    입력
    - 첫째 줄에 N이 주어진다.

    출력
    - 첫째 줄에 N자리 이친수의 개수를 출력한다.
*/

//  예제 입력 및 출력
/*
    입력
    3
    출력
    2
*/


// DP(동적 프로그래밍)을 사용한 풀이
const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim();
const N = Number(input);

const dp = new Array(N + 1).fill(BigInt(0));

// 초기값을 BigInt로 설정
dp[1] = BigInt(1);
if (N >= 2) dp[2] = BigInt(1);

for (let i = 3; i <= N; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
}

console.log(dp[N].toString());

// DP(동적 프로그래밍)을 사용한 풀이 - BigInt 사용
// const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().trim();
// const N = Number(input);

// // dp[i][j] = i자리 이친수 중에서 마지막 자리가 j인 경우의 수
// // j = 0: 마지막 자리가 0인 경우
// // j = 1: 마지막 자리가 1인 경우
// const dp = Array.from({ length: N + 1 }, () => [BigInt(0), BigInt(0)]);

// // 초기값 설정
// // 1자리 이친수는 1만 가능 (0으로 시작할 수 없음)
// dp[1][0] = BigInt(0); // 1자리에서 마지막이 0인 경우는 없음
// dp[1][1] = BigInt(1); // 1자리에서 마지막이 1인 경우는 "1" 하나

// // DP 점화식
// for (let i = 2; i <= N; i++) {
//     // i자리에서 마지막이 0인 경우:
//     // (i-1)자리에서 마지막이 0이었던 경우 + (i-1)자리에서 마지막이 1이었던 경우
//     // 둘 다 뒤에 0을 붙일 수 있음
//     dp[i][0] = dp[i-1][0] + dp[i-1][1];
    
//     // i자리에서 마지막이 1인 경우:
//     // (i-1)자리에서 마지막이 0이었던 경우만 가능 (11이 연속으로 올 수 없음)
//     dp[i][1] = dp[i-1][0];
// }

// // N자리 이친수의 총 개수 = 마지막이 0인 경우 + 마지막이 1인 경우
// const result = dp[N][0] + dp[N][1];
// console.log(result.toString());




// // 완전탐색(Brute-force) + filter를 사용한 풀이
// const fs2 = require('fs');

// // 입력값을 읽어옴
// const input2 = fs2.readFileSync('/dev/stdin').toString().trim().split("\n");
// const N2 = Number(input2); // 자리 수

// const binaryArr = [];

// // 0부터 2^N-1까지 모든 N자리 이진수를 생성
// for (let i = 0; i < 2 ** N2; i++) {
//     // N자리 이진수 문자열로 변환 (앞에 0을 붙여서 N자리로 만듦)
//     const bin = i.toString(2).padStart(N2, '0');
//     binaryArr.push(bin);
// }

// // 조건에 맞는(0으로 시작하지 않고, 11이 포함되지 않는) 이친수만 필터링
// const pinaryNumbers = binaryArr.filter(bin => {
//     return bin[0] === '1' && !bin.includes('11');
// });

// console.log(pinaryNumbers.length); // N자리 이친수의 개수 출력