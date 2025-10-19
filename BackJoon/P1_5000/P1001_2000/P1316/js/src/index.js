function printResult(inputs) {
  // 1. 배열 분리
  const [n, ...words] = inputs;

  // 2. 각 문자 별 그룹 단어 체크 후 총 개수 반환
  return words.reduce((count, word) => count + checkGroupWord(word), 0);
}

// 특정 단어에 대한 그룹 단어인지 체크하는 함수
function checkGroupWord(word) {
  const usedChars = new Set();
  let prevChar = "";

  for (const char of word) {
    if (char !== prevChar) {
      if (usedChars.has(char)) {
        return false;
      }
      usedChars.add(char);
      prevChar = char;
    }
  }
  return true;
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
