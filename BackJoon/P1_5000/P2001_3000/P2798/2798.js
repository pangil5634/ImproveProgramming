/*
    블랙잭 : 카드 합이 21을 넘지 않는 한도 내에서, 카드의 합을 최대한 크게 만드는 게임

    1. 카드에는 양의 정수가 쓰여 있다.
    2. 딜러는 N장의 카드를 모두 숫자가 보이도록 바닥에 놓는다.
    3. 딜러는 숫자 M을 크게 외친다.
    4. 플레이어들은 제한된 시간 안에 N장의 카드 중 3장의 카드를 골라야 한다.
    5. 고른 카드의 합이 M을 넘지 않으면서 M과 최대한 가깝게 만들어야 한다.

    문제 : N장의 카드에 써져 있는 숫자가 주어졌을 때, M을 넘지 않으면서 M에 최대한 가까운 카드 3장의 합을 구해 출력하기.

    입력
    - 카드의 개수 N, M
    - 카드에 쓰여져 있는 수
*/

const fs = require("fs");
const input = fs.readFileSync('/dev/stdin').toString().trim().split("\n");

const [N, M] = input[0].split(" ").map(Number);
const arr = input[1].split(" ").map(Number);

let result = 0;

for (let i = 0; i < N-2; i++){
    for (let j = i+1; j < N-1; j++){
        for (let z = j+1; z < N; z++){
            const total = arr[i] + arr[j] + arr[z];
            if (total <= M && total > result) {
                result = total;
            }
        }
    }
}
console.log(result);