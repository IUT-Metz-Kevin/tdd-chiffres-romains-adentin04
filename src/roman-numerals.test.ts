import { test, expect } from "vitest";
import { RomanNumeral } from '../controler/RomanNumeral.js';

test.each([
  ["I", 1],
  ["V", 5],
  ["IV", 4],
  ["X", 10],
  ["XL", 40],
  ["L", 50],
  ["C", 100],
  ["CCL", 250],
  ["MCMXCIV", 1994],
])("should convert %s to %i", (input, expected) => {
  let roman = new RomanNumeral();
  expect(roman.of(input)).toBe(expected);
});
