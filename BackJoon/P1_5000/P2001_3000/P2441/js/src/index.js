function printResult(n) {
  return Array.from(
    { length: n },
    (_, i) => " ".repeat(i) + "*".repeat(n - i),
  ).join("\n");
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
