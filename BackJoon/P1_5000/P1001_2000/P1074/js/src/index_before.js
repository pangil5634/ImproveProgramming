function printResult(inputs) {
  let [N, r, c] = inputs;
  let result = 0;

  while (N > 0) {
    const half = 2 ** (N - 1);
    const size = half * half;

    if (r < half && c < half) {
      // 1사분면 (0)
    } else if (r < half && c >= half) {
      // 2사분면 (1)
      result += size;
      c -= half;
    } else if (r >= half && c < half) {
      // 3사분면 (2)
      result += size * 2;
      r -= half;
    } else if (r >= half && c >= half) {
      // 4사분면 (3)
      result += size * 3;
      r -= half;
      c -= half;
    }
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
