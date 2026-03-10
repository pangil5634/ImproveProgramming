/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  // 음수인 경우
  if (x < 0) return false;

  // 숫자를 문자열 배열로 변환 후 순회하면서 비교
  const stringArr = String(x).split("");
  for (let i = 0; i < stringArr.length; i++) {
    // 양 끝에서 하나씩 가운데로 오면서 비교
    if (stringArr[i] !== stringArr[stringArr.length - i - 1]) return false;
  }

  return true;
};

module.exports = {
  isPalindrome,
};
