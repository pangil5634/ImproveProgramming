const { printResult } = require("../src/index");

describe("BOJ 2445 - 별 찍기 - 8", () => {
  test("case-1 (N=5)", () => {
    expect(printResult([5])).toEqual(
      "*        *\n**      **\n***    ***\n****  ****\n**********\n****  ****\n***    ***\n**      **\n*        *",
    );
  });

  test("case-2 (N=4)", () => {
    expect(printResult([4])).toEqual(
      "*      *\n**    **\n***  ***\n********\n***  ***\n**    **\n*      *",
    );
  });

  test("case-3 (N=3)", () => {
    expect(printResult([3])).toEqual("*    *\n**  **\n******\n**  **\n*    *");
  });
});
