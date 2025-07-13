//  문제 내용
/*
    우리는 사람의 덩치를 키와 몸무게, 이 두 개의 값으로 표현하여 그 등수를 매겨보려고 한다. 
    어떤 사람의 몸무게가 x kg이고 키가 y cm라면 이 사람의 덩치는 (x, y)로 표시된다. 
    두 사람 A 와 B의 덩치가 각각 (x, y), (p, q)라고 할 때 x > p 그리고 y > q 이라면 우리는 A의 덩치가 B의 덩치보다 "더 크다"고 말한다. 
    예를 들어 어떤 A, B 두 사람의 덩치가 각각 (56, 177), (45, 165) 라고 한다면 A의 덩치가 B보다 큰 셈이 된다. 
    그런데 서로 다른 덩치끼리 크기를 정할 수 없는 경우도 있다. 
    예를 들어 두 사람 C와 D의 덩치가 각각 (45, 181), (55, 173)이라면 몸무게는 D가 C보다 더 무겁고, 
    키는 C가 더 크므로, "덩치"로만 볼 때 C와 D는 누구도 상대방보다 더 크다고 말할 수 없다.

    N명의 집단에서 각 사람의 덩치 등수는 자신보다 더 "큰 덩치"의 사람의 수로 정해진다. 
    만일 자신보다 더 큰 덩치의 사람이 k명이라면 그 사람의 덩치 등수는 k+1이 된다. 
    이렇게 등수를 결정하면 같은 덩치 등수를 가진 사람은 여러 명도 가능하다. 
*/

//  문제 분석
/*
    - 몸무게, 키 두 개의 값이 모두 커야 덩치가 크다고 얘기할 수 있다.
    - 본인보다 덩치가 큰 사람의 수 + 1 값이 등수가 된다.
    - 같은 덩치 등수를 가진 사람도 존재할 수 있다.
*/

//  문제 조건

/*
    입력
    - 첫 줄에는 전체 사람의 수 N이 주어진다. 그리고 이어지는 N개의 줄에는 각 사람의 몸무게와 키를 나타내는 양의 정수 x와 y가 하나의 공백을 두고 각각 나타난다.
    
    출력
    - 여러분은 입력에 나열된 사람의 덩치 등수를 구해서 그 순서대로 첫 줄에 출력해야 한다. 단, 각 덩치 등수는 공백문자로 분리되어야 한다.
*/

//  예제 입력 및 출력
/*
    입력
    5
    55 185
    58 183
    88 186
    60 175
    46 155

    출력
    2 2 1 2 5
*/

// 문제 풀이
/*
    - 목표 : 덩치 등수를 구하고, 등수를 입력 순서대로 출력한다.
    
    - 본인 몸무게 키를 넣으면 등수가 반환되는 함수를 만든다.

*/


// // 각 사람(index)의 덩치 등수를 계산하는 함수
// function getBodyRank(index) {

//     const weight = infos[index][0]; // 현재 사람의 몸무게
//     const height = infos[index][1]; // 현재 사람의 키

//     let rank = 1; // 기본 등수는 1

//     // 덩치 등수 계산
//     for (let i = 0; i < infos.length; i++){
//         if (i != index) { // 본인 정보 제외
//             if (infos[i][0] > weight && infos[i][1] > height) { // 덩치가 큰 경우
//                 rank++; // 등수 증가
//             }
//         }
//     }
//     return rank;

// }

// // 입력 처리
// const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

// input.shift(); // 첫 줄(N)은 사용하지 않으므로 제거
// const infos = input.map(a => a.split(' ').map(Number)); // 숫자 배열로 변환

// const ranks = []; // 등수를 담을 배열 선언

// for (let i = 0; i < infos.length; i++){
//     ranks.push(getBodyRank(i)); // 등수를 구하여 배열에 선언
// }

// const result = ranks.join(" "); // 결과를 위한 출력문 연결
// console.log(result); // 결과 출력



// 각 사람(index)의 덩치 등수를 계산하는 함수
function getBodyRank(index) {
    const weight = infos[index][0];  // 현재 사람의 몸무게
    const height = infos[index][1];  // 현재 사람의 키

    let rank = 1;  // 기본 등수는 1

    for (let i = 0; i < infos.length; i++) {
        if (i === index) continue;  // 자기 자신은 비교에서 제외

        const [otherWeight, otherHeight] = infos[i];

        // 다른 사람이 몸무게, 키 모두 더 클 경우 등수 증가
        if (otherWeight > weight && otherHeight > height) {
            rank++;
        }
    }

    return rank;
}


// ⬇️ 입력 처리
const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

input.shift();  // 첫 줄(N)은 사용하지 않으므로 제거
const infos = input.map(line => line.split(' ').map(Number));  // 숫자 배열로 변환

// ⬇️ 등수 계산
const ranks = infos.map((_, index) => getBodyRank(index));

// ⬇️ 출력
console.log(ranks.join(' '));