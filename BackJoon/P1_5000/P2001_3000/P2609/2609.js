// 최대공약수(GCD) & 최소공배수(LCM) 구하기

// 입력 처리
const fs = require("fs");
const input = fs.readFileSync('/dev/stdin').toString().trim().split("\n");

// 입력한 두 수
const [n1, n2] = input[0].split(" ").map(Number);

/*
    최대공약수(GCD)
    - 두 수를 나누어 떨어지게 하는 "가장 큰 수"
    - 예) 12, 18 → 공약수: 1, 2, 3, 6 → 최대공약수 = 6
*/

// 방법1 : 완전 탐색 방식
// - 두 수 중 더 작은 수까지 반복문을 돌면서 동시에 나누어 떨어지는 가장 큰 수를 찾는다.
// - 구현은 직관적이고 이해하기 쉽지만, 두 수가 클 경우(예: 10^9) 성능이 떨어진다.
// - 시간복잡도 : (O(min(n1, n2)))
let getGCD1 = (num1, num2) => {
    if (num1 === 0) return num2;
    if (num2 === 0) return num1;

    let gcd = 1; // 공약수를 저장할 변수. 최소 1은 항상 공약수.

    // 두 수 중 작은 수까지만 확인
    for (let i = 2; i <= Math.min(num1, num2); i++) {
        // i가 num1, num2 모두를 나누어 떨어뜨릴 수 있다면
        if (num1 % i === 0 && num2 % i === 0) {
            gcd = i; // 공약수 갱신
        }
    }
    
    return gcd; // 마지막에 갱신된 값이 최대공약수
}

// 방법2 : 유클리드 호제법(Euclidean Algorithm)
// - 원리: GCD(a, b) = GCD(b, a % b)
// - 즉, 두 수를 나눴을 때의 '나머지'를 이용해 점점 더 작은 문제로 줄여가다가, 나머지가 0이 되는 순간의 수가 최대공약수.
// - 시간복잡도: O(log(min(n1, n2))) → 매우 효율적.
let getGCD2 = (num1, num2) => {
    if (num1 === 0) return num2;
    if (num2 === 0) return num1;

    while (num2 !== 0) {
        let temp = num1 % num2; // 나머지를 구함
        num1 = num2;            // num2를 새로운 기준으로
        num2 = temp;            // 나머지를 다음 피제수로
    }
    return num1; // 나머지가 0일 때의 num1이 최대공약수
}

/*
    최소공배수(LCM)
    - 두 수 모두의 배수 중에서 "가장 작은 수"
    - 예) 12, 18 → 공배수: 36, 72, 108 ... → 최소공배수 = 36
*/

// 방법1 : 완전 탐색 방식
// - 1부터 시작해서 차례로 증가시키며, 두 수로 동시에 나눠지는 순간 멈춘다.
// - 구현이 직관적이지만, 최악의 경우 num1*num2까지 확인해야 해서 성능이 매우 떨어짐.
// - 시간복잡도 : O(num1 * num2) (비효율적)
let getLCM1 = (num1, num2) => {
    if (num1 === 0 || num2 === 0) return 0; // 0 포함 시 LCM은 0
    let lcm = 1; // 후보값을 1부터 시작
    
    // 무한 반복 → 조건을 만족하면 break
    while (true) {
        // lcm이 num1, num2 모두로 나누어 떨어질 때 (즉, 공배수일 때)
        if ((lcm % num1 === 0) && (lcm % num2 === 0)) {
            break; // 처음 발견된 순간이 최소공배수
        }
        lcm++; // 아니라면 1씩 증가시키며 탐색
    }
    return lcm;
}

// 방법2 : 최대공약수(GCD) 활용 공식
// - 성질: LCM(a,b) * GCD(a,b) = a * b
// - 따라서 LCM(a,b) = (a / GCD(a,b)) * b
// - 유클리드 호제법으로 GCD를 구한 후, 즉시 계산하므로 매우 효율적.
// - 시간복잡도 : O(log(min(n1, n2))) (실전용)
let getLCM2 = (num1, num2) => {
    if (num1 === 0 || num2 === 0) return 0; // 0 포함 시 LCM은 0
    
    const gcd = getGCD2(num1, num2);  // 최대공약수 구하기
    return (num1 / gcd) * num2;       // 곱하기 전에 나누어 overflow 방지
}
    

// 결과 출력
console.log(getGCD2(n1, n2)); // 최대공약수
console.log(getLCM2(n1, n2)); // 최소공배수
