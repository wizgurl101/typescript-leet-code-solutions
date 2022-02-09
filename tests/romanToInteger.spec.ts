import { expect } from "chai";
import "mocha";
import { romanToInt } from "../src/romanToInteger";

describe("roman to integer solution tests", () => {
  it("should return 3", () => {
    let result = romanToInt("III");
    expect(result).to.equal(3);
  });

  it("should return 58", () => {
    let result = romanToInt("LVIII");
    expect(result).to.equal(58);
  });

  it("should return 1994", () => {
    let result = romanToInt("MCMXCIV");
    expect(result).to.equal(1994);
  });
});
