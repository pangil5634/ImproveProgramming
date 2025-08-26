const fs = require('fs');
// 1. 입력값을 읽어서 줄바꿈 기준으로 나눔
const input = fs.readFileSync('/dev/stdin').toString().trim().split("\n");

// 2. 첫 번째 줄을 숫자로 변환 (방 번호)
const N = Number(input[0]);   // 참가자 수
let count = 1; // 3. 진입 횟수(최소값은 1)
let range = 2; // 4. 현재 범위의 최대값(2부터 시작)

// 5. N이 1이면 바로 1 출력
if (N == 1) {
    console.log("1");
} else {
    // 6. 범위가 N보다 커지기 직전까지 반복
    while (range <= N) {
        // 7. 다음 범위의 최대값 계산 (6씩 증가)
        range = range + (6 * count);
        count++; // 8. 진입 횟수 증가
    }

    // 9. 결과 출력
    console.log(count);
}