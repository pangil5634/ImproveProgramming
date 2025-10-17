function printResult(inputs) {
  //1. A*B*C 값 구하기
  // reduce에 초기값을 넣기
  const calculateResult = inputs.reduce((total, num) => {
    return total * num;
  }, 1);

  // 2. 각 자리수마다 0~9의 횟수 구하기
  // map은 새 배열을 만드는 용도이므로, forEach 추천
  const numberMap = new Map();

  calculateResult
    .toString()
    .split("")
    .forEach((char) => {
      numberMap.set(char, (numberMap.get(char) || 0) + 1);
    });

  // 3. 결과 이어 붙이기
  const result = [];
  for (let i = 0; i <= 9; i++) {
    result.push(numberMap.get(i.toString()) || 0);
  }

  // 4. 반환하기
  return result.join("\n");
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
