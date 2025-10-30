const { printResult } = require("../src/index");

describe("BOJ 2442 - 별 찍기 - 5", () => {
  test("case-1 (N=1)", () => {
    expect(printResult([1])).toEqual("*");
  });

  test("case-2 (N=2)", () => {
    expect(printResult([2])).toEqual(" *\n***");
  });

  test("case-3 (N=3)", () => {
    expect(printResult([3])).toEqual("  *\n ***\n*****");
  });

  test("case-4 (N=4)", () => {
    expect(printResult([4])).toEqual("   *\n  ***\n *****\n*******");
  });
});
