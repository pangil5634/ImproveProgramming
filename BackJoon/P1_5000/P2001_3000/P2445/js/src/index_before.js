function printResult(n) {
  let arr1 = Array.from(
    { length: n },
    (_, i) =>
      "*".repeat(i + 1) + " ".repeat(2 * (n - i - 1)) + "*".repeat(i + 1),
  ).join("\n");

  let arr2 = Array.from(
    { length: n - 1 },
    (_, i) =>
      "*".repeat(n - 1 - i) + " ".repeat(2 * (i + 1)) + "*".repeat(n - 1 - i),
  ).join("\n");

  return arr1 + "\n" + arr2;
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
