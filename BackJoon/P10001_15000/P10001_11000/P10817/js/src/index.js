function printResult(numbers) {
  let first = -Infinity;
  let second = -Infinity;

  for (const num of numbers) {
    if (num > first) {
      second = first;
      first = num;
    } else if (num > second) {
      second = num;
    }
  }

  return second;
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
