const { printResult } = require("../src/index");

describe("BOJ 2441 - 별 찍기 - 3", () => {
  test("case-1 (N=7)", () => {
    expect(printResult([7])).toEqual(
      "*******\n ******\n  *****\n   ****\n    ***\n     **\n      *",
    );
  });

  test("case-1 (N=5)", () => {
    expect(printResult([5])).toEqual("*****\n ****\n  ***\n   **\n    *");
  });

  test("case-1 (N=3)", () => {
    expect(printResult([3])).toEqual("***\n **\n  *");
  });
});
