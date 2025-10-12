function printResult(input) {
  // 1. 문자열을 분리한 배열을 생성한다.
  const strArr = [];
  for (let i = 0; i < input.length; i++) {
    const char = input.substr(i, 1);
    strArr.push(char.toLowerCase());
  }

  // 2. 중복 없는 배열을 생성한다.
  const strSet = new Set(strArr);

  // 3. 각 단어마다 전체 개수를 구한다.
  const charCountInfo = [];

  Array.from(strSet).map((data, index) =>
    charCountInfo.push({
      char: data,
      count: strArr.filter((element) => element == data).length,
    })
  );

  // 4. 알파벳 중 가장 큰 횟수를 가진 숫자를 구한다.
  let maxCount = 0;
  for (let i = 0; i < charCountInfo.length; i++) {
    if (charCountInfo[i].count >= maxCount) {
      maxCount = charCountInfo[i].count;
    }
  }

  // 5. 가장 많이 등장한 횟수와 일치한 알파벳을 구한다.
  const maxChar = [];
  for (let i = 0; i < charCountInfo.length; i++) {
    if (charCountInfo[i].count == maxCount) {
      maxChar.push(charCountInfo[i].char);
    }
  }

  // 6. 결과를 출력한다.
  return maxChar.length === 1 ? maxChar[0].toUpperCase() : "?";
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
