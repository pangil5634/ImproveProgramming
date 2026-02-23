const { printResult } = require("../src/index");

describe("BOJ 1436 - 영화감독 숌", () => {
  test("case-1", () => {
    const input = 2;
    expect(printResult(input)).toEqual(1666);
  });

  test("case-2", () => {
    const input = 3;
    expect(printResult(input)).toEqual(2666);
  });

  test("case-3", () => {
    const input = 6;
    expect(printResult(input)).toEqual(5666);
  });

  test("case-4", () => {
    const input = 187;
    expect(printResult(input)).toEqual(66666);
  });

  test("case-5", () => {
    const input = 500;
    expect(printResult(input)).toEqual(166699);
  });
});
