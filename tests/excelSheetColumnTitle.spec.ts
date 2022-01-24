import { expect } from "chai";
import "mocha";
import convertToTitle from "../src/excelSheetColumnTitle/excelSheetColumnTitle";

describe.skip("excel sheet column title solution tests", () => {
  it("should return A if input column number is 1", () => {
    let result = convertToTitle(1);
    expect(result).to.equal("A");
  });

  it("should return AB if input column number is 28", () => {
    let result = convertToTitle(28);
    expect(result).to.equal("AB");
  });

  it("should return ZY if input column number is 701", () => {
    let result = convertToTitle(701);
    expect(result).to.equal("ZY");
  });

  it("should return FXSHRXW if input column number is 2147483647", () => {
    let result = convertToTitle(2147483647);
    expect(result).to.equal("FXSHRXW");
  });
});
