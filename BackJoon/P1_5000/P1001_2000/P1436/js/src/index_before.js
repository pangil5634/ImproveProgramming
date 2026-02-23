function printResult(input) {
  var number = 0;
  var count = 0;
  while (true) {
    number++;
    if (number.toString().includes("666")) {
      count++;
      if (count === input) {
        break;
      }
    }
  }

  return number;
}

function main() {
  const fs = require("fs");
  const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

  const output = printResult(Number(input));
  console.log(output);
}

if (require.main === module) {
  main();
}

module.exports = {
  printResult,
};
