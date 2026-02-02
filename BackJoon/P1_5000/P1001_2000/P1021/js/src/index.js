function printResult(input) {
  const N = input.N;
  const M = input.M;
  const arr = input.arr;

  let totalCount = 0;

  let numbers = Array.from({ length: N }).map((_, i) => i + 1);

  for (let i = 0; i < M; i++) {
    // 대상 값과 index 구하기
    const target = arr[i]; // 대상
    const indexTarget = numbers.indexOf(target);

    // 2번, 3번 연산 횟수 구하기
    const leftCount = indexTarget; // 2번 연산 횟수
    const rightCount = numbers.length - leftCount; // 3번 연산 횟수

    // 총 연산 횟수에 최소 이동 횟수로 더하기
    totalCount += Math.min(leftCount, rightCount);

    // target을 맨 앞으로 오게 회전
    const rightArr = numbers.slice(indexTarget);
    const leftArr = numbers.slice(0, indexTarget);
    numbers = rightArr.concat(leftArr);

    // 맨 앞(target) 제거
    numbers.shift();
  }

  return totalCount;
}

function main() {
  const fs = require("fs");
  const input = fs
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split("\n")
    .map((data) => data.split(" ").map(Number));

  const inputObj = {
    N: input[0][0],
    M: input[0][1],
    arr: input[1],
  };

  const output = printResult(inputObj);
  console.log(output);
}

if (require.main === module) {
  main();
}

module.exports = {
  printResult,
};
