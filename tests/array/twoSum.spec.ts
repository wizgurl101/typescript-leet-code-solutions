import { expect } from "chai";
import "mocha";
import { twoSum } from "../../src/array/twoSum";

describe("two sum solution tests", () => {
  it("Given [3,2,4] and target of 6 When calculating its two sum Then [1,2]", () => {
    const inputArray = [3, 2, 4];
    const inputTarget = 6;
    const result = twoSum(inputArray, inputTarget);
    expect(result).to.be.an("array").that.is.not.empty;
    expect(result).to.include(1);
    expect(result).to.include(2);
  });

  it("Given [3,3] and target of 6 When calculating its two sum Then [0,1]", () => {
    const inputArray = [3, 3];
    const inputTarget = 6;
    const result = twoSum(inputArray, inputTarget);
    expect(result).to.be.an("array").that.is.not.empty;
    expect(result).to.include(0);
    expect(result).to.include(1);
  });

  it("Given [2,7,11,15] and target of 9 When calculating its two sum Then [0,1]", () => {
    const inputArray = [2, 7, 11, 15];
    const inputTarget = 9;
    const result = twoSum(inputArray, inputTarget);
    expect(result).to.be.an("array").that.is.not.empty;
    expect(result).to.include(0);
    expect(result).to.include(1);
  });
});
