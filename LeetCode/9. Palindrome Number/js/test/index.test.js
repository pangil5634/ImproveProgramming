const { isPalindrome } = require("../src/index");

describe("9. Palindrome Number", () => {
  test("x = 121 -> true", () => {
    expect(isPalindrome(121)).toBe(true);
  });

  test("x = -121 -> false", () => {
    expect(isPalindrome(-121)).toBe(false);
  });

  test("x = 10 -> false", () => {
    expect(isPalindrome(10)).toBe(false);
  });

  test("x = 0 -> true", () => {
    expect(isPalindrome(0)).toBe(true);
  });
});
