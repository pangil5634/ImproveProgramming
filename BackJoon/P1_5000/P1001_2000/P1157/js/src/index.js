function printResult(input) {
  // 1. 문자열을 분리한 배열을 생성한다.
  const strArr = input.toLowerCase().split("");

  // 2. 각 단어마다 전체 개수를 구한다.
  const countMap = {};

  for (const char of strArr) {
    countMap[char] = (countMap[char] || 0) + 1;
  }

  let maxCount = 0;
  let result = "";
  let isDuplicate = false;

  for (const char in countMap) {
    const count = countMap[char];

    if (count > maxCount) {
      maxCount = count;
      result = char;
      isDuplicate = false;
    } else if (count === maxCount) {
      isDuplicate = true;
    }
  }

  // 6. 결과를 출력한다.
  return isDuplicate ? "?" : result.toUpperCase();
}

function main() {
  const fs = require("fs");
  const input = fs.readFileSync("/dev/stdin").toString().trim();

  const output = printResult(input);
  console.log(output);
}

if (require.main === module) {
  main();
}

module.exports = {
  printResult,
};
