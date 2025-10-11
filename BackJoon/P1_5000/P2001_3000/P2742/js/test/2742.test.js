// test/2742.test.js
const { generateDescending } = require("../src/index");

describe("BOJ 2742 - 기찍 N", () => {
  test("N이 1이면 ['1']을 반환한다", () => {
    expect(generateDescending(1)).toEqual(["1"]);
  });

  test("N이 3이면 ['3','2','1']을 반환한다", () => {
    expect(generateDescending(3)).toEqual(["3", "2", "1"]);
  });

  test("N이 5이면 ['5','4','3','2','1']을 반환한다", () => {
    expect(generateDescending(5)).toEqual(["5", "4", "3", "2", "1"]);
  });
});
