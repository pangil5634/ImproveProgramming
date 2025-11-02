function printResult(n) {
  const result = [];

  for (let i = 0; i < n; i++) {
    result.push(line(i + 1, 2 * (n - i - 1)));
  }

  for (let i = n - 2; i >= 0; i--) {
    result.push(line(i + 1, 2 * (n - i - 1)));
  }

  return result.join("\n");
}

function line(stars, spaces) {
  return "*".repeat(stars) + " ".repeat(spaces) + "*".repeat(stars);
}

function main() {
  const fs = require("fs");
  const input = Number(fs.readFileSync("/dev/stdin").toString().trim());

  const output = printResult(input);
  console.log(output);
}

if (require.main === module) {
  main();
}

module.exports = {
  printResult,
};
