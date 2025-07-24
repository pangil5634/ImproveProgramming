//  문제 내용
/*
    상근이는 자신의 결혼식에 학교 동기 중 자신의 친구와 친구의 친구를 초대하기로 했다. 
    상근이의 동기는 모두 N명이고, 이 학생들의 학번은 모두 1부터 N까지이다. 상근이의 학번은 1이다.
    상근이는 동기들의 친구 관계를 모두 조사한 리스트를 가지고 있다. 
    이 리스트를 바탕으로 결혼식에 초대할 사람의 수를 구하는 프로그램을 작성하시오.
*/

//  문제 분석
/*
    - 첫째줄 : 동기의 수 n
    - 둘째줄 : 리스트의 길이 m
    - m개줄 : 친구 관계 a, b
    - 학번 : 1부터 N까지
    - 상근이 학번 : 1
*/

//  문제 조건

/*
    입력
    - 첫째 줄에 상근이의 동기의 수 n (2 ≤ n ≤ 500)이 주어진다. 
    - 둘째 줄에는 리스트의 길이 m (1 ≤ m ≤ 10000)이 주어진다. 
    - 다음 줄부터 m개 줄에는 친구 관계 ai bi가 주어진다. 
    0 (1 ≤ ai < bi ≤ n) ai와 bi가 친구라는 뜻이며, bi와 ai도 친구관계이다. 

    출력
    - 첫째 줄에 상근이의 결혼식에 초대하는 동기의 수를 출력한다.
*/

//  예제 입력 및 출력
/*
    입력1
    6
    5
    1 2
    1 3
    3 4
    2 3
    4 5

    출력1
    3

    입력2
    6
    5
    2 3
    3 4
    4 5
    5 6
    2 5

    출력2
    0
*/


// 파일 시스템 모듈 불러오기
const fs = require('fs');

// 입력값을 한 줄씩 배열로 저장
const input = fs.readFileSync('/dev/stdin').toString().trim().split("\n");

const n = Number(input[0]); // 동기 수
const m = Number(input[1]); // 친구 관계 수

// 친구 관계 배열 만들기
const relations = input.slice(2).map((line) => line.split(" ").map(Number));

// 인접 리스트 생성
const graph = Array.from({ length: n + 1 }, () => []);
for (const [a, b] of relations) {
    graph[a].push(b);
    graph[b].push(a); // 양방향 관계
}

// 방문 여부 체크
const visited = Array(n + 1).fill(false);

// BFS 탐색 시작
let inviteCount = 0;
const queue = [];
visited[1] = true; // 상근이 방문 처리
// 친구 추가
for (const friend of graph[1]) {
    if (!visited[friend]) {
        visited[friend] = true;
        queue.push(friend);
        inviteCount++; // 친구는 바로 초대
    }
}

// 친구의 친구 탐색
while (queue.length > 0) {
    const current = queue.shift();
    for (const friend of graph[current]) {
        if (!visited[friend]) {
            visited[friend] = true;
            inviteCount++; // 친구의 친구 초대
        }
    }
}

console.log(inviteCount);

