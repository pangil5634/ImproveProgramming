//  문제 내용
/*
    1부터 N까지 정수 N개로 이루어진 순열을 나타내는 방법은 여러 가지가 있다. 예를 들어, 8개의 수로 이루어진 순열 (3, 2, 7, 8, 1, 4, 5, 6)을 배열을 이용해 표현하면 사진과 같다. 또는, Figure 1과 같이 방향 그래프로 나타낼 수도 있다.
    순열을 배열을 이용해 사진로 나타냈다면, i에서 πi로 간선을 이어 그래프로 만들 수 있다.
    Figure 1에 나와있는 것 처럼, 순열 그래프 (3, 2, 7, 8, 1, 4, 5, 6) 에는 총 3개의 사이클이 있다. 이러한 사이클을 "순열 사이클" 이라고 한다.
    N개의 정수로 이루어진 순열이 주어졌을 때, 순열 사이클의 개수를 구하는 프로그램을 작성하시오.
*/

//  문제 분석
/*
    - 순열 사이클 : 예를 들어 1로 시작해서 1로 끝나면, 순열 사이클이 있다고 본다.
    - 주어진 순열에 존재하는 순열 사이클의 개수를 출력한다.
*/

//  문제 조건

/*
    입력
    - 첫째 줄에 테스트 케이스의 개수 T가 주어진다. 각 테스트 케이스의 첫째 줄에는 순열의 크기 N (2 ≤ N ≤ 1,000)이 주어진다. 둘째 줄에는 순열이 주어지며, 각 정수는 공백으로 구분되어 있다.
    
    출력
    - 각 테스트 케이스마다, 입력으로 주어진 순열에 존재하는 순열 사이클의 개수를 출력한다.
*/

//  예제 입력 및 출력
/*
    입력
    2
    8
    3 2 7 8 1 4 5 6
    10
    2 1 3 4 5 6 7 9 10 8

    출력
    3
    7
*/

// 문제 풀이
/*
    - 목표 : 주어진 순열에 존재하는 순열 사이클의 개수를 출력한다.

    
*/


// 이전 코드 (고민되는 부분으로 하면 좋을듯?)

// 입력 처리
// const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().trim().split("\n");

// const repeatCount = Number(input[0]);
// input.shift();

// // 각 테스트 케이스
// const testCases = input.map(line => {
//     const arr = line.trim().split(' ').map(Number);
//     return arr;
// });

// console.log(testCases);

// console.log(testCases);

// // 조합 함수 (DP 점화식 사용)
// function getCicleCounts(arrCount, originArr) {

//     // 사이클 횟수 
//     let cicleCount = 0;

//     // 방문 여부를 관리하는 배열
//     const visited = new Array(arrCount + 1).fill(false);

//     // 배열의 길이 만큼 반복
//     for (let i = 1; i <= arrCount; i++) {
        

//         // 아직 방문 전이라면,
//         if (!visited[i]) {

//             // 시작 값을 보관
//             let current = i;

//             // 사이클을 확인
//             while (!visited[current]) {
//                 visited[current] = true;
//                 current = originArr[current - 1];
//             }
            
//             // 사이클 증가
//             cicleCount++;
//         }
//     }

//     // 사이클 횟수 반환
//     return cicleCount;
// }

// // 각 테스트 케이스 처리 및 출력
// for (let i = 0; i < repeatCount*2; i= i+2) {
//     const arrCount = testCases[i];
//     const originArr = testCases[i+1];
//     console.log(getCicleCounts(arrCount, originArr));
// }



// 입력 데이터 읽기 및 전처리
const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split("\n");

const repeatCount = Number(input[0]);   // 테스트 케이스 개수
const testCases = [];                   // 각 테스트 케이스 저장용

// 테스트 케이스 데이터 분리
let idx = 1;
for (let i = 0; i < repeatCount; i++) {
    const arrCount = Number(input[idx]);                               // 순열의 크기 N
    const arr = input[idx + 1].trim().split(' ').map(Number);          // 순열 배열
    testCases.push([arrCount, arr]);                                   // [N, 순열배열] 형태로 저장
    idx += 2;
}


// 순열 사이클 개수 구하는 함수
function getCicleCounts(arrCount, originArr) {
    let cicleCount = 0;                                // 순열 사이클 개수 카운트
    const visited = new Array(arrCount + 1).fill(false);  // 방문 체크 배열 (1-based index)

    // 1번 노드부터 N번 노드까지 순회
    for (let i = 1; i <= arrCount; i++) {
        if (!visited[i]) {                 // 아직 방문하지 않은 노드면 사이클 시작
            let current = i;

            // 해당 사이클을 따라가며 방문 처리
            while (!visited[current]) {
                visited[current] = true;                    // 현재 노드 방문 체크
                current = originArr[current - 1];           // 다음 노드로 이동 (0-based 인덱스 주의)
            }

            cicleCount++;   // 사이클 하나 완성됨 → 개수 증가
        }
    }

    return cicleCount;    // 순열 사이클 개수 반환
}


// 각 테스트 케이스 처리 후 출력
testCases.forEach(([arrCount, originArr]) => {
    console.log(getCicleCounts(arrCount, originArr));    // 각 케이스 결과 출력
});