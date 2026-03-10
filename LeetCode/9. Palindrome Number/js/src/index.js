/**
 * @param {number} x
 * @return {boolean}
 *
 * 개선 목표 : 문자열로 형변환 하지 않고 구현해보기
 */
var isPalindrome = function (x) {
  // 음수인 경우
  if (x < 0) return false;

  // 10의 배수인 경우 (0으로 끝나는 경우)
  if (x !== 0 && x % 10 === 0) return false;

  let reversed = 0;

  // 절반만 뒤집기
  while (x > reversed) {
    const digit = x % 10;

    reversed = reversed * 10 + digit;

    x = Math.floor(x / 10);
  }

  // 짝수 자리 / 홀수 자리 처리
  return x === reversed || x === Math.floor(reversed / 10);
};

module.exports = {
  isPalindrome,
};
