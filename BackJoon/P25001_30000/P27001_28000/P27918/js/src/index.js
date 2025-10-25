function printResult(inputs) {
  const [N, ...arr] = inputs;

  let D = 0;
  let P = 0;
  for (choice of arr) {
    if (choice === "D") D++;
    if (choice === "P") P++;

    if (Math.abs(D - P) >= 2) {
      return `${D}:${P}`;
    }
  }

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
