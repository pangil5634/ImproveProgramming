function printResult(inputs) {
  const calculateResult = inputs.reduce((total, num) => {
    return total * num;
  });

  const numberMap = new Map();

  calculateResult
    .toString()
    .split("")
    .map((char) => {
      numberMap.set(char, (numberMap.get(char) || 0) + 1);
    });

  let result = "";
  for (let i = 0; i <= 9; i++) {
    const perResult = numberMap.get(i.toString()) || "0";
    if (i < 9) result = result + perResult + "\n";
    else result = result + perResult;
  }
  return result;
}

function main() {
  const fs = require("fs");
  const input = fs
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split("\n")
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
