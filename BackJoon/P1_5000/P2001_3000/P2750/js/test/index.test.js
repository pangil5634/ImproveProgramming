const { printResult } = require("../src/index");

describe("BOJ 2750 - 수 정렬하기", () => {
  test("case-1", () => {
    expect(printResult([5, 2, 3, 4, 1])).toEqual("1\n2\n3\n4\n5");
  });

  test("case-2", () => {
    expect(printResult([3, 2, 1])).toEqual("1\n2\n3");
  });
});
