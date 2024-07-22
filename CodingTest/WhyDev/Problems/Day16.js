//  문제 내용
/*
    우리 나라는 가족 혹은 친척들 사이의 관계를 촌수라는 단위로 표현하는 독특한 문화를 가지고 있다. 
    이러한 촌수는 다음과 같은 방식으로 계산된다. 
    기본적으로 부모와 자식 사이를 1촌으로 정의하고 이로부터 사람들 간의 촌수를 계산한다. 
    
    예를 들면 나와 아버지, 아버지와 할아버지는 각각 1촌으로 나와 할아버지는 2촌이 되고, 
    아버지 형제들과 할아버지는 1촌, 나와 아버지 형제들과는 3촌이 된다.

    여러 사람들에 대한 부모 자식들 간의 관계가 주어졌을 때, 주어진 두 사람의 촌수를 계산하는 프로그램을 작성하시오.
*/

//  문제 분석
/*
    - line1 : 전체 사람의 수 : n
    - line2 : 촌수 계산 인원 : a, b
    - line3 : 부모자식 관계의 수 : m
    - line4 : 부모 번호, 자식 번호
    - 각 사람의 부모는 최대 한 명
    - 친척 관계가 없는 경우 -1을 출력
*/

//  문제 조건

/*
    입력
    - 사람들은 1, 2, 3, …, n (1 ≤ n ≤ 100)의 연속된 번호로 각각 표시된다. 
    - 입력 파일의 첫째 줄에는 전체 사람의 수 n이 주어지고, 
    - 둘째 줄에는 촌수를 계산해야 하는 서로 다른 두 사람의 번호가 주어진다. 
    - 그리고 셋째 줄에는 부모 자식들 간의 관계의 개수 m이 주어진다. 
    - 넷째 줄부터는 부모 자식간의 관계를 나타내는 두 번호 x,y가 각 줄에 나온다. 
    - 이때 앞에 나오는 번호 x는 뒤에 나오는 정수 y의 부모 번호를 나타낸다.

    - 각 사람의 부모는 최대 한 명만 주어진다.

    출력
    - 입력에서 요구한 두 사람의 촌수를 나타내는 정수를 출력한다. 
    - 어떤 경우에는 두 사람의 친척 관계가 전혀 없어 촌수를 계산할 수 없을 때가 있다. 
    - 이때에는 -1을 출력해야 한다.
*/

//  예제 입력 및 출력
/*
    입력1
    9
    7 3
    7
    1 2
    1 3
    2 7
    2 8
    2 9
    4 5
    4 6

    출력1
    3

    입력2
    9
    8 6
    7
    1 2
    1 3
    2 7
    2 8
    2 9
    4 5
    4 6
    
    출력2
    -1
*/



// 입력 처리
const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split("\n");

// 첫 번째 줄 : n(전체 사람의 수)
const n = Number(input[0]);
input.shift();

// 두 번째 줄 : a, b(촌수 계산 인원)
const [a, b] = input[0].split(" ").map(Number);
input.shift();

// 세 번째 줄 : m(부모자식 관계의 수)
const m = Number(input[0]);
input.shift();

// 부모자식 관계 정보 추출
const edges = [];
input.forEach(edge => edges.push(edge.split(" ").map(Number)));

// 방문 여부 기록 배열
const visited = new Array(n + 1).fill(false);

// 인접 리스트 형태로 그래프 초기화
const graph = Array.from({ length: n + 1 }, () => []);

// 무방향 그래프 : 서로 연결된 관계 추가
for (let [u, v] of edges) {
    graph[u].push(v);
    graph[v].push(u);
}

// BFS 함수 : 시작 노드(start)에서 목표 노드(target)까지 몇 촌인지 계산하는 함수
function bfs(start, target) {

    // 큐(queue)에 시작 노드와 현재 촌수를 넣음
    // 큐에는 [사람 번호, 지금까지 센 촌수] 형태로 저장됨
    const queue = [[start, 0]];

    // 시작 노드는 방문 처리 (자기 자신은 다시 방문하지 않도록)
    visited[start] = true;

    // 큐가 빌 때까지 반복 (탐색 계속)
    while (queue.length) {

        // 큐에서 하나 꺼내기 : 현재 사람과 지금까지의 촌수
        const [current, count] = queue.shift();

        // 만약 목표 사람을 찾았다면? -> 지금까지의 촌수를 바로 반환
        if (current === target) {
            return count;
        }

        // 현재 사람과 연결된 모든 사람을 하나씩 확인
        graph[current].forEach(next => {

            // 아직 방문하지 않은 사람이라면
            if (!visited[next]) {
                visited[next] = true;              // 방문 처리
                queue.push([next, count + 1]);     // 큐에 추가 (촌수 1 증가시켜서)
            }

        });
    }

    // 큐를 다 돌았는데도 목표 사람을 찾지 못했다면 -> 서로 연결되지 않은 상태
    return -1;
}

const result = bfs(a, b);
console.log(result);