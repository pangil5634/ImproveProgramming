const { printResult } = require("../src/index");

describe("BOJ 27918 - 탁구 경기", () => {
  test("예제 입력 1", () => {
    expect(printResult([5, "D", "P", "P", "D", "D"])).toBe("3:2");
  });

  test("예제 입력 2", () => {
    expect(
      printResult([5, "D", "P", "P", "D", "D", "P", "P", "P", "D", "D"])
    ).toBe("3:5");
  });
});
