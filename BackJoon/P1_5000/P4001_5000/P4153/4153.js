const fs = require('fs');

// 입력을 한 줄씩 받아와 문자열 배열로 변환 (각 줄: "3 4 5" 같은 형식)
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

// 각 줄에 대해 반복 처리
for (let i = 0; i < input.length; i++) {
    // 공백 기준으로 분리하고 숫자(Number)로 변환 → [a, b, c]
    let separatedArr = input[i].trim().split(' ').map(Number); 
    
    // 구조 분해 할당으로 세 수를 각각 변수에 저장
    const [a, b, c] = separatedArr;

    // 종료 조건: 세 수가 모두 0이면 반복 종료
    if (a === 0 && b === 0 && c === 0) break;
    
    // 오름차순 정렬하여 가장 큰 값을 마지막에 위치시킴
    const sorted = [a, b, c].sort((x, y) => x - y);
    const [x, y, z] = sorted; // 가장 큰 수 z를 빼고 피타고라스 판별 준비

    // 피타고라스 정리: x² + y² == z² 이면 직각삼각형
    console.log(x * x + y * y === z * z ? 'right' : 'wrong');
}
