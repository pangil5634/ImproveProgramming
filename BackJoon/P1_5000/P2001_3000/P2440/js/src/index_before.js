function printResult(input) {
  let result = "";
  for (let i = input; i > 0; i--) {
    let string = "";
    for (let j = 0; j < i; j++) {
      string = string.concat("*");
    }

    if (i !== 1) result = result + string + "\n";
    else result = result + string;
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
