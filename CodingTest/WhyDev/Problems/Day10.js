//  문제 내용
/*
    평소 반상회에 참석하는 것을 좋아하는 주희는 이번 기회에 부녀회장이 되고 싶어 각 층의 사람들을 불러 모아 반상회를 주최하려고 한다.

    이 아파트에 거주를 하려면 조건이 있는데, “a층의 b호에 살려면 자신의 아래(a-1)층의 1호부터 b호까지 사람들의 수의 합만큼 사람들을 데려와 살아야 한다” 는 계약 조항을 꼭 지키고 들어와야 한다.

    아파트에 비어있는 집은 없고 모든 거주민들이 이 계약 조건을 지키고 왔다고 가정했을 때, 주어지는 양의 정수 k와 n에 대해 k층에 n호에는 몇 명이 살고 있는지 출력하라. 
    
    단, 아파트에는 0층부터 있고 각층에는 1호부터 있으며, 0층의 i호에는 i명이 산다.
*/

//  문제 분석
/*
    - 3층 : 1 / 5 / 15 / 25 / 60  
    - 2층 : 1 / 4 / 10 / 20 / 35
    - 1층 : 1 / 3 / 6 / 10 / 15
    - 0층 : 1 / 2 / 3 / 4 / 5 

    1, 2

    fn = f(n-1) + f(n-2)

    k를 입력하면, k-1를 기준으로 계산하고, n번째까지의 합을 구하면 된다.

*/

//  문제 조건

/*
    입력
    - 첫 번째 줄에 Test case의 수 T가 주어진다. 그리고 각각의 케이스마다 입력으로 첫 번째 줄에 정수 k, 두 번째 줄에 정수 n이 주어진다
    
    출력
    - 각각의 Test case에 대해서 해당 집에 거주민 수를 출력하라.
*/

//  예제 입력 및 출력
/*
    입력
    2
    1
    3
    2
    3

    출력
    6
    10
*/

// 문제 풀이
/*
    - 목표 : n이 주어졌을 때, n번째 비포나치 수를 구하는 프로그램 작성.
    
*/


// 입력 처리
const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split("\n");

const repeatCount = Number(input[0]);
input.shift();
input.map(Number);

// 테스크 케이스 클래스
class testCase {
    constructor(k, n) {
    this.k = k;
    this.n = n;
    }
}

// 테스트 케이스 담기
let test = [];
for (let i = 0; i < input.length; i += 2){
    test.push(new testCase(input[i], input[i + 1]));
}

// 인원 수 구하는 함수
function getMembers(testCase) {
    let k = testCase.k;
    let n = testCase.n;

    if (n === 1) return 1;
    if (n === 2) return k + n;

    // 2차원 배열 초기화
    const dp = Array.from({ length: k + 1 }, () => Array(n + 1).fill(0));
    
    // 0층 초기화
    for (let i = 1; i <= n; i++){
        dp[0][i] = i;
    }

    // DP 테이블 채우기
    for (let floor = 1; floor <= k; floor++){
        for (let room = 1; room <= n; room++){
            dp[floor][room] = dp[floor][room - 1] + dp[floor - 1][room];
        }
    }

    // k층 n호 인원 수 반환
    return dp[k][n];
}

// 테스크 케이스 별 결과 출력
for (let i = 0; i < repeatCount; i++){
    console.log(getMembers(test[i]));
}




// // Top-Down 피보나치 (재귀 + 메모이제이션)
// function fib(n, memo = {}) {
//     if (n <= 1) return n;
//     if (memo[n]) return memo[n];  // 이미 계산한 값 재사용

//     memo[n] = fib(n - 1, memo) + fib(n - 2, memo);  // 저장
//     return memo[n];
// }

// console.log(fib(10));  // 출력: 55