const { printResult } = require("../src/index");

describe("BOJ 2577 - 숫자의 개수", () => {
  test("case-1", () => {
    expect(printResult([150, 266, 427])).toEqual(
      "3\n1\n0\n2\n0\n0\n0\n2\n0\n0"
    );
  });
});
