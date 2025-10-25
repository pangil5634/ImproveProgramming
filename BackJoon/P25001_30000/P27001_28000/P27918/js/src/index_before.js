function printResult(inputs) {
  const [, ...arr] = inputs;

  let D = 0;
  let P = 0;
  const LIMIT = 2;

  for (const choice of arr) {
    // 예측 판별
    if (choice === "D") {
      D++;
    } else if (choice === "P") {
      P++;
    }

    // 격차 쳌
    if (Math.abs(D - P) === LIMIT) {
      break;
    }
  }

  // 결과 반환
  return `${D}:${P}`;
}

function main() {
  const fs = require("fs");
  const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
  const output = printResult(input);
  console.log(output);
}

if (require.main === module) {
  main();
}

module.exports = {
  printResult,
};
