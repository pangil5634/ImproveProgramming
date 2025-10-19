function printResult(inputs) {
  // 1. 배열 분리
  const [n, ...words] = inputs;

  // 2. 각 문자 별 그룹 단어 체크 후 총 개수 반환
  return words.reduce((count, word) => count + checkGroupWord(word), 0);
}

// 특정 단어에 대한 그룹 단어인지 체크하는 함수
function checkGroupWord(word) {
  let isCheck = true; // 그룹단어 여부
  let beforeChar = ""; // 직전 문자
  let charSet = new Set(); // 등장한 문자를 담는 Set
  const wordCharArr = word.split(""); // 특정 단어를 문자로 분리한 배열

  // 1. 단어의 각 문자 별로 순회하면서 체크
  for (let i = 0; i < wordCharArr.length; i++) {
    // 2. 이전 문자와 현재 문자가 같은지 체크
    if (beforeChar === wordCharArr[i]) {
      continue;
    }

    // 3. 현재 문자가 이전에 등장했는지 체크
    if (!charSet.has(wordCharArr[i])) {
      // 3-1-1. 등장하지 않았으므로, 새로운 문자를 Set에 추가
      charSet.add(wordCharArr[i]);

      // 3-1-2. 현재 문자를 직전 문자로 할당
      beforeChar = wordCharArr[i];
    } else {
      // 3-2-1. 직전 문자와 현재 문자가 같지 않고, 현재 문자는 이전에 등장했기에 그룹단어로 미인정
      isCheck = false;
      break;
    }
  }
  return isCheck ? 1 : 0;
}

function main() {
  const fs = require("fs");
  const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

  const [n, ...words] = input;
  const N = Number(n);

  const output = printResult([N, ...words]);
  console.log(output);
}

if (require.main === module) {
  main();
}

module.exports = {
  printResult,
};
