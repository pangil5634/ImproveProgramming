//  문제 내용
/*
    2022 연세대학교 미래캠퍼스 슬기로운 코딩생활에 N명의 학생들이 응시했다.

    이들 중 점수가 가장 높은 k명은 상을 받을 것이다. 이 때, 상을 받는 커트라인이 몇 점인지 구하라.

    커트라인이란 상을 받는 사람들 중 점수가 가장 가장 낮은 사람의 점수를 말한다.
*/

//  문제 분석
/*
    - N명의 학생이 입력된다.
    - 점수가 가장 높은 k명의 점수 중 가장 낮은 사람의 점수를 출력한다.
*/

//  문제 조건

/*
    입력
    - 첫째 줄에는 응시자의 수 N과 상을 받는 사람의 수 k가 공백을 사이에 두고 주어진다.
    둘째 줄에는 각 학생의 점수 x가 공백을 사이에 두고 주어진다.
    
    출력
    - 상을 받는 커트라인을 출력하라.
*/

//  예제 입력 및 출력
/*
    입력
    5 2
    100 76 85 93 98

    출력
    98
*/

// 문제 풀이
/*
    - 목표 : 상을 받는 커트라인을 출력한다.

    1. 첫번째 행을 통해 입력 수, 커트라인 수를 구한다.
    2. 두번째 행을 내림차순으로 정렬한다.
    3. 커트라인 수 - 1번째의 index에 있는 수를 출력한다.
*/


// const fs = require('fs');

// // 입력을 한 줄씩 받아와 문자열 배열로 변환
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

// // 첫 번째 줄에서 응시자 수 N과 상을 받는 사람 수 k를 분리하여 추출
// const cutline = Number(input[0].trim().split(" ")[1]); // k 값만 사용

// // 두 번째 줄에서 점수들을 공백 기준으로 나눈 뒤, 숫자 배열로 변환 후 내림차순 정렬
// const numbers = input[1].trim().split(" ").map(Number).sort((a, b) => b - a);

// // 커트라인 점수(상위 k명 중 가장 낮은 점수)를 출력
// console.log(numbers[cutline - 1]);

function getCutlineScore(input) {
    const [N, k] = input[0].split(' ').map(Number);
    const scores = input[1].split(' ').map(Number);

    if (k > N) {
        throw new Error("k는 N보다 클 수 없습니다.");
    }

    scores.sort((a, b) => b - a);
    return scores[k - 1];
}

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
console.log(getCutlineScore(input));




