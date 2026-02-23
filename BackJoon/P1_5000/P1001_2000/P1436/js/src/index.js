function printResult(input) {
  var number = 0;
  var count = 0;

  while (count < input) {
    number++;
    if (String(number).includes("666")) {
      count++;
    }
  }

  return number;
}

function main() {
  const fs = require("fs");
  const input = fs.readFileSync("/dev/stdin").toString().trim();

  const output = printResult(Number(input));
  console.log(output);
}

if (require.main === module) {
  main();
}

module.exports = {
  printResult,
};
