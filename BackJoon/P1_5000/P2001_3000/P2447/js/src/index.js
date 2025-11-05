function isStar(x, y) {
  if (x % 3 === 1 && y % 3 === 1) {
    return false;
  }

  if (x < 3 && y < 3) {
    return true;
  }

  return isStar(Math.floor(x / 3), Math.floor(y / 3));
}

function printResult(n) {
  let result = [];

  for (let i = 0; i < n; i++) {
    let line = "";

    for (let j = 0; j < n; j++) {
      line += isStar(i, j) ? "*" : " ";
    }

    result.push(line);
  }

  return result.join("\n");
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
