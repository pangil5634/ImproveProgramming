function printResult(input) {
  const N = input.N;
  const M = input.M;
  const arr = input.arr;

  let totalCount = 0;
  let idx = 1;

  let numbers = Array.from({ length: N }).map((_, i) => i + 1);

  for (let i = 0; i < M; i++) {
    const target = arr[i]; // 대상

    // 현재 idx 값이 대상과 같은지 비교하기
    if (idx !== target) {
      // 같지 않으면, 현재 idx에서 대상까지 왼쪽과 오른쪽으로의 이동 횟수 구하기
      let leftCount = 0;
      let rightCount = 0;
      let indexIdx = numbers.indexOf(idx);
      let indexTarget = numbers.indexOf(target);

      if (indexIdx < indexTarget) {
        rightCount = indexTarget - indexIdx;
        leftCount = numbers.length - rightCount;
      } else {
        leftCount = indexIdx - indexTarget;
        rightCount = numbers.length - leftCount;
      }

      // 더 작은 횟수를 총 이동거리에 더하기
      const size = leftCount > rightCount ? rightCount : leftCount;
      totalCount += size;
    }

    // idx를 다음 대상 위치로 이동하기
    const targetIndex = numbers.indexOf(target);
    idx = numbers[(targetIndex + 1) % numbers.length];

    // 대상을 배열에서 지우기
    numbers.splice(targetIndex, 1);
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
