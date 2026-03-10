function solution(numbers, queries) {
  // 문제점 : 시간초과
  const totalArr = [];
  for (const query of queries) {
    let total = 0;
    for (let i = query[0]; i <= query[1]; i++) {
      total += numbers[i - 1];
    }
    totalArr.push(total);
  }
  return totalArr;
}

function main() {
  const fs = require("fs");
  const input = fs
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split("\n")
    .map((data) => data.split(" ").map(Number));

  input.shift();
  const numbers = input[0].map(Number);
  input.shift();
  const queries = input.map((data) => data.map(Number));

  const output = solution(numbers, queries);
  console.log(output.join("\n"));
}

if (require.main === module) {
  main();
}

module.exports = {
  solution,
};
