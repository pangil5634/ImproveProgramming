//  문제 내용
/*
    방향 없는 그래프가 주어졌을 때, 연결 요소 (Connected Component)의 개수를 구하는 프로그램을 작성하시오.
*/

//  문제 분석
/*
    - 정점(vertex) : N
    - 간선(edge) : M
    - M개 줄에 대한 양 끝점 : u, v
    - 같은 간선은 1번만
*/

//  문제 조건

/*
    입력
    - 첫째 줄에 정점의 개수 N과 간선의 개수 M이 주어진다. (1 ≤ N ≤ 1,000, 0 ≤ M ≤ N×(N-1)/2) 
    - 둘째 줄부터 M개의 줄에 간선의 양 끝점 u와 v가 주어진다. (1 ≤ u, v ≤ N, u ≠ v) 
    - 같은 간선은 한 번만 주어진다.

    출력
    - 첫째 줄에 연결 요소의 개수를 출력한다.
*/

//  예제 입력 및 출력
/*
    입력1
    6 5
    1 2
    2 5
    5 1
    3 4
    4 6

    출력1
    2

    입력2
    6 8
    1 2
    2 5
    5 1
    3 4
    4 6
    5 4
    2 4
    2 3
    
    출력2
    1
*/

// 문제 풀이
/*
    - 목표 : 보성이가 벌칙을 당하는 숫자를 불러야 한다. (출력하기)

    - 예를 들어 0 -> 1 -> 3이라는 흐름이 있으면, 2를 외치면 보성이가 걸린다.
    - 방법이 없으면 -1을 출력한다.
    
*/

// 입력 처리
const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split("\n");

// 첫 번째 줄 : N(정점 개수), M(간선 개수)
const [N, M] = input[0].split(" ").map(Number);

// 간선 정보 추출
input.shift();
const edges = [];
input.forEach(edge => edges.push(edge.split(" ").map(Number)));

// 방문 여부 기록 배열 (1번부터 사용, 0번 인덱스는 무시)
const visited = new Array(N + 1).fill(false);

// 인접 리스트 형태로 그래프 초기화
const graph = Array.from({ length: N + 1 }, () => []);

// 무방향 그래프 : 서로 연결된 정점 추가
for (let [u, v] of edges) {
    graph[u].push(v);
    graph[v].push(u);
}

// BFS 함수 : 시작 노드에서 연결된 모든 노드를 방문 처리
function bfs(start) {
    const queue = [start];
    visited[start] = true;

    while (queue.length) {
        const current = queue.shift();

        graph[current].forEach(next => {
            if (!visited[next]) {
                visited[next] = true;
                queue.push(next);
            }
        });
    }
}

// 연결 요소 개수 세기
let count = 0;

// 1번부터 N번 정점까지 모두 확인
for (let node = 1; node <= N; node++) {
    // 아직 방문하지 않은 노드라면 → 새로운 연결 요소 시작
    if (!visited[node]) {
        bfs(node);    // 해당 노드와 연결된 모든 노드 방문 처리
        count++;      // 연결 요소 하나 발견했으므로 count 증가
    }
}

// 연결 요소의 총 개수 출력
console.log(count);