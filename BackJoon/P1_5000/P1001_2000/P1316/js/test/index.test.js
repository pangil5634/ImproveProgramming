const { printResult } = require("../src/index");

describe("BOJ 1316 - 그룹 단어 체커", () => {
  test("예제 입력 1", () => {
    expect(printResult([3, "happy", "new", "year"])).toBe(3);
  });

  test("예제 입력 2", () => {
    expect(printResult([4, "aba", "abab", "abcabc", "a"])).toBe(1);
  });

  test("예제 입력 3", () => {
    expect(printResult([5, "ab", "aa", "aca", "ba", "bb"])).toBe(4);
  });

  test("예제 입력 4", () => {
    expect(printResult([2, "yzyzy", "zyzyz"])).toBe(0);
  });

  test("예제 입력 5", () => {
    expect(printResult([1, "z"])).toBe(1);
  });

  test("예제 입력 6", () => {
    expect(
      printResult([
        9,
        "aaa",
        "aaazbz",
        "babb",
        "aazz",
        "azbz",
        "aabbaa",
        "abacc",
        "aba",
        "zzaz",
      ])
    ).toBe(2);
  });
});
