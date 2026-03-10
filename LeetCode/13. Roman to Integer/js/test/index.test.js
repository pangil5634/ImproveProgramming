const { romanToInt } = require("../src/index");

describe("13. Roman to Integer", () => {
  test('s = "III" -> 3', () => {
    expect(romanToInt("III")).toBe(3);
  });

  test('s = "LVIII" -> 58', () => {
    expect(romanToInt("LVIII")).toBe(58);
  });

  test('s = "MCMXCIV" -> 1994', () => {
    expect(romanToInt("MCMXCIV")).toBe(1994);
  });

  test('s = "IV" -> 4', () => {
    expect(romanToInt("IV")).toBe(4);
  });

  test('s = "IX" -> 9', () => {
    expect(romanToInt("IX")).toBe(9);
  });
});
