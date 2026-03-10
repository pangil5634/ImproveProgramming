/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  let total = 0; // 합계

  const stringArr = s.split(""); // 입력값을 파싱한 배열

  for (let i = 0; i < stringArr.length; i++) {
    console.log(stringArr[i]);
    if (i !== stringArr.length) {
      if (stringArr[i] === "I") {
        if (stringArr[i + 1] === "V") {
          i++;
          total += 4;
          continue;
        } else if (stringArr[i + 1] === "X") {
          i++;
          total += 9;
          continue;
        }
      } else if (stringArr[i] === "X") {
        if (stringArr[i + 1] === "L") {
          i++;
          total += 40;
          continue;
        } else if (stringArr[i + 1] === "C") {
          i++;
          total += 90;
          continue;
        }
      } else if (stringArr[i] === "C") {
        if (stringArr[i + 1] === "D") {
          i++;
          total += 400;
          continue;
        } else if (stringArr[i + 1] === "M") {
          i++;
          total += 900;
          continue;
        }
      }
    }

    switch (stringArr[i]) {
      case "I":
        total += 1;
        break;
      case "V":
        total += 5;
        break;
      case "X":
        total += 10;
        break;
      case "L":
        total += 50;
        break;
      case "C":
        total += 100;
        break;
      case "D":
        total += 500;
        break;
      case "M":
        total += 1000;
        break;
    }
  }

  return total;
};

module.exports = {
  isPalindrome,
};
