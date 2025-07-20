//  문제 내용
/*
    중앙대학교 소프트웨어대학 새내기들을 맞이하게 된 17학번 김영기는 두 학번이라는 차이를 극복하기 위해 새내기들과 친해지려고 노력하고 있다. 
    그 노력 중 하나는 바로 새내기들과의 술자리에 참여하는 것이다. 
    그러나 혼자 가기에 민망했던 영기는 동기 보성이를 꼬셔 같이 술자리에 참석했다. 
    새내기들과 같이 술을 마시게 된 영기와 보성이는 분위기가 가라 앉을 때쯤 The Game of Death라고 불리는 죽음의 술게임을 제안한다.

    죽음의 게임의 룰은 간단하다.
    게임에 참여하는 N명의 사람들은 원탁에 둘러앉게 된다. 
    게임을 시작하는 사람은 0번, 그 오른쪽 사람은 1번, 그 오른쪽은 2번, N-1번의 오른쪽 사람은 다시 0번이 된다.
    
    0번이 "신난다! 아싸 재미난다! 아싸 더 게임 오브 데! 스!" 라고 외침과 동시에, 모든 사람들은 각각 테이블에 둘러 앉은 사람들 중 한 명을 지목한다. 
    그리고 나서 0번은 임의의 양의 정수 M을 외친다.
    그 다음, 0번은 "1"이라고 말한다. 
    이때 "1"이라고 말한 사람이 지목한 사람은 "2"라고 말하고, "2"라고 말한 사람이 지목한 사람은 "3"이라고 말하고, 같은 방식으로 반복해 M까지 말하게 된다. 
    이때 마지막으로 M이라고 말한 사람이 지목한 사람은 벌주를 마시게 된다.

    새내기에게 벌주를 마시게 하기에는 죄책감이 들었던 영기는 동기인 보성이를 공격하기로 결심했다. 
    게임 참여자들간에 지목을 완료한 상태가 주어질때, 보성이가 벌주를 마시기 위해 영기가 불러야 하는 가장 작은 양의 정수 M을 보성이 몰래 귀띔해 주도록 하자.

    김영기는 게임을 제안하였기에 자연스럽게 0번이 된다.
*/

//  문제 분석
/*
    - N : 사람 수, K : 보성이 번호
    - 줄마다 지목하고자 하는 사람의 수 (origin -> next)
    - 게임 시작하는 사람은 0번
    - 보성이가 벌주를 마시기 위해 영기가 불러야 하는 작은 양의 정수 M을 찾기.
    - 방법이 없으면, -1을 출력
*/

//  문제 조건

/*
    입력
    - 첫 번째 줄에 게임에 참여하는 사람의 수 N(3 ≤ N ≤ 150)과 보성이의 번호 K(1 ≤ K ≤ N - 1)가 공백을 두고 주어진다.
    - 두번째 줄부터 N줄에 걸쳐 i(0 ≤ i ≤ N - 1)번 사람이 지목하는 사람의 번호 ai(0 ≤ ai ≤ N - 1)가 주어진다. 자기 자신을 지목하는 경우도 존재할 수 있다.

    출력
    - 영기가 말해야 하는 가장 작은 양의 정수 M을 출력한다. 만약 어떤 방법으로도 보성이가 걸리지 않는다면 -1을 출력한다.
*/

//  예제 입력 및 출력
/*
    입력1
    5 3
    1
    3
    2
    1
    4

    출력1
    2

    입력2
    6 2
    1
    3
    5
    4
    0
    2
    
    출력2
    -1
*/

// 문제 풀이
/*
    - 목표 : 보성이가 벌칙을 당하는 숫자를 불러야 한다. (출력하기)

    - 예를 들어 0 -> 1 -> 3이라는 흐름이 있으면, 2를 외치면 보성이가 걸린다.
    - 방법이 없으면 -1을 출력한다.
    
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

// 인원수(N)와 보성이 번호(K) 추출
const [memberCount, boseong] = input[0].split(" ").map(Number);

// 첫 번째 줄(조건) 제거 후 선택지 배열 생성
input.shift();
const choiceArr = [];
input.forEach(choice => choiceArr.push(Number(choice)));

// 방문 여부를 체크할 배열 (N명)
const visited = new Array(memberCount).fill(false);

// 변수 초기화
let current = 0;                    // 0번 부터 시작
let isBoseong = false;              // 보성을 만났는지 여부
let count = 0;                      // 외쳐야 하는 숫자 (최종 M)

// 지목을 따라가며 탐색
while (!visited[current]) {

    // 현재 지목된 사람이 보성인 경우
    if (current === boseong) {
        isBoseong = true;
        break;
    }

    // 아직 보성을 만나지 못한 경우
    visited[current] = true;        // 현재 사람 방문 체크
    count++;                        // 외친 횟수 증가
    current = choiceArr[current];   // 다음 지목된 사람으로 이동
}

// 결과 출력
if (isBoseong) {
    console.log(count);             // 보성이가 벌칙을 받게 되는 M 출력
} else {
    console.log(-1);                // 끝까지 가도 보성을 못 만나면 -1 출력
}   



