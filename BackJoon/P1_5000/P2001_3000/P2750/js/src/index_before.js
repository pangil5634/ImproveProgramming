function printResult(inputs) {
  // 1. 기존 배열 정렬하기
  inputs.sort((a, b) => a - b);

  // 2. set 만들기
  const arrSet = new Set(inputs);

  // 3. 줄바꿈해서 이어 붙이기
  return Array.from(arrSet).join("\n");
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
