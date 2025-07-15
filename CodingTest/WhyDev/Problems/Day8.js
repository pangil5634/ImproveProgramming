//  문제 내용
/*
    빙고 게임은 다음과 같은 방식으로 이루어진다.
    먼저 아래와 같이 25개의 칸으로 이루어진 빙고판에 1부터 25까지 자연수를 한 칸에 하나씩 쓴다
    다음은 사회자가 부르는 수를 차례로 지워나간다. 예를 들어 5, 10, 7이 불렸다면 이 세 수를 지운 뒤 빙고판의 모습은 다음과 같다.
    차례로 수를 지워가다가 같은 가로줄, 세로줄 또는 대각선 위에 있는 5개의 모든 수가 지워지는 경우 그 줄에 선을 긋는다.
    이러한 선이 세 개 이상 그어지는 순간 "빙고"라고 외치는데, 가장 먼저 외치는 사람이 게임의 승자가 된다.
    철수는 친구들과 빙고 게임을 하고 있다. 철수가 빙고판에 쓴 수들과 사회자가 부르는 수의 순서가 주어질 때, 사회자가 몇 번째 수를 부른 후 철수가 "빙고"를 외치게 되는지를 출력하는 프로그램을 작성하시오.



*/

//  문제 분석
/*
    - 5*5 빙고판, 25개의 숫자
    - 세 개의 선이 그어지면, 빙고
    - 사회자가 몇 번째 수를 부르면 철수가 빙고를 외치는지 출력
*/

//  문제 조건

/*
    입력
    - 첫째 줄부터 다섯째 줄까지 빙고판에 쓰여진 수가 가장 위 가로줄부터 차례대로 한 줄에 다섯 개씩 빈 칸을 사이에 두고 주어진다. 
    - 여섯째 줄부터 열째 줄까지 사회자가 부르는 수가 차례대로 한 줄에 다섯 개씩 빈 칸을 사이에 두고 주어진다. 
    - 빙고판에 쓰여진 수와 사회자가 부르는 수는 각각 1부터 25까지의 수가 한 번씩 사용된다.
    
    출력
    - 첫째 줄에 사회자가 몇 번째 수를 부른 후 철수가 "빙고"를 외치게 되는지 출력한다.
*/

//  예제 입력 및 출력
/*
    입력
    11 12 2 24 10
    16 1 13 3 25
    6 20 5 21 17
    19 4 8 14 9
    22 15 7 23 18
    5 10 7 16 2
    4 22 8 17 13
    3 18 1 6 25
    12 19 23 14 21
    11 24 9 20 15

    출력
    15
*/

// 문제 풀이
/*
    - 목표 : 빙고판에 쓰여진 수와 사회자가 부르는 수를 비교하여 몇 번째 수를 부르면 빙고가 되는지 찾기
    
    - 빙고판을 2차원 배열로 저장
    - 사회자가 부르는 수를 순차적으로 확인
    - 부르는 수가 빙고판에 있는지 확인하고, 해당 위치를 지움
    - 가로, 세로, 대각선에 있는 수가 모두 지워졌는지 확인
    - 빙고가 되면 몇 번째 수를 부른 후인지 출력
    - 빙고가 되지 않으면 계속 진행
    - 빙고가 되면 해당 수의 인덱스를 출력

*/


// 입력 처리
const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const infos = input.map(line => line.split(' ').map(Number));  // 숫자 배열로 변환

const bingoBoard = infos.slice(0, 5);  // 빙고판
const calledNumbers = infos.slice(5);  // 사회자가 부르는 숫자


// 빙고판 초기화
const bingo = Array.from({ length: 5 }, () => Array(5).fill(false));

// 빙고판 숫자 위치 저장
const numberPosition = {};

bingoBoard.forEach((row, i) => {
    row.forEach((num, j) => {
        numberPosition[num] = [i, j];  // 숫자와 위치를 매핑
    });
});


// 빙고 체크 함수
function checkBingo() {
    let count = 0;

    // 가로 체크
    for (let i = 0; i < 5; i++) {
        if (bingo[i].every(cell => cell)) {
            count++;
        }
    }

    // 세로 체크
    for (let j = 0; j < 5; j++) {
        if (bingo.every(row => row[j])) {
            count++;
        }
    }

    // 대각선 체크
    if (bingo.every((row, idx) => row[idx])) {
        count++;
    }
    if (bingo.every((row, idx) => row[4 - idx])) {
        count++;
    }

    return count;
}

// 빙고 횟수 변수 초기화 
let bingoCount = 0;

// 빙고 게임 진행
for (let row of calledNumbers) {
    for (let num of row) {
        bingoCount++;  // 숫자 부른 횟수 증가
        
        const [x, y] = numberPosition[num];
        bingo[x][y] = true;

        if (checkBingo() >= 3) {
            console.log(bingoCount);
            process.exit(0);  // 빙고가 되면 프로그램 종료
        }
    }
}
