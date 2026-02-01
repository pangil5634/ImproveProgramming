const { printResult } = require("../src/index");

describe("BOJ 1021 - 회전하는 큐", () => {
  test("case-1", () => {
    const input = {
      N: 10,
      M: 3,
      arr: [1, 2, 3],
    };
    expect(printResult(input)).toEqual(0);
  });

  test("case-2", () => {
    const input = {
      N: 10,
      M: 3,
      arr: [2, 9, 5],
    };
    expect(printResult(input)).toEqual(8);
  });

  test("case-3", () => {
    const input = {
      N: 32,
      M: 6,
      arr: [27, 16, 30, 11, 6, 23],
    };
    expect(printResult(input)).toEqual(59);
  });

  test("case-4", () => {
    const input = {
      N: 10,
      M: 10,
      arr: [1, 6, 3, 2, 7, 9, 8, 4, 10, 5],
    };
    expect(printResult(input)).toEqual(14);
  });
});
