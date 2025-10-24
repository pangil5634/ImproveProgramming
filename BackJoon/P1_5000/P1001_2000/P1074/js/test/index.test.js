const { printResult } = require("../src/index");

describe("BOJ 1074 - Z", () => {
  test("예제 입력 1", () => {
    expect(printResult([2, 3, 1])).toBe(11);
  });

  test("예제 입력 2", () => {
    expect(printResult([3, 7, 7])).toBe(63);
  });
  test("예제 입력 3", () => {
    expect(printResult([1, 0, 0])).toBe(0);
  });
  test("예제 입력 4", () => {
    expect(printResult([4, 7, 7])).toBe(63);
  });
  test("예제 입력 5", () => {
    expect(printResult([10, 511, 511])).toBe(262143);
  });
  test("예제 입력 6", () => {
    expect(printResult([10, 512, 512])).toBe(786432);
  });
});
