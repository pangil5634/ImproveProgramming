/**
 * @param {string} s
 * @return {number}
 *
 * 개선 목표
 * : 마지막 구조가 undefined되는 문제 해결하기
 */

const map = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
};

var romanToInt = function (s) {
  let total = 0; // 합계

  for (let i = 0; i < s.length; i++) {
    const current = map[s[i]];
    const next = map[s[i + 1]];

    if (current < next) total -= current;
    else total += current;
  }

  return total;
};

module.exports = {
  romanToInt,
};
