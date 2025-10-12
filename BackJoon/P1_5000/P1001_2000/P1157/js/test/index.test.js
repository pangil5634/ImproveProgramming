const { printResult } = require("../src/index");

describe("BOJ 1157 - 단어 공부", () => {
  test("Mississipi -> ?", () => {
    expect(printResult("Mississipi")).toEqual("?");
  });

  test("zZa -> Z", () => {
    expect(printResult("zZa")).toEqual("Z");
  });

  test("z -> Z", () => {
    expect(printResult("z")).toEqual("Z");
  });

  test("baaa -> A", () => {
    expect(printResult("baaa")).toEqual("A");
  });
});
