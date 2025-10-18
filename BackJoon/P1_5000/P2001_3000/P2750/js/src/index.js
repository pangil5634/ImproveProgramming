function printResult(inputs) {
  // 1. 기존 배열 정렬하기
  const stored = [...inputs].sort((a, b) => a - b);

  // 2. 줄바꿈해서 이어 붙이기
  return stored.join("\n");
}

function main() {
  const fs = require("fs");
  const input = fs
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split("\n")
    .map(Number);

  input.shift();
  const output = printResult(input);
  console.log(output);
}

if (require.main === module) {
  main();
}

module.exports = {
  printResult,
};
