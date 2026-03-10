const { solution } = require("../src/index");

describe("BOJ 11659 - 구간 합 구하기 4", () => {
  test("기본 예제 테스트", () => {
    const numbers = [5, 4, 3, 2, 1];
    const queries = [
      [1, 3],
      [2, 4],
      [5, 5],
    ];
    expect(solution(numbers, queries)).toEqual([12, 9, 1]);
  });

  test("원소가 하나일 때", () => {
    const numbers = [10];
    const queries = [[1, 1]];
    expect(solution(numbers, queries)).toEqual([10]);
  });

  test("전체 구간 합", () => {
    const numbers = [1, 2, 3, 4, 5];
    const queries = [[1, 5]];
    expect(solution(numbers, queries)).toEqual([15]);
  });

  test("여러 구간 합", () => {
    const numbers = [1, 2, 3, 4, 5];
    const queries = [
      [1, 3],
      [2, 5],
      [3, 3],
    ];
    expect(solution(numbers, queries)).toEqual([6, 14, 3]);
  });
});
