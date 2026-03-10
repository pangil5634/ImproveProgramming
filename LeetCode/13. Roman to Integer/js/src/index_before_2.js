/**
 * @param {string} s
 * @return {number}
 *
 * 개선 목표
 * 현재 값 < 다음 값 → 빼기
 * 현재 값 ≥ 다음 값 → 더하기
 * : 이 규칙을 사용해서 구현해보기.
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
    if (map[s[i]] < map[s[i + 1]]) total -= map[s[i]];
    else total += map[s[i]];
  }

  return total;
};

module.exports = {
  romanToInt,
};
