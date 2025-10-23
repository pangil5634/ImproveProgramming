const { printResult } = require("../src/index");

describe("BOJ 1316 - 그룹 단어 체커", () => {
  test("예제 입력 1", () => {
    expect(printResult([20, 30, 10])).toBe(20);
  });

  test("예제 입력 2", () => {
    expect(printResult([30, 30, 10])).toBe(30);
  });
  test("예제 입력 3", () => {
    expect(printResult([40, 40, 40])).toBe(40);
  });
  test("예제 입력 4", () => {
    expect(printResult([20, 10, 10])).toBe(10);
  });
});
