function printResult(inputs) {
  let [N, r, c] = inputs;
  let result = 0;

  while (N > 0) {
    const half = 2 ** (N - 1);
    const size = half * half;

    // 사분면 번호 계산
    const quadrant = (r >= half ? 2 : 0) + (c >= half ? 1 : 0);

    // 누적 값 계산
    result += size * quadrant;

    // 좌표 보정
    if (r >= half) r -= half;
    if (c >= half) c -= half;

    N--;
  }

  return result;
}

function main() {
  const fs = require("fs");
  const input = fs
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split(" ")
    .map(Number);
  const output = printResult(input);
  console.log(output);
}

if (require.main === module) {
  main();
}

module.exports = {
  printResult,
};
